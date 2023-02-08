import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  submitHandler,
  handleChange,
  oddsData
} from "./features/stats/statsSlice"

import Logo from "./components/Logo"
import Sports from "./components/Sports"
import Navigation from "./components/Navigation"
import { sumDay, resLP } from "./utils/numerlogyCalcs"
import Table from "./components/Table"
import FinalTable from "./components/FinalTable"
import Title from "./components/Title"

const Stats = () => {
  const dispatch = useDispatch()
  const {
    loading,
    value,
    team,
    stats: { data },
    logo
  } = useSelector((store) => store.stats)

  // const away = data?.map((games) => {
  //   const { away_team, home_team, sport_title, bookmakers } = games

  //   bookmakers.map((book) => {
  //     const { title, markets } = book

  //     markets.map((market) => {
  //       const { outcomes } = market
  //       return console.log(outcomes)
  //     })

  //     return console.log(title)
  //   })

  //   return console.log(bookmakers)
  // })

  const localHandler = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    // dispatch(bounceReq(userUrl))
    dispatch(submitHandler(value))
    dispatch(oddsData())
  }

  return (
    <main className="bg-lightGray-100 h-screen">
      {/* <Logo /> */}
      <Sports />
      <Title text={"Initial List"} />
      <Table />
      <Title text={"Final List"} />
      <FinalTable />

      {/* <h1>Your Sports Picks</h1>
      <section>
        <form htmlFor="site">
          <input
            type="text"
            name="team"
            value={value}
            id="team"
            onChange={(e) => dispatch(handleChange(e.target.value))}
          />

          <button onClick={(e) => localHandler(e)} type="submit">
            Submit team
          </button>
        </form>
      </section>
      <section>
        <img src={`${logo}`} alt="logo-img" />
        <p>{`${stats}`}</p>
      </section> */}
    </main>
  )
}

export default Stats
