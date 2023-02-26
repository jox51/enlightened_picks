import React from "react"
import moneyFlying from "../images/moneyFlying.jpg"

const SubSuccess = () => {
  return (
    <section className="flex items-center justify-center  h-screen">
      <div className="card bg-base-100 shadow-xl w-1/2">
        <figure className=" ">
          <img src={moneyFlying} alt="Success" />
        </figure>
        <div className="card-body">
          <h2 className="card-title mx-auto">Congrats</h2>
          <p>
            You have successfully subscribed. Please login to view your
            subscriber page.
          </p>
          <div className="mx-auto font-semibold">Thank you</div>
        </div>
      </div>
    </section>
  )
}

export default SubSuccess
