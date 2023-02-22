import React, { useState } from "react"
import { useForm, ValidationError } from "@formspree/react"

const SubscriberCall = () => {
  const [state, handleSubmit] = useForm("mlekbpdp")
  const [clsHide, setClsHide] = useState("")

  const closeHandler = () => {
    setClsHide("hidden")
  }
  if (state.succeeded) {
    return (
      <p
        className={`${clsHide} alert alert-success shadow-lg w-1/3 mx-auto animate-fade animate-once animate-duration-[3000ms] animate-ease-in-out`}
      >
        <i
          className="fa-regular fa-circle-xmark text-2xl cursor-pointer"
          onClick={closeHandler}
        ></i>
        Thanks for contacting us. Will reply as soon as possible
      </p>
    )
  }

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
            <form
              className="form-control w-full max-w-xs"
              onSubmit={handleSubmit}
            >
              <label className="label" htmlFor="email">
                <span className="label-text">Enter email below :</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter email"
                className="input input-bordered w-full max-w-xs"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              <button
                className="btn my-2 mx-auto w-1/2"
                type="submit"
                disabled={state.submitting}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubscriberCall
