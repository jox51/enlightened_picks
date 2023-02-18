import React from "react"
import ReactDOM from "react-dom/client"
import { store } from "./store"
import { Provider } from "react-redux"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import AuthProvider from "./components/AuthProvider"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </BrowserRouter>
)
