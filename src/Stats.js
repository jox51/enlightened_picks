import React from "react"
import { Routes, Route } from "react-router-dom"
import Admin from "./pages/Admin"
import Subscriber from "./pages/Subscriber"
import Contact from "./pages/Contact"
import About from "./pages/About"
import PrivateRoute from "./components/PrivateRoute"
import PrivateRouteAdmin from "./components/PrivateRouteAdmin"
import LandingThree from "./pages/LandingThree"
import NavBarAlt from "./components/NavBarAlt"
import SubSuccess from "./pages/SubSuccess"

const Stats = () => {
  return (
    <main className="bg-lightGray-100 h-screen font-Poppins">
      <NavBarAlt />
      <Routes>
        <Route path="/" element={<LandingThree />} />
        <Route path="about_us" element={<About />} />
        <Route path="contact_us" element={<Contact />} />
        <Route path="landing_three" element={<LandingThree />} />
        <Route path="success" element={<SubSuccess />} />
        <Route element={<PrivateRoute />}>
          <Route path="subscriber" element={<Subscriber />} />
        </Route>
        <Route element={<PrivateRouteAdmin />}>
          <Route path="subscriber" element={<Subscriber />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </main>
  )
}

export default Stats
