import React from "react"
import Sports from "../components/Sports"
import Table from "../components/Table"
import AdminTable from "../components/AdminTable"
import Title from "../components/Title"
import SubsTable from "../components/SubsTable"
import { useSelector } from "react-redux"
import AlertDialog from "../components/AlertDialog"

const Admin = () => {
  const { stats } = useSelector((store) => store.stats)
  const errMsg = "Request failed with status code 404"
  const err = stats === errMsg ? true : false

  if (err) return <AlertDialog />

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
