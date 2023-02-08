import React from "react"
import mainLogo from "../images/logo.svg"

const Navigation = () => {
  return (
    <div>
      <div className="canvas-paper">
        <div className="bg-white pt-4 pr-8 pb-4 pl-8">
          <div className="w-full">
            <div className="flex w-full justify-between max-w-screen-2xl md:flex-row mt-auto mr-auto mb-auto ml-auto">
              <div className="flex flex-row bg-white justify-between items-center mt-2 mb-2 md:m-0 hidden md:flex">
                <a
                  href="#"
                  className="text-gray-600 text-center mr-6 font-medium text-base"
                >
                  Product
                </a>
                <a
                  href="#"
                  className="text-gray-600 text-center mr-6 font-medium text-base"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="text-gray-600 text-center font-medium text-base"
                >
                  Pricing
                </a>
              </div>
              <div className="bg-white flex-row flex items-center justify-center order-first md:order-none">
                <img src={mainLogo} className="btn- w-12 md:w-16" />
              </div>
              <div className="flex justify-center items-center md:justify-start hidden md:flex">
                <button
                  className="h-9 w-24 text-gray-600 bg-white border-2 border-white flex items-center justify-center
                text-center rounded-lg text-lg font-normal mr-6"
                >
                  Sign in
                </button>
                <button
                  className="h-9 w-24 text-white bg-blue-700 hover:bg-blue-900 hover:border-blue-900 border-2 flex
                items-center justify-center text-center border-blue-700 rounded-lg text-lg font-normal mr-auto"
                >
                  Sign up
                </button>
              </div>
              <div className="md:hidden flex items-center">
                <div className="outline-none mobile-menu-button">
                  <svg
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-500
                  hover:text-green-500"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="hidden md:hidden md:hidden mobile-menu">
              <div>
                <div className="active">
                  <a
                    url="#"
                    className="text-gray-600 text-center mt-2 font-medium text-base"
                  >
                    Product
                  </a>
                  <a
                    url="#"
                    className="text-gray-600 text-center mt-2 font-medium text-base"
                  >
                    Features
                  </a>
                  <a
                    url="#"
                    className="text-gray-600 text-center mt-2 font-medium text-base"
                  >
                    Pricing
                  </a>
                  <button
                    className="h-9 w-24 text-gray-600 bg-white border-2 border-white flex items-center justify-center
                  text-center rounded-lg text-lg font-normal mt-2 mr-auto ml-auto"
                  >
                    Sign in
                  </button>
                  <button
                    className="h-9 w-24 text-white bg-blue-700 hover:bg-blue-900 hover:border-blue-900 border-2 flex
                  items-center justify-center text-center border-blue-700 rounded-lg text-lg font-normal mt-2 mr-auto
                  ml-auto"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation
