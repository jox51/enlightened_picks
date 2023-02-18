import React from "react"

const Footer = () => {
  const d = new Date()
  return (
    <>
      <section className="w-full h-40 bg-slate-300 flex justify-center items-center shadow-md ">
        <a href="https://twitter.com" target="_blank" className="m-3">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <div>&copy; All rights reserved {d.getFullYear()}</div>
      </section>
    </>
  )
}

export default Footer
