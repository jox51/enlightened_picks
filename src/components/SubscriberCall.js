import React from "react"

const SubscriberCall = () => {
  return (
    <section>
      <div className="divider"></div>
      {/* Contact Us */}
      <div className="card w-96 bg-base-100 sm:w-3/4 lg:w-2/4  shadow-xl mx-auto">
        <div className="card-body">
          <h2 className="card-title mx-auto">
            Subscribers are making gains. Are you?
          </h2>
          <p className="mx-auto">Contact Us below if you have any questions</p>
          <div className="card-actions justify-center">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Enter email below :</span>
              </label>
              <input
                type="text"
                placeholder="Enter email"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label"></label>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubscriberCall
