import React, { useMemo, useRef, useCallback } from "react"
import { AgGridReact } from "ag-grid-react"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"
import { useDispatch, useSelector } from "react-redux"
import { PremiumPicks } from "./PremiumPicks"
import {
  selectedHandler,
  clearSelections,
  editComments,
  selectedFinalRows
} from "../features/stats/statsSlice"

const FinalTable = () => {
  const {
    loading,
    value,
    team,
    stats: { data },
    logo,
    initSelection
  } = useSelector((store) => store.stats)
  const dispatch = useDispatch()

  const getRowId = useMemo(() => {
    return (params) => params.data.id
  }, [])

  const columnDefs = [
    { field: "away", headerName: "Away Team", checkboxSelection: true },
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
      editable: true,
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
      cellStyle: { textAlign: "center" }
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

  // grabs selected rows
  const saveHandler = useCallback(() => {
    const selectedRows = gridRef.current.api.getSelectedRows()
    dispatch(selectedFinalRows(selectedRows))
  }, [])

  const clearHandler = () => {
    dispatch(clearSelections())
  }

  return (
    <div className="ag-theme-alpine h-1/2 w-30 m-10">
      <section className="flex justify-center items-center m-5">
        <button className="btn m-3" onClick={clearHandler}>
          Clear Selections
        </button>
        <button className="btn ml-3" onClick={saveHandler}>
          Save Selections
        </button>
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

export default FinalTable
