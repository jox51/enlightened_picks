import React from "react"
import mainLogo from "../images/logo.svg"

const Logo = () => {
  return (
    <div className="header h-24">
      <img className="p-8 h-60" src={mainLogo} alt="logo" />
    </div>
  )
}

export default Logo
