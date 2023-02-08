import { configureStore } from "@reduxjs/toolkit"
import statsSlice from "./features/stats/statsSlice"

export const store = configureStore({
  reducer: {
    stats: statsSlice
  }
})
