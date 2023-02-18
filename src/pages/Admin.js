import React from "react"
import Sports from "../components/Sports"
import Table from "../components/Table"
import AdminTable from "../components/AdminTable"
import Title from "../components/Title"
import SubsTable from "../components/SubsTable"
import LogoAlt from "../components/LogoAlt"

const Admin = () => {
  return (
    <>
      <div className="divider"></div>
      <Sports />
      <Title text={"Initial List"} />
      <Table />
      <div className="divider"></div>

      <Title text={"Admin List"} />
      <AdminTable />
      <div className="divider"></div>

      <Title text={"Subs List"} />
      <SubsTable checkbox={true} rowData={"admin"} />
    </>
  )
}

export default Admin
