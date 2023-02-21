import React from "react"
import { sumDay, resLP } from "../utils/numerlogyCalcs"

export const PremiumPicks = (p) => {
  return p.data.line_price <= (sumDay || resLP) + 0.5 &&
    p.data.line_price >= (sumDay || resLP) - 0.5 ? (
    <div className="flex justify-center items-center pt-2 pr-8">
      <i className="fa-solid fa-lightbulb text-yellow-500 "> Premium</i>
    </div>
  ) : null
}
