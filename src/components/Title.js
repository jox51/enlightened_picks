import React from "react"

const Title = ({ text }) => {
  return (
    <div className="flex justify-center items-center h-6 pt-8">
      <h1 className="font-large underline leading-tight text-4xl text-blue-600 ">
        {text}
      </h1>
    </div>
  )
}

export default Title
