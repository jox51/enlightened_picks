import React from "react"
import SubscriberInfo from "../components/SubscriberInfo"
import SubsTable from "../components/SubsTable"
import Title from "../components/Title"

const Subscriber = () => {
  return (
    <>
      <div className="divider"></div>
      <Title text={"Welcome Subs"} />
      <div className="divider p-6"></div>
      <SubscriberInfo />

      <SubsTable
        invisible={"invisible"}
        checkbox={false}
        rowData={"subscriber"}
      />
    </>
  )
}

export default Subscriber
