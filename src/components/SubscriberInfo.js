import React from "react"

const SubscriberInfo = () => {
  return (
    <section className="flex items-center justify-center p-4">
      <div className="card w-96 bg-base-100 shadow-xl ">
        <div className="card-body">
          <h2 className="card-title">Profile Info</h2>
          <p>Active Subscriber : Yes</p>
          <p>Subscribtion Expires : May 31, 2023</p>
          {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
        </div>
      </div>
    </section>
  )
}

export default SubscriberInfo
