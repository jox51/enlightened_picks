import React, { useState } from "react"

const Chevron = () => {
  const [rotate, setRotate] = useState("left")
  const rotateAngle = rotate === true ? `down` : "left"

  const faqHandler = (e) => {
    e.preventDefault()
    setRotate(() => !rotate)
  }

  return (
    <i
      className={`fa-solid fa-chevron-${rotateAngle} text-bookmark-purple inline-block transition duration-300}`}
      onClick={(e) => faqHandler(e)}
    ></i>
  )
}

export default Chevron
