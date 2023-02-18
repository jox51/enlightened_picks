import React, { useMemo, useRef, useCallback } from "react"
import { AgGridReact } from "ag-grid-react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"
import { useDispatch, useSelector } from "react-redux"
import {
  selectedHandler,
  clearSelections,
  editComments,
  addNewPlays,
  selectedFinalRows,
  sendData,
  grabPicks
} from "../features/stats/statsSlice"

const AdminTable = () => {
  const {
    loading,
    value,
    team,
    stats: { data },
    logo,
    initSelection,
    selectedPicks,
    loadedPicks
  } = useSelector((store) => store.stats)
  const dispatch = useDispatch()

  const columnDefs = [
    {
      field: "away",
      headerName: "Away Team",
      checkboxSelection: true
    },
    { field: "home", headerName: "Away Team" },
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
      console.log("event", event)
      console.log("imut stor :", rowImmutableStore)
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
      cellStyle: { textAlign: "center" },
      editable: true
    }),
    []
  )

  const gridRef = useRef()

  // Shades every two rows to distinguish bets
  const getRowClass = (params) => {
    if (params.node.rowIndex % 4 < 2) {
      return "my-shaded-effect"
    }
  }

  //grabs selected rows
  const saveHandler = useCallback(() => {
    const selectedRows = gridRef.current.api.getSelectedRows()
    dispatch(selectedFinalRows(selectedRows))

    const length = selectedRows.length
    const toastMsg = length !== 1 ? "Picks" : "Pick"

    // Toast notification
    const notify = () => toast.success(`${length} ${toastMsg} Saved`)
    notify()

    // sends selected rows to Strapi.
    dispatch(sendData())

    // grabs rows from strapi. Delays 2 seconds to allow loop
    setTimeout(() => {
      dispatch(grabPicks())
    }, 2000)
  }, [])

  const addPicksHandler = () => {
    const emptyObj = {
      away: "",
      home: "",
      title: "",
      books: "",
      line_name: "",
      line_price: "",
      comments: ""
    }
    dispatch(addNewPlays(emptyObj))
  }

  const clearHandler = () => {
    dispatch(clearSelections())
  }

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
  })

  return (
    <div className="ag-theme-alpine h-1/2 w-30 m-10 pb-10">
      <section className="flex justify-center items-center m-5">
        <button className="btn m-3" onClick={clearHandler}>
          Clear Selections
        </button>
        <button className="btn m-3" onClick={addPicksHandler}>
          Add New Picks
        </button>
        <button className="btn ml-3" onClick={saveHandler}>
          Save Selections
        </button>
        <ToastContainer theme="colored" />
      </section>
      <AgGridReact
        rowData={initSelection}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        alwaysShowHorizontalScroll={true}
        getRowClass={getRowClass}
        rowSelection={"multiple"}
        rowMultiSelectWithClick={true}
        ref={gridRef}
        readOnlyEdit={true}
        onCellEditRequest={onCellEditRequest}
      />
    </div>
  )
}

export default AdminTable
