import React from "react"
import heroImage from "../images/hero.jpg"

const Hero = () => {
  return (
    <>
      <div className="divider"></div>

      <section className="px-3 shadow-md">
        <div
          className="hero min-h-screen shadow-lg"
          style={{
            backgroundImage: `url(${heroImage})`
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Enlightened Picks</h1>
              <p className="mb-5">
                Our sports picks utilize a unique system of filtering out picks
                based on a specific criteria that bring out the best probability
                in winning.
              </p>
              <button className="btn btn-primary">
                <a href="#features">Learn More</a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
