import React from "react"
import { Link, Outlet } from "react-router-dom"

import Logo from "./Logo"

const Navbar = () => {
  return (
    <>
      <section className="sports flex justify-center items-center shadow-md">
        <Logo />
        <button className="bg-lightGreen px-3 w-26 h-30 rounded-lg text-ochre-900 text-lg font-bold m-5">
          <Link to={"/"}>Home</Link>
        </button>
        <button className="bg-lightGreen px-3 h-30 w-26 rounded-lg text-ochre-900 text-lg font-bold m-5">
          <Link to={"/subscriber"}>Get Picks</Link>
        </button>
        <button className="bg-lightGreen px-3 w-26 h-30 rounded-lg text-ochre-900 text-lg font-bold m-5">
          <Link to={"/about_us"}>About Us</Link>
        </button>
        <button className="bg-lightGreen px-3 w-26 h-30 rounded-lg text-ochre-900 text-lg font-bold m-5">
          <Link to={"/contact_us"}>Contact Us</Link>
        </button>
      </section>
      <Outlet />
    </>
  )
}

export default Navbar
