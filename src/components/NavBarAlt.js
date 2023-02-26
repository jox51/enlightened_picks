import React from "react"
import { Link, Outlet } from "react-router-dom"
import logo4 from "../images/logo_four.png"
import AuthLogin from "../components/AuthLogin"
import AuthLogout from "../components/AuthLogout"
import Profile from "../components/Profile"
import { useAuth0 } from "@auth0/auth0-react"
import AdminLinks from "../components/AdminLinks"
import ToggleBtn from "../components/ToggleBtn"

const NavBarAlt = () => {
  const { isAuthenticated, user } = useAuth0()

  // Daisy UI responsive Navbar
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {user?.elroles === "subscriber" && <AdminLinks />}
              <li tabIndex={0}>
                <a href="#" className="justify-between">
                  Learn More
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li className="cursor-pointer">
                    <a href="#features">Features</a>
                  </li>
                  <li className="cursor-pointer">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </li>
              <li className="cursor-pointer">
                <a href="#subscribe">Subscribe</a>
              </li>
            </ul>
          </div>
          <Link to="/" className="pl-3">
            <img className="h-20" src={logo4} alt="logo" />
          </Link>
          <span className="pt-2 font-body font-Goudy">
            Enlightened
            <br />
            Picks
          </span>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {user?.elroles === "subscriber" && <AdminLinks />}

            <li tabIndex={0}>
              <a href="#">
                Learn More
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li className="cursor-pointer">
                  <a href="#features">Features</a>
                </li>
                <li className="cursor-pointer">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </li>
            <li className="cursor-pointer">
              <a href="#subscribe">Subscribe</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <ToggleBtn />
          {isAuthenticated ? <AuthLogout /> : <AuthLogin />}
          <Profile />
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default NavBarAlt
