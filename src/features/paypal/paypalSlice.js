import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const clientId = process.env.REACT_APP_PAYPAL_CLIENT
const planId = process.env.REACT_APP_PAYPAL_PLAN
const bearer = process.env.REACT_APP_PAYPAL_BEARER

const sandboxUrl = "https://api.sandbox.paypal.com/v1/billing/subscriptions/"
const mainUrl = "https://api.paypal.com/v2/billing/subscriptions/"

const initialState = {
  subscriptionId: "",
  payerName: "",
  payerEmail: "",
  status: "",
  nextBill: "",
  lastBill: "",
  apiResp: []
}

// Retrieves subsciption info from Paypal after successful payment
export const paypalData = createAsyncThunk(
  "paypal/data",
  async (_, thunkAPI) => {
    let config = {
      headers: {
        Authorization: `Bearer ${bearer}`,
        "Content-Type": "application/json"
      }
    }

    // params passing user input
    try {
      const { subscriptionId } = thunkAPI.getState().subsInfo
      const resp = await axios(`${sandboxUrl}${subscriptionId}`, config)

      return resp.data
    } catch (error) {
      return error.message
    }
  }
)

// Sends user subscription details to Strapi DB
export const sendSubscriberData = createAsyncThunk(
  "subscriber/data",
  async (_, thunkAPI) => {
    // params passing user input
    try {
      const {
        subscriptionId,
        payerName,
        payerEmail,
        status,
        nextBill,
        lastBill
      } = thunkAPI.getState().subsInfo

      const subInfo = {
        subscriptionId,
        payerName,
        payerEmail,
        status,
        nextBill,
        lastBill
      }

      console.log("subInfo :", subInfo)

      const resp = await axios.post(
        `https://strapi-yt9z.onrender.com/api/subscribers`,
        {
          data: {
            Subscriber: JSON.stringify(subInfo)
          }
        }
      )
      return resp.data
    } catch (error) {
      return error.message
    }
  }
)

const paypalSlice = createSlice({
  name: "paypal",
  initialState,
  reducers: {
    subHandler: (state, { payload }) => {
      state.subscriptionId = payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(paypalData.pending, (state) => {
        state.loading = true
      })
      .addCase(paypalData.fulfilled, (state, { payload }) => {
        state.loading = false
        const { status } = payload
        const { email_address } = payload.subscriber
        const { given_name, surname } = payload.subscriber.name
        const { next_billing_time, final_payment_time } = payload.billing_info

        state.payerName = `${given_name} ${surname}`
        state.payerEmail = email_address
        state.status = status
        state.nextBill = next_billing_time
        state.lastBill = final_payment_time
      })
      .addCase(paypalData.rejected, (state, { payload }) => {
        state.loading = false
        state.loadErr = payload
        console.log(payload)
      })
      .addCase(sendSubscriberData.pending, (state) => {
        state.loading = true
      })
      .addCase(sendSubscriberData.fulfilled, (state, { payload }) => {
        state.loading = false
        state.apiResp = payload
      })
      .addCase(sendSubscriberData.rejected, (state, { payload }) => {
        state.loading = false
        console.log(payload)
      })
  }
})

export const { subHandler } = paypalSlice.actions
export default paypalSlice.reducer
