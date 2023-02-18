import React, { useState } from "react"
import AccordionItem from "./AccordionItem"
import { accordionData } from "../utils/accordionData"

const Accordion = () => {
  const [open, setOpen] = useState(false)

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null)
    }
    setOpen(index)
  }

  return (
    <section className="bg-slate-100 grid place-items-center ">
      <div className="bg-bookmark-white shadow-lg px-20 w-26 mb-6 pb-6">
        {accordionData.map((item, index) => {
          const { title, description } = item
          return (
            <AccordionItem
              key={index}
              open={index === open}
              title={title}
              desc={description}
              toggle={() => toggle(index)}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Accordion
