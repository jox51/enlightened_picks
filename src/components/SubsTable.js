import React, { useMemo, useRef, useCallback } from "react"
import { AgGridReact } from "ag-grid-react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"
import { useDispatch, useSelector } from "react-redux"
import {
  clearSubsSelections,
  editComments,
  selectedFinalRows,
  sendSelects,
  grabPicks,
  sendPublishedData
} from "../features/stats/statsSlice"

const SubsTable = ({ invisible, checkbox, rowData }) => {
  const {
    stats: { data },

    initSelection,
    finalPicks,
    loadedPicks,
    selectedPicks,
    postClearList
  } = useSelector((store) => store.stats)
  const dispatch = useDispatch()

  // Below code converts data from server to AG Grid array data
  let convertArr = []

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

  // Adds row items from state. Rows selected from admin table
  const addItems = useCallback(() => {
    const res = gridRef.current.api.applyTransaction({
      add: finalPicks
    })
  }, [])

  // Clears row items from table
  const clearHandler = () => {
    // grabs selected rows
    const selectedRows = gridRef.current.api.getSelectedRows()

    // filters out selected data to clear
    const resArr = convertArr.filter((x) => {
      return !selectedRows.some((y) => y === x)
    })

    // grab selected rows uuid's
    const selRowsIDs = selectedRows.map(({ id: selected_id }) => {
      return selected_id
    })

    // formats database entries for filtering
    const formatDBEntries = loadedPicks.map(({ id: sid, attributes }) => {
      const { picks } = attributes
      let tempArr = JSON.parse(picks)

      return { strapi_id: sid, tempArr }
    })

    //filters database entries for any empty values
    const filterEntries = formatDBEntries.filter(
      (item) => item.tempArr != item.tempArr.length >= 1
    )

    // grabs all rows from the database
    const dbPicks = filterEntries.map(({ strapi_id, tempArr }) => {
      const { id } = tempArr
      return { strapi_id, id }
    })

    // if selected rows match rows in database, get the id created from database. Strapi has own id
    const selectedStrapiID = selRowsIDs.map((selItem) => {
      return dbPicks.map(({ id, strapi_id }) => {
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

    // grabs latest row selections to refresh latest data
    dispatch(grabPicks)

    // deletes row via transaction
    const res = gridRef.current.api.applyTransaction({
      remove: selectedRows
    })
  }

  // Row ID's used for smoother row updates via transaction in AG Grid
  const getRowId = useCallback((params) => {
    return params.data.id
  })

  // Subtable used in Admin page and Subs page. This filters out rows shown. Will only show subscibers selections and not edited rows.
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
