import React from "react"
import { Link } from "react-router-dom"

const SubLinks = () => {
  return (
    <>
      <li className="h-30 w-26 rounded-lg text-semibold cursor-pointer">
        <Link to={"/subscriber"}>Get Picks</Link>
      </li>
    </>
  )
}

export default SubLinks
