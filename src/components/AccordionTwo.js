import React from "react"

const AccordionTwo = () => {
  return (
    <section>
      <div className="divider"></div>
      <div className="flex justify-center items-center flex-col flexx-wrap gap-2 pb-5">
        {/* Question 1 */}
        <div className="collapse collapse-arrow  border border-base-300 max-w-2xl shadow-md">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Is this a good side income?
          </div>
          <div className="collapse-content">
            <p>
              Absolutely, it is a reliable income that you don't have to put any
              extra effort other than placing your picks with your favorite
              bookmaker
            </p>
          </div>
        </div>
        {/* End of Question 1 */}
        {/* Question 2 */}
        <div className="collapse collapse-arrow  border border-base-300 max-w-2xl shadow-md">
          <input type="checkbox" />
          <div className="collapse-title text-xl  font-medium">
            Why should I choose sports betting over other types of income?
          </div>
          <div className="collapse-content">
            <p>
              Because it is reliable and consistent. It does not require extra
              time, and if you know what you are doing or have folks like us
              that know what we are doing, you will be profitable.
            </p>
          </div>
        </div>
        {/* End of Question 2 */}
        {/* Question 3 */}
        <div className="collapse collapse-arrow  border border-base-300 max-w-2xl shadow-md">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            How long is the subsciption for?
          </div>
          <div className="collapse-content">
            <p>
              You can subscribe for as long as you like. You will only need a
              few winning bets to be net positive.
            </p>
          </div>
        </div>
        {/* End of Question 3 */}
      </div>
    </section>
  )
}

export default AccordionTwo
