import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const apiUrl = "https://odds.p.rapidapi.com/v4/sports"
const apiKey = process.env.REACT_APP_API_KEY
const apiHost = "odds.p.rapidapi.com"

const initialState = {
  loading: true,
  value: "",
  team: "",
  sport: "",
  stats: [],
  initSelection: [],
  finalPicks: []
}

export const oddsData = createAsyncThunk("odds/data", async (_, thunkAPI) => {
  let config = {
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": apiHost
    },
    params: { regions: "us", markets: "h2h" }
  }

  // params passing user input
  try {
    const { sport } = thunkAPI.getState().stats
    const resp = await axios(`${apiUrl}/${sport}/odds`, config)

    return resp
  } catch (error) {
    return error.message
  }
})

const statsSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {
    handleChange: (state, { payload }) => {
      state.value = payload
    },
    submitHandler: (state, { payload }) => {
      state.sport = payload
    },
    selectedHandler: (state, { payload }) => {
      state.initSelection = payload
    },
    clearStats: (state) => {
      state.stats = []
    },
    clearSelections: (state) => {
      state.initSelection = []
    },
    editComments: (state, { payload }) => {
      state.initSelection = payload
    },
    selectedFinalRows: (state, { payload }) => {
      state.finalPicks = payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(oddsData.pending, (state) => {
        state.loading = true
      })
      .addCase(oddsData.fulfilled, (state, { payload }) => {
        state.loading = false
        state.stats = payload
        // state.logo = payload.logo
      })
      .addCase(oddsData.rejected, (state, { payload }) => {
        state.loading = false
        console.log(payload)
      })
  }
})

export const {
  handleChange,
  submitHandler,
  selectedHandler,
  clearSelections,
  clearStats,
  editComments,
  selectedFinalRows
} = statsSlice.actions

export default statsSlice.reducer
