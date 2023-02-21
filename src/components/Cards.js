import React from "react"
import sideHustle from "../images/side_hustle.jpg"
import bettingLive from "../images/banner.jpg"
import moneyFlying from "../images/moneyFlying.jpg"

const Cards = () => {
  return (
    <>
      <div className="divider"></div>
      {/* Card 1 */}
      <div className="flex flex-col sm:flex-row justify-around items-center flex-1 gap-3 px-3">
        <div className="card w-96 bg-base-100 shadow-xl" id="features">
          <figure>
            <img src={moneyFlying} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Consistent</h2>
            <p>Proven winnings, reliable outcomes, peaceful earnings</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={sideHustle} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">No forced or impulse picks</h2>
            <p>We choose picks with only when it meets our minimum criteria</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        {/* End of Card 2 */}
        {/* Card 3 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={bettingLive} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Your side hustle</h2>
            <p>
              Get an income that does not require more time. Spend more time
              doing what you love most.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        {/* End of Card 3 */}
      </div>
    </>
  )
}

export default Cards
