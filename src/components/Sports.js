import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  submitHandler,
  handleChange,
  oddsData
} from "../features/stats/statsSlice"
import Logo from "./Logo"

const Sports = () => {
  const dispatch = useDispatch()
  const { loading, value, sport, stats } = useSelector((store) => store.stats)

  const localHandler = (e) => {
    e.preventDefault()
    dispatch(submitHandler(e.target.id))
    dispatch(oddsData())
  }

  return (
    <>
      <section className="sports flex justify-center items-center shadow-md">
        <Logo />
        <button
          className="bg-lightGreen w-20 h-30 rounded-lg text-ochre-900 text-lg font-bold m-5"
          id="basketball"
          onClick={(e) => localHandler(e)}
        >
          <i className="fa-solid fa-basketball"></i>
        </button>
        <button
          className="bg-lightGreen w-20 h-30 rounded-lg text-ochre-900 text-lg font-bold m-5"
          id="americanfootball"
          onClick={(e) => localHandler(e)}
        >
          <i className="fa-solid fa-football"></i>
        </button>
        <button
          className="bg-lightGreen w-20 h-30 rounded-lg text-ochre-900 text-lg font-bold m-5"
          id="soccer"
          onClick={(e) => localHandler(e)}
        >
          <i className="fa-solid fa-futbol"></i>
        </button>
        <button
          className="bg-lightGreen w-20 h-30 rounded-lg text-ochre-900 text-lg font-bold m-5"
          id="baseball_mlb"
          onClick={(e) => localHandler(e)}
        >
          <i className="fa-solid fa-baseball"></i>
        </button>
      </section>
    </>
  )
}

export default Sports
