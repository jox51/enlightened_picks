import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { submitHandler, oddsData } from "../features/stats/statsSlice"

const Sports = () => {
  const dispatch = useDispatch()

  const localHandler = (e) => {
    e.preventDefault()
    dispatch(submitHandler(e.target.id))
    dispatch(oddsData())
  }

  return (
    <>
      <section className="sports flex justify-center items-center shadow-md pb-4">
        <button
          className="btn  text-lg font-bold m-5"
          id="basketball"
          onClick={(e) => localHandler(e)}
        >
          <i className="fa-solid fa-basketball"></i>
        </button>
        <button
          className="btn  text-lg font-bold m-5"
          id="americanfootball"
          onClick={(e) => localHandler(e)}
        >
          <i className="fa-solid fa-football"></i>
        </button>
        <button
          className="btn  text-lg font-bold m-5"
          id="soccer"
          onClick={(e) => localHandler(e)}
        >
          <i className="fa-solid fa-futbol"></i>
        </button>
        <button
          className="btn  text-lg font-bold m-5"
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
