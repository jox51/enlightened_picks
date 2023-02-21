import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { themeChange } from "theme-change"
import { themeChanger } from "../features/stats/statsSlice"

const ToggleBtn = () => {
  const dispatch = useDispatch()

  const { theme } = useSelector((store) => store.stats)

  const localHandler = () => {
    if (theme === "corporate") {
      return dispatch(themeChanger("dark"))
    }
    if (theme === "dark") dispatch(themeChanger("corporate"))
  }

  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <label className=" cursor-pointer swap swap-rotate">
      <input type="checkbox" defaultChecked="true" onClick={localHandler} />
      <i
        className="swap-on fa-regular fa-sun text-2xl"
        data-set-theme="corporate"
      ></i>
      <i
        className="swap-off fa-solid fa-moon text-2xl"
        data-set-theme="dark"
      ></i>
    </label>
  )
}

export default ToggleBtn
