import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const apiUrl = "https://odds.p.rapidapi.com/v4/sports"
// const apiKey = process.env.REACT_APP_API_KEY
const apiKey = "1240f4bf06msh22e9d539d535101p1b1ff3jsn337bd1967b6d"
const apiHost = "odds.p.rapidapi.com"

const initialState = {
  loading: true,
  value: "",
  team: "",
  sport: "",
  stats: [],
  theme: "corporate",
  initSelection: [],
  selectedPicks: [],
  loadedPicks: [],
  publishedPicks: [],
  strapiIDs: [],
  postClearList: []
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

    return resp.data
  } catch (error) {
    return error.message
  }
})

export const sendData = createAsyncThunk(
  "selected/data",
  async (_, thunkAPI) => {
    // params passing user input

    const { selectedPicks } = thunkAPI.getState().stats
    for (let i = 0; i < selectedPicks.length; i++) {
      try {
        const resp = await axios.post(
          `https://strapi-yt9z.onrender.com/api/picks`,
          {
            data: {
              picks: JSON.stringify(selectedPicks[i])
            }
          }
        )
      } catch (error) {
        return error.message
      }
    }
  }
)

export const sendPublishedData = createAsyncThunk(
  "published/data",
  async (_, thunkAPI) => {
    // params passing user input
    try {
      const { selectedPicks } = thunkAPI.getState().stats

      const resp = await axios.post(
        `https://strapi-yt9z.onrender.com/api/published-picks`,
        {
          data: {
            published_picks: JSON.stringify(selectedPicks)
          }
        }
      )
      return resp.data
    } catch (error) {
      return error.message
    }
  }
)

export const grabPicks = createAsyncThunk("grab/picks", async (_, thunkAPI) => {
  // params passing user input
  try {
    const { selectedPicks } = thunkAPI.getState().stats
    const resp = await axios(`https://strapi-yt9z.onrender.com/api/picks`)
    return resp.data.data
  } catch (error) {
    return error.message
  }
})

// Sends selections of picks to db for deletion
export const sendSelects = createAsyncThunk(
  "send/selects",
  async (_, thunkAPI) => {
    // params passing user input
    try {
      const { strapiIDs } = thunkAPI.getState().stats

      // let config = {
      //   params: sendIDs
      // }

      const resp = await axios.delete(
        `https://strapi-yt9z.onrender.com/api/picks/${strapiIDs}`
      )

      return resp.data
    } catch (error) {
      return error.message
    }
  }
)

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
    themeChanger: (state, { payload }) => {
      state.theme = payload
    },
    clearSubsSelections: (
      state,
      { payload: { clearRows, sendIDs, resetGridArr } }
    ) => {
      state.selectedPicks = clearRows
      state.strapiIDs = sendIDs
    },
    editComments: (state, { payload }) => {
      state.initSelection = payload
    },
    addNewPlays: (state, { payload }) => {
      state.initSelection.push(payload)
    },
    selectedFinalRows: (state, { payload }) => {
      state.selectedPicks = payload
    },
    sendConvArr: (state, { payload }) => {
      state.loadedPicks = payload
    },
    refreshSubList: (state, { payload }) => {
      let tempRowData = [...state.loadedPicks]
      let rowsToFilter = payload
      let newRowData = tempRowData.map((pick) => {
        const { attributes } = pick
        const { picks } = attributes
        let tempArr = JSON.parse(picks)
        return tempArr
      })
      console.log(rowsToFilter)
      let filteredRowData = newRowData.filter((x) => {
        return rowsToFilter.some((y) => y !== x)
      })

      state.postClearList = filteredRowData
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
      .addCase(grabPicks.pending, (state) => {
        state.loading = true
      })
      .addCase(grabPicks.fulfilled, (state, { payload }) => {
        state.loading = false
        state.loadedPicks = payload
        let tempRowData = payload
        let newRowData = tempRowData.map((pick) => {
          const { attributes } = pick
          const { picks } = attributes
          let tempArr = JSON.parse(picks)
          return tempArr
        })
        state.postClearList = newRowData
      })
      .addCase(grabPicks.rejected, (state, { payload }) => {
        state.loading = false
      })
  }
})

export const {
  handleChange,
  submitHandler,
  selectedHandler,
  clearSelections,
  clearSubsSelections,
  clearStats,
  editComments,
  addNewPlays,
  selectedFinalRows,
  sendConvArr,
  refreshSubList,
  themeChanger
} = statsSlice.actions

export default statsSlice.reducer
