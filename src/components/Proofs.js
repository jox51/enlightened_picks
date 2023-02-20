import React from "react"
import proof1 from "../images/proofs/image_1.png"
import proof2 from "../images/proofs/image_2.png"
import proof3 from "../images/proofs/image_3.png"
import proof from "../images/proofs/image.png"

const Proofs = () => {
  return (
    <>
      <div className="divider"></div>
      <section className="flex flex-col h-full gap-5">
        <div className="border-2 justify-center items-center text-center py-5">
          <div className="text-gray-900 text-sm sm:text-xl mx-auto font-mono font-semibold">
            Want Proof? Below are some of our recent wins.
          </div>
          <p className="animate-fade-right animate-duration-[3000ms] text-justify mx-auto py-6 max-w-sm">
            Below is a small sample of wins we had recently. More wins are
            currently being made and plenty, plenty of more to come. <br />
            <p className="underline">DON'T DELAY, SUBSCRIBE TODAY.</p>
          </p>
          <button className="animate-fade-left animate-duration-[3000ms] btn btn-primary">
            Get Started
          </button>
          {/* Card /Proof Section */}
        </div>
        <div className="carousel carousel-center rounded-box flex justify-center items-center flex-col  md:flex-row gap-5">
          <div className="carousel-item w-1/3 md:w-1/4 ">
            <img src={proof1} alt="proof" />
          </div>
          <div className="carousel-item md:w-1/4">
            <img src={proof2} alt="proof" />
          </div>
          <div className="carousel-item md:w-1/4">
            <img src={proof3} alt="proof" />
          </div>
          <div className="carousel-item md:w-1/4">
            <img src={proof} alt="proof" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Proofs
