import { configureStore } from "@reduxjs/toolkit"

import statsSlice from "./features/stats/statsSlice"
import paypalSlice from "./features/paypal/paypalSlice"

export const store = configureStore({
  reducer: {
    stats: statsSlice,
    subsInfo: paypalSlice
  }
})
