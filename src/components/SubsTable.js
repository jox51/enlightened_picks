import React, { useMemo, useRef, useCallback, useState } from "react"
import { AgGridReact } from "ag-grid-react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"
import { useDispatch, useSelector } from "react-redux"
import {
  selectedHandler,
  clearSubsSelections,
  editComments,
  addNewPlays,
  selectedFinalRows,
  sendSelects,
  grabPicks,
  sendPublishedData,
  refreshSubList
} from "../features/stats/statsSlice"
import { getRowContainerTypeForName } from "ag-grid-community"

const SubsTable = ({ invisible, checkbox, rowData }) => {
  const {
    loading,
    value,
    team,
    stats: { data },
    logo,
    initSelection,
    finalPicks,
    loadedPicks,
    selectedPicks,
    postClearList
  } = useSelector((store) => store.stats)
  const dispatch = useDispatch()

  // Below code converts data from server to AG Grid array data
  let convertArr = []
  const picksConvert = loadedPicks.map((pick, id) => {
    const { attributes } = pick
    const { picks } = attributes
    let tempArr = JSON.parse(picks)
    // let sentArr = tempArr.map((item) => {
    //   return convertArr.push(item)
    // })
    convertArr.push(tempArr)

    return
  })

  const columnDefs = [
    {
      field: "away",
      headerName: "Away Team",
      checkboxSelection: checkbox
    },
    { field: "home", headerName: "Home Team" },
    { field: "title", headerName: "League" },
    { field: "books" },
    { field: "line_name", headerName: "Line Name", editable: true },
    {
      field: "line_price",
      headerName: "Line Price",
      filter: "agNumberColumnFilter"
    },
    {
      field: "comments",
      headerName: "Comments",
      wrapText: true,
      autoHeight: true,
      filter: "agTextColumnFilter",
      cellEditor: "agLargeTextCellEditor",
      cellEditorPopup: true
    }
  ]

  let rowImmutableStore = initSelection.map((item) => {
    return item
  })

  const onCellEditRequest = useCallback(
    (event) => {
      const data = event.data
      const field = event.colDef.field
      const newValue = event.newValue
      const newItem = { ...data }
      newItem[field] = event.newValue

      rowImmutableStore = rowImmutableStore.map((oldItem, id) => {
        return id === event.node.rowIndex ? newItem : oldItem
      })

      dispatch(editComments(rowImmutableStore))
    },
    [rowImmutableStore]
  )

  // Makes all columns filterable and usable
  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      resizable: true,
      cellStyle: { textAlign: "center" }
      // editable: true
    }),
    []
  )

  // Allows gridapi to be accessed
  const gridRef = useRef()

  // grabs selected rows
  const saveHandler = useCallback(() => {
    const selectedRows = gridRef.current.api.getSelectedRows()

    // Toast notification

    const length = selectedRows.length
    const toastMsg = length !== 1 ? "Picks" : "Pick"

    const notify = () => toast.success(`${length} ${toastMsg} Published`)
    notify()

    dispatch(selectedFinalRows(selectedRows))
    dispatch(sendPublishedData())
  }, [])

  // const getRowId = useMemo(() => {
  //   return (params) => params.data.id
  // }, [])
  // let refreshArr = []

  // const refreshItems = useCallback(() => {
  //   const res = gridRef.current.api.applyTransaction({
  //     update: [...refreshArr, { id: getRowId }]
  //   })
  // }, [])

  const addItems = useCallback(() => {
    const res = gridRef.current.api.applyTransaction({
      add: finalPicks
    })
  }, [])

  let initLoad = true
  let loadArr = []

  const clearHandler = () => {
    // grabs selected rows
    const selectedRows = gridRef.current.api.getSelectedRows()

    // filters out selected data to clear
    const resArr = convertArr.filter((x) => {
      return !selectedRows.some((y) => y === x)
    })

    // grab selected rows uuid's
    const selRowsIDs = selectedRows.map((sel) => {
      const { id: selected_id } = sel
      return selected_id
    })

    // formats database entries for filtering
    const formatDBEntries = loadedPicks.map((pick) => {
      const { id: sid, attributes } = pick
      const { picks } = attributes
      let tempArr = JSON.parse(picks)

      return { strapi_id: sid, tempArr }
    })

    //filters database entries for any empty values
    const filterEntries = formatDBEntries.filter(
      (item) => item.tempArr != item.tempArr.length >= 1
    )

    // grabs all rows from the database
    const dbPicks = filterEntries.map((pick) => {
      const { strapi_id, tempArr } = pick
      const { id } = tempArr
      return { strapi_id, id }
    })

    // if selected rows match rows in database, get the id created from database. Strapi has own id
    const selectedStrapiID = selRowsIDs.map((selItem) => {
      return dbPicks.map((dbItem) => {
        const { id, strapi_id } = dbItem
        if (String(id) !== String(selItem)) return
        else return strapi_id
      })
    })

    // flatten array to better data
    const flatArr = selectedStrapiID.flat()
    const filteredStrapiId = flatArr.filter((item) => item !== undefined)

    //sends selections to clear and strapi id to state
    dispatch(
      clearSubsSelections({
        clearRows: resArr,
        sendIDs: filteredStrapiId
      })
    )

    // get these id's and pass them to axios as delete request
    dispatch(sendSelects())

    dispatch(grabPicks)

    // deletes row via transaction
    const res = gridRef.current.api.applyTransaction({
      remove: selectedRows
    })
  }

  const getRowId = useCallback((params) => {
    return params.data.id
  })

  // const testDelete = () => {
  //   // grabs selected rows
  //   const selectedRows = gridRef.current.api.getSelectedRows()
  //   console.log(selectedRows)
  //   dispatch(refreshSubList(selectedRows))
  // }

  const rowDataToShow = () => {
    if (rowData === "admin") return postClearList
    if (rowData === "subscriber") return selectedPicks
  }

  return (
    <div className="ag-theme-alpine h-2/3 w-30 m-5 pb-36">
      <section className="flex justify-center items-center m-5">
        <button className={`btn m-3 ${invisible}`} onClick={clearHandler}>
          Clear Selections
        </button>
        <button className={`btn m-3 ${invisible}`} onClick={addItems}>
          Add Saved Picks
        </button>
        <button className={`btn m-3 ${invisible}`} onClick={saveHandler}>
          Publish Selections
          <ToastContainer theme="colored" />
        </button>
        {/* <button className={`btn m-3 ${invisible}`} onClick={testDelete}>
          Test Delete
        </button> */}
      </section>
      <AgGridReact
        rowData={rowDataToShow()}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        alwaysShowHorizontalScroll={true}
        rowSelection={"multiple"}
        rowMultiSelectWithClick={true}
        ref={gridRef}
        readOnlyEdit={true}
        onCellEditRequest={onCellEditRequest}
      />
    </div>
  )
}

export default SubsTable
