import React, { useState, useRef } from "react"
import { Link } from "react-router-dom"
import Logo from "../components/Logo"
import AuthLogin from "./AuthLogin"
import AuthLogout from "./AuthLogout"
import { useAuth0 } from "@auth0/auth0-react"
import Profile from "./Profile"

const Admin = () => {
  return (
    <>
      <li className="px-3 h-30 w-26 rounded-lg text-semibold cursor-pointer">
        <Link to={"/subscriber"}>Get Picks</Link>
      </li>
      <li className=" cursor-pointer ">
        <Link to={"/admin"}>Admin</Link>
      </li>
    </>
  )
}

const MobileMenu = () => {
  const [hideMenu, setHideMenu] = useState(false)
  const [classToShow, setClassToShow] = useState("")

  const hideClass = () => {
    setHideMenu(() => !hideMenu)
    if (!hideMenu) setClassToShow("")
    if (hideMenu) setClassToShow("hidden")
  }

  return (
    <div
      className={`${classToShow} sm:flex fixed w-full h-screen z-[100]  justify-center items-center bg-slate-500/50`}
    >
      <span className="text-black absolute top-60 right-8">
        <i className="fa-solid fa-x cursor-pointer" onClick={hideClass}></i>
      </span>
      <p className="text-black">I'm A Pop Up!!!</p>
    </div>
  )
}

const LogoAlt = () => {
  const { isAuthenticated, user, loginWithRedirect } = useAuth0()

  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className="container flex items-center px-4  py-4 mt-4 sm:h-24 sm:mt-12 shadow-md">
      <div className="py-1">
        <Link to={"/"} className="cursor-pointer">
          <Logo />
        </Link>
      </div>
      <ul className="hidden sm:flex flex-1 items-center justify-end gap-12 text-bookmark-blue uppercase text-xs">
        <li className="cursor-pointer">
          <a href="#features">features</a>
        </li>
        <li className="cursor-pointer">
          <a href="#pricing">pricing</a>
        </li>
        <li className="cursor-pointer">
          <Link to="#contact">contact</Link>
        </li>

        {isAuthenticated && <Admin />}
        {isAuthenticated ? <AuthLogout /> : <AuthLogin />}
        <Profile />
      </ul>
      {showMenu && <MobileMenu />}
      <div className="flex sm:hidden flex-1 justify-end">
        <i
          className="fa-solid fa-bars text-2xl cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        ></i>
      </div>
    </nav>
  )
}

export default LogoAlt
