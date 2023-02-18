import React from "react"

const FooterThree = () => {
  const d = new Date()

  return (
    <>
      <div className="divider"></div>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div className="grid grid-flow-col gap-4">
          <a className="link link-hover cursor-pointer" href="#features">
            Features
          </a>
          <a className="link link-hover cursor-pointer" href="#pricing">
            Pricing
          </a>
          <a className="link link-hover cursor-pointer" href="#Contact">
            Contact
          </a>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a href="https://twitter.com">
              <i className="fa-brands fa-twitter cursor-pointer text-2xl"></i>
            </a>

            <a href="https://instragram.com">
              <i className="fa-brands fa-instagram cursor-pointer text-2xl"></i>
            </a>
          </div>
        </div>
        <div>
          <p>
            Copyright © {d.getFullYear()} - All right reserved by Enlightened
            Picks
          </p>
        </div>
      </footer>
    </>
  )
}

export default FooterThree
