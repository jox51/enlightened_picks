import React from "react"

const PricingCard = () => {
  return (
    <>
      <div className="divider"></div>
      <section
        className="flex justify-center items-center  shadow-lg my-3 p-8 py-5 max-w-xl mx-auto px-4 sm:px-6 lg:px-8"
        id="subscribe"
      >
        <div className="mt-4 bg-white rounded-xl px-5">
          <h3 className="mt-4 text-lg leading-5 font-bold">The Only Plan</h3>
          <p className="mt-4 text-sm leading-6">
            Start winning picks today with the best sports picking service
          </p>
          <div className="mt-4 bg-slate-50 rounded-md p-4">
            <p className="flex items-center text-sm font-semibold text-slate-500">
              <span className="text-xl">$</span>
              <span className="text-4xl text-slate-900 ml-3">17</span>
              <span className="ml-1.5"> /Month</span>
            </p>
          </div>
          {/* Features */}
          <ul className="mt-6 space-y-4 flex-1">
            <li className="text-sm text-slate-700 leading-6">
              <i className="fa-solid fa-check text-bookmark-purple px-2"></i>
              <span>Carefully curated picks delivered to you daily</span>
            </li>
            <li className="text-sm text-slate-700 leading-6">
              <i className="fa-solid fa-check text-bookmark-purple px-2"></i>
              <span>
                We only pick the most popular sports with plenty of demand
              </span>
            </li>
            <li className="text-sm text-slate-700 leading-6">
              <i className="fa-solid fa-check text-bookmark-purple px-2"></i>
              <span>
                Parlays selected with the highest chance for a positive outcome
              </span>
            </li>
          </ul>
          {/* Call to action */}
          <a
            href="#"
            className="btn mt-8 block px-6 py-4 text-sm font-semibold text-center rounded-lg shadow-md mb-2"
          >
            Subscribe Now
          </a>
        </div>
      </section>
    </>
  )
}

export default PricingCard
