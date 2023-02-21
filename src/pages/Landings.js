import React from "react"

import proof1 from "../images/proofs/image.png"
import proof2 from "../images/proofs/image_1.png"
import proof3 from "../images/proofs/image_2.png"
import proof4 from "../images/proofs/image_3.png"

import sports from "../images/sports_business.jpg"

import basketball from "../images/basketball.jpeg"
import side_hustle from "../images/side_hustle.jpg"
import LogoAlt from "../components/LogoAlt"

import Accordion from "../components/Accordion"
import PricingCard from "../components/PricingCard"

const Landings = () => {
  const d = new Date()
  return (
    <>
      <header>
        <LogoAlt />
      </header>
      {/* Hero section */}
      <section className="relative">
        <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28 ">
          {/* Content */}
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className="text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left  mb-4">
              Consistent Winning Sports Picks
            </h2>
            <p className="text-bookmark-grey text-lg text-center lg:text-left mb-6">
              Our sports picks utilize a unique system of filtering out picks
              based on a specific criteria that bring out the best probability
              in winning.
            </p>
            <div className="flex justify-center flex-wrap gap-6">
              <button
                type="button"
                className="btn-landing btn-purple hover:bg-bookmark-white hover:text-black"
              >
                Learn More
              </button>
              <button
                type="button"
                className="btn-landing btn-white hover:bg-bookmark-purple hover:text-white"
              >
                Contact Us
              </button>
            </div>
          </div>
          {/* image */}

          <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
            <img
              className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full "
              src={sports}
              alt="hero-img"
            />
          </div>
        </div>
        {/* Rounded Rectangle */}
        <div className="hidden md:block overflow-hidden bg-bookmark-purple rounded-l-full absolute h-80 w-2/4 top-32 right-0 lg:-bottom-28 lg:-right-36 "></div>
      </section>

      {/* Features */}
      <section className="bg-bookmark-white mt-20 lg:mt60">
        {/* Heading */}
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1
            className="text-3xl text-center pt-3 text-bookmark-blue "
            id="features"
          >
            Features
          </h1>
          <p className="text-center text-bookmark-grey mt-4">
            We use simple picks and when probable, stack parlays that give you
            the best chance at winning. No gamble plays.
          </p>
        </div>
        {/* Feature Number 1 */}
        <div className="relative mt-20 lg:mt-24">
          <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
            {/* Image */}
            <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0 ">
              <img
                src={side_hustle}
                alt="feature1"
                className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10"
              />
            </div>
            {/* Content */}

            <div className="flex flex-1 flex-col items-center lg:items-start ">
              <h1 className="text-3xl text-bookmark-blue">
                Reliable and Consistent
              </h1>
              <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                Proven winnings, reliable outcomes, peaceful earnings.
              </p>
              <button
                type="button"
                className="btn-landing btn-purple hover:bg-bookmark-white hover:text-black"
              >
                Learn More
              </button>
            </div>
            {/* Rounded Rectangle */}
            <div className="hidden lg:block overflow-hidden bg-bookmark-purple rounded-r-full absolute h-80 w-2/4 lg:-bottom-24 lg:-left-36 "></div>
          </div>
        </div>
        {/* Feature Number 2 */}
        <div className="relative mt-20 lg:mt-52">
          <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
            {/* Image */}
            <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0 ">
              <img
                src={basketball}
                alt="feature1"
                className="flex justify-center rounded-md flex-1 mb-10 md:mb-16 lg:mb-0 z-10"
              />
            </div>
            {/* Content */}

            <div className="flex flex-1 flex-col items-center lg:items-start ">
              <h1 className="text-3xl text-bookmark-blue">
                No Impulse or Forced Picks
              </h1>
              <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                We choose picks with only when it meets our minimum criteria
              </p>
              <button
                type="button"
                className="btn-landing btn-purple hover:bg-bookmark-white hover:text-black"
              >
                Learn More
              </button>
            </div>
            {/* Rounded Rectangle */}
            <div className="hidden lg:block overflow-hidden bg-bookmark-purple rounded-l-full absolute h-80 w-2/4 lg:-bottom-24 lg:-right-36 "></div>
          </div>
        </div>
        {/* Feature Number 3 */}
        <div className="relative mt-20 lg:mt-52">
          <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
            {/* Image */}
            <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0 ">
              <img
                src={side_hustle}
                alt="feature1"
                className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10"
              />
            </div>
            {/* Content */}

            <div className="flex flex-1 flex-col items-center lg:items-start ">
              <h1 className="text-3xl text-bookmark-blue">
                Your New Side Hustle
              </h1>
              <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                Get an income that does not require more time. Spend more time
                doing what you love most.
              </p>
              <button
                type="button"
                className="btn-landing btn-purple hover:bg-bookmark-white hover:text-black"
              >
                Learn More
              </button>
            </div>
            {/* Rounded Rectangle */}
            <div className="hidden lg:block overflow-hidden bg-bookmark-purple rounded-r-full absolute h-80 w-2/4 lg:-bottom-24 lg:-left-36 "></div>
          </div>
        </div>
      </section>
      {/* Download Section */}
      {/* <section className="py-20 my-20">
        {/* Heading */}
      <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2 pt-6 mt-16">
        <h1 className="text-3xl text-center text-bookmark-blue ">
          Just a Small Samples of Prior Winnings
        </h1>
        <p className="text-center text-bookmark-grey mt-4">
          Focusing on the most popular sports give you more chances at winning
          and not be limited by shady books.
        </p>
      </div>
      {/* Cards */}
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-2">
        {/* Card 1 */}
        {/* <div className="flex flex-col rounded-md shadow-md  lg:mb-16">
          <div className="p-6 flex flex-col items-center">
            <i className="fa-solid fa-basketball text-4xl"></i>
            <h3 className="mt-5 mb-2 text-bookmark-blue text-lg ">
              Basketball Picks
            </h3>
            <p className="text-bookmark-gray text-center font-light">
              Start hitting winning shots Today
            </p>
          </div>
          <hr className="border-b border-bookmark-white "></hr>
          <div className="flex p-6">
            <button
              type="button"
              className="flex-1 btn-landing btn-purple hover:bg-bookmark-white hover:text-black"
            >
              Subscribe Now
            </button>
          </div>
        </div> */}
        {/* Card 2 */}
        {/* <div className="flex flex-col rounded-md shadow-md  lg:my-8">
          <div className="p-6 flex flex-col items-center">
            <i className="fa-solid fa-futbol text-4xl"></i>
            <h3 className="mt-5 mb-2 text-bookmark-blue text-lg ">
              Soccer Picks
            </h3>
            <p className="text-bookmark-gray text-center font-light">
              Kick your earnings into high gear
            </p>
          </div>
          <hr className="border-b border-bookmark-white "></hr>
          <div className="flex p-6">
            <button
              type="button"
              className="flex-1 btn-landing btn-purple hover:bg-bookmark-white hover:text-black"
            >
              Subscribe Now
            </button>
          </div>
        </div> */}
        {/* Card 3 */}
        {/* <div className="flex flex-col rounded-md shadow-md  lg:mt-16">
          <div className="p-6 flex flex-col items-center">
            <i className="fa-solid fa-baseball text-4xl"></i>
            <h3 className="mt-5 mb-2 text-bookmark-blue text-lg ">
              Baseball Picks
            </h3>
            <p className="text-bookmark-gray text-center font-light">
              Start hitting home runs
            </p>
          </div>
          <hr className="border-b border-bookmark-white "></hr>
          <div className="flex p-6">
            <button
              type="button"
              className="flex-1 btn-landing btn-purple hover:bg-bookmark-white hover:text-black"
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </div> */}
      </div>
      {/* </section> } */}
      {/* Image Proof Section */}
      <section>
        <div className="container mx-auto">
          <div className="grid-cols-4 p-20 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-1">
            <div className="w-full rounded-full">
              <img src={proof1} alt="proof1" />
            </div>
            <div className="w-full col-span-1 row-span-2">
              <img src={proof2} alt="proof2" />
            </div>
            <div className="w-full col-span-1 h-3">
              <img src={proof3} alt="proof3" />
            </div>
            <div className="w-full col-span-1">
              <img src={proof4} alt="proof4" />
            </div>
          </div>
        </div>
      </section>
      {/* End of image section */}

      {/* FAQ */}
      <section className="bg-bookmark-white py-20">
        <div className="container">
          {/* Heading */}
          <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
            <h1 className="text-3xl text-center text-bookmark-blue ">
              Frequently Asked Questions
            </h1>
            <p className="text-center text-bookmark-grey mt-4">
              Sports betting can be confusing, we make it simple. If you have
              any questions or concerns, let us know.
            </p>
          </div>
          {/* FAQ Items */}
          <Accordion />

          {/* <div className="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
            <div className="flex items-center border-b py-4 relative">
              <span className="flex-1">
                Is this a good side income?
                <div className="absolute top-10 items-center border-red-300 border-solid border-2">
                  <p className="flex-1">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium ducimus aliquam odio, temporibus suscipit repellendus aut error officiis rem eligendi?
                  </p>
                </div>
              </span>

              <Chevron />
            </div>

            <div className="flex items-center border-b py-4">
              <span className="flex-1">Why sports picks?</span>
              <Chevron />
            </div>
            <div className="flex items-center border-b py-4">
              <span className="flex-1">What payments do you accept?</span>
              <Chevron />
            </div>
            {/* Button */}
          {/* <button
            type="button"
            className="flex mt-12 btn-landing btn-purple hover:bg-bookmark-white hover:text-black"
          >
            Subscribe Now
          </button> */}
          {/* </div> */}
          {/* End of FAQ Items */}

          {/* Pricing Card */}
          <PricingCard />

          {/* Contact Us */}
          <section className="bg-bookmark-purple text-white py-20 mt-5">
            <div className="container">
              <div className="sm:w-3/4 lg:w-2/4 mx-auto">
                <p className="font-light uppercase text-center mb-8">
                  Subscribe today, don't delay.
                </p>
                <h1 className="text-3xl text-center">
                  Many subscribers are making gains. Are you?
                </h1>
                <div className="flex flex-col sm:flex-row gap-6 mt-8  ">
                  <input
                    type="text"
                    placeholder="enter email here"
                    className="focus:outline-none flex-1 px-2 py-3 rounded-md text-black"
                  />
                  <button
                    type="button"
                    id="contact"
                    className="btn-landing bg-bookmark-red hover:bg-bookmark-white hover:text-black"
                  >
                    Contact Us Here
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bookmark-blue py-8">
        <div className="container flex flex-col md:flex-row items-center">
          <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
            <ul className="flex text-white uppercase gap-12 text-xs">
              <li className="cursor-pointer">
                <a href="#features">features</a>
              </li>
              <li className="cursor-pointer">
                <a href="#pricing">pricing</a>
              </li>
              <li className="cursor-pointer">
                <a href="#contact">contact</a>
              </li>
            </ul>
          </div>
          <div className="flex gap-10 mt-12 md:mt-0">
            <li>
              <i className="fa-brands fa-twitter text-bookmark-white text-2xl"></i>
            </li>
            <li>
              <i className="fa-brands fa-instagram text-bookmark-white text-2xl"></i>
            </li>
          </div>
          <p className=" ml-8 text-bookmark-white">
            &copy; All Rights Resevered {d.getFullYear()}
          </p>
        </div>
      </footer>
    </>
  )
}

export default Landings
