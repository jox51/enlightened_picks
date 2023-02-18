import React from "react"
import mainLogo from "../images/logo.svg"

const Logo = () => {
  return (
    <div className="container h-24">
      <img className="p-8 h-56" src={mainLogo} alt="logo" />
    </div>
  )
}

export default Logo
