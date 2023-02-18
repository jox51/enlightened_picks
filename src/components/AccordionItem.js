import React from "react"
import { Collapse } from "react-collapse"

const AccordionItem = ({ open, toggle, title, desc }) => {
  return (
    <div className="pt-4">
      <div
        className="bg-white py-3 px-8 flex justify-between items-center rounded-md"
        onClick={toggle}
      >
        <p className="text-xl">{title}</p>
        <div className="text-l">
          <i
            className={
              open ? `fa-solid fa-chevron-down` : `fa-solid fa-chevron-left`
            }
          ></i>
        </div>
      </div>
      <Collapse
        isOpened={open}
        transition="height 800ms cubic-bezier(8, 5, 0.2, 1)"
      >
        <div className="bg-white px-[50px] pb-[20px]">{desc}</div>
      </Collapse>
    </div>
  )
}

export default AccordionItem
