import React, { useMemo, useRef, useCallback } from "react"
import { AgGridReact } from "ag-grid-react"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"
import { sumDay, resLP } from "../utils/numerlogyCalcs"
import { useDispatch, useSelector } from "react-redux"
import { PremiumPicks } from "./PremiumPicks"
import { generate as generateComb } from "ordered-uuid-v4"

import { selectedHandler, clearStats } from "../features/stats/statsSlice"

const Table = () => {
  const { stats: data } = useSelector((store) => store.stats)
  const dispatch = useDispatch()

  const columnDefs = [
    { field: "away", headerName: "Away Team", checkboxSelection: true },
    { field: "home", headerName: "Home Team" },
    { field: "title", headerName: "League" },
    { field: "books" },
    { field: "line_name", headerName: "Line Name" },
    {
      field: "line_price",
      headerName: "Line Price",
      filter: "agNumberColumnFilter"
    },
    {
      field: "premium_picks",
      headerName: "Premium",
      cellRenderer: PremiumPicks
    }
  ]

  // Makes all columns filterable and usable
  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      // flex: 1,
      resizable: true,
      cellStyle: { textAlign: "center" }

      // filter: true
    }),
    []
  )

  // Shades every two rows to distinguish bets
  const getRowClass = (params) => {
    if (params.node.rowIndex % 4 < 2) {
      return "my-shaded-effect"
    }
  }

  // generates uuid v4, used for later to retrieve picks
  const comb = generateComb()

  // Extracts data from api and pushes to empty array
  // Empty array where raw data is pushed to from api
  const tableData = []
  const rowData = tableData
  const gameOdds = data?.map((games) => {
    const { away_team, home_team, sport_title, bookmakers } = games

    bookmakers.map((book) => {
      const { title, markets } = book

      markets.map((market) => {
        const { outcomes } = market

        outcomes.map((line) => {
          const { name, price } = line
          tableData.push({
            id: comb,
            away: away_team,
            home: home_team,
            title: sport_title,
            books: title,
            line_name: name,
            line_price: price
          })
        })
      })
    })
  })

  const gridRef = useRef()

  // grabs selected rows
  const localSelectHandler = useCallback(() => {
    const selectedRows = gridRef.current.api.getSelectedRows()
    dispatch(selectedHandler(selectedRows))
  }, [])

  // Premium filter function
  const premiumFilter = () => {
    const { api } = gridRef.current

    // get filter instance
    const filterInstance = api.getFilterInstance("line_price")

    // get filter model
    const model = filterInstance.getModel()

    // filters rows depending based on criteria
    filterInstance.setModel({
      filterType: "number",
      type: "inRange",
      filter: (sumDay || resLP) - 0.5,
      filterTo: (sumDay || resLP) + 0.5
    })

    // // refresh rows based on the filter (not automatic to allow for batching multiple filters)
    api.onFilterChanged()
  }
  const clearFilter = () => {
    const { api } = gridRef.current

    // get filter instance
    const filterInstance = api.getFilterInstance("line_price")

    // get filter model
    const model = filterInstance.getModel()

    filterInstance.setModel({
      filterType: "number",
      type: "greaterThan",
      filter: 0
    })

    // // refresh rows based on the filter (not automatic to allow for batching multiple filters)
    api.onFilterChanged()
  }

  const clearList = () => {
    dispatch(clearStats())
  }

  return (
    <div className="ag-theme-alpine h-3/4 w-30 m-10 pb-12 ">
      <section className="flex justify-center items-center p-5">
        <button className="btn" onClick={premiumFilter}>
          Premium Filter
        </button>
        <button className="btn ml-3" onClick={clearFilter}>
          Clear Filter
        </button>
        <button className="btn ml-3" onClick={clearList}>
          Clear List
        </button>
        <button className="btn ml-3" onClick={localSelectHandler}>
          Save Selections
        </button>
      </section>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        alwaysShowHorizontalScroll={true}
        getRowClass={getRowClass}
        rowSelection={"multiple"}
        rowMultiSelectWithClick={true}
        ref={gridRef}
      />
    </div>
  )
}

export default Table
