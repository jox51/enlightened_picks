import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js"
import {
  subHandler,
  paypalData,
  sendSubscriberData
} from "../features/paypal/paypalSlice"

const planId = process.env.REACT_APP_PAYPAL_PLAN

const PaypalBtn = ({ type }) => {
  const [{ options }, dispatch] = usePayPalScriptReducer()
  const dispRedux = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        intent: "subscription"
      }
    })
  }, [type])

  const paypalStyles = {
    layout: "horizontal",
    color: "blue",
    shape: "rect",
    label: "subscribe"
  }

  return (
    <PayPalButtons
      className="mx-4 pt-3"
      createSubscription={(data, actions) => {
        return actions.subscription
          .create({
            plan_id: planId
          })
          .then((orderId) => {
            // Your code here after create the order
            return orderId
          })
      }}
      onApprove={(data, actions) => {
        // receives subscription ID after successful payment
        dispRedux(subHandler(data.subscriptionID))
        // goes to success page
        navigate("/success")
        // receives subscriber data from paypal, records it to state
        dispRedux(paypalData())
        setTimeout(() => {
          //takes subscriber data from state, sends it to db
          dispRedux(sendSubscriberData())
        }, 2000)
        console.log("subscription id :", data.subscriptionID)
      }}
      style={paypalStyles}
    />
  )
}

export default PaypalBtn
