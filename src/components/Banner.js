import React from "react"
import Footer from "./Footer"

const Banner = () => {
  return (
    <div className="mt-14 ">
      <div>
        <div
          className="bg-white mt-0 mr-auto mb-0 ml-auto pt-16 pr-4 pb-16 pl-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl
    md:px-24 lg:px-8 lg:py-20"
        >
          <div className=" shadow-xl pt-8 pr-8 pb-8 pl-8 sm:p-16">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:mb-0 lg:w-1/2 lg:pr-5 mb-6">
                <div>
                  <p className="block text-3xl font-bold tracking-tight text-gray-900 leading-6 font-sans sm:text-4xl">
                    Top sports picks based
                  </p>
                  <p
                    className="inline text-3xl font-bold tracking-tight text-gray-900 font-sans sm:text-4xl
              sm:leading-none"
                  >
                    &nbsp;on proprietary&nbsp;
                  </p>
                  <p
                    className="inline text-blue-700 text-3xl font-bold tracking-tight font-sans sm:text-4xl
              sm:leading-none"
                  >
                    Knowledge
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <p className="mb-4 text-base text-left text-gray-700">
                  <span>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: 1.38,
                        marginTop: 0 + "pt",
                        marginBottom: 0 + "pt"
                      }}
                    >
                      <span>
                        Our top-of-the-line sports picking service offers daily
                        picks for a variety of sports, including football,
                        basketball, baseball, hockey, and more. Our expert team
                        carefully analyzes each game, taking into account key
                        variables like team performance and injuries, to give
                        you the most accurate and reliable picks possible. We
                        also provide detailed analysis and insights on each
                        pick, and our customer support team is always available
                        to help. Sign up now and start winning big with our
                        help!
                      </span>
                    </p>
                    <div>
                      <span>
                        <br />
                      </span>
                    </div>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white pt-16 pr-4 pb-16 pl-4 md:px-24 lg:px-8 lg:py-20">
          <div className="bg-white mt-0 mr-auto mb-0 ml-auto sm:max-w-xl lg:max-w-screen-xl md:max-w-full">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              <div className="grid gap-6 md:grid-cols-2 md:col-span-2 lg:col-span-3">
                <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-indigo-50">
                  <div className="flex items-center mt-0 mr-0 mb-1 ml-0">
                    <div className="inline-flex items-center justify-center h-4 w-4 mt-0 mr-2 mb-0 ml-0 rounded bg-purple-400">
                      <p className="text-white text-xs font-medium">1</p>
                    </div>
                    <p className="font-semibold text-lg text-lg font-semibold sm:text-base">
                      Expert analysis and daily picks
                    </p>
                  </div>
                  <p className="text-sm text-gray-900">
                    Our team of analysts and statisticians provide daily picks
                    for a variety of sports, including football, basketball,
                    baseball, and soccer
                  </p>
                </div>
                <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-green-50">
                  <div className="flex items-center mt-0 mr-0 mb-1 ml-0">
                    <div className="inline-flex items-center justify-center w-4 h-4 mt-0 mr-2 mb-0 ml-0 rounded bg-green-400">
                      <p className="text-xs font-medium text-green-900">2</p>
                    </div>
                    <p className="text-lg font-semibold sm:text-base">
                      Unique analysis
                    </p>
                  </div>
                  <p className="text-sm text-gray-900">
                    Our unique picking is unlike everyone else out there which
                    is why we have a proven track record.
                  </p>
                </div>
                <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-green-50">
                  <div className="flex items-center mt-0 mr-0 mb-1 ml-0">
                    <div className="inline-flex items-center justify-center w-4 h-4 mt-0 mr-2 mb-0 ml-0 rounded bg-green-400">
                      <p className="text-xs font-medium text-green-900">3</p>
                    </div>
                    <p className="text-lg font-semibold sm:text-base">
                      Daily picks
                    </p>
                  </div>
                  <p className="text-sm text-gray-900">
                    Picks chosen daily and conservatively. No gamble or impulse
                    plays. Just a consistent strategy that you can use over and
                    over again.
                  </p>
                </div>
                <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-indigo-50">
                  <div className="flex items-center mt-0 mr-0 mb-1 ml-0">
                    <div className="inline-flex items-center justify-center h-4 w-4 mt-0 mr-2 mb-0 ml-0 rounded bg-purple-400">
                      <p className="text-white text-xs font-medium">4</p>
                    </div>
                    <p className="text-lg font-semibold sm:text-base">
                      Your easy side hustle
                    </p>
                  </div>
                  <p className="text-sm text-gray-900">
                    Use this a source of side income with minimal time wasted on
                    your part. We do the heavy lifting for you. Just login,
                    choose your picks, and place your bets. Simple, easy, and
                    repeatable.
                  </p>
                </div>
              </div>
              <div className="relative md:col-span-2 lg:col-span-2">
                <img
                  src="https://images.pexels.com/photos/1116302/pexels-photo-1116302.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                  className="btn- w-full h-56 rounded shadow-lg inset-0 object-cover object-bottom lg:absolute lg:h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
