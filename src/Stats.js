import React from "react"
import { Routes, Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
  submitHandler,
  handleChange,
  oddsData
} from "./features/stats/statsSlice"
import Admin from "./pages/Admin"
import Subscriber from "./pages/Subscriber"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Landings from "./pages/Landings"
import PrivateRoute from "./components/PrivateRoute"
import LandingThree from "./pages/LandingThree"
import NavBarAlt from "./components/NavBarAlt"

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
    dispatch(submitHandler(value))
    dispatch(oddsData())
  }

  return (
    <main className="bg-lightGray-100 h-screen font-Poppins">
      <NavBarAlt />

      <Routes>
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="/" element={<LandingThree />} />
        <Route path="about_us" element={<About />} />
        <Route path="contact_us" element={<Contact />} />
        <Route path="landing_three" element={<LandingThree />} />
        <Route element={<PrivateRoute />}>
          <Route path="subscriber" element={<Subscriber />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </main>
  )
}

export default Stats
