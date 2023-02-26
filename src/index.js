import React from "react"
import ReactDOM from "react-dom/client"
import { store } from "./store"
import { Provider } from "react-redux"
import App from "./App.js"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import AuthProvider from "./components/AuthProvider"
import { PayPalScriptProvider } from "@paypal/react-paypal-js"

const root = ReactDOM.createRoot(document.getElementById("root"))

const clientId = process.env.REACT_APP_PAYPAL_CLIENT

root.render(
  <PayPalScriptProvider
    options={{
      "client-id": clientId,
      components: "buttons",
      intent: "subscription",
      vault: true
    }}
  >
    <BrowserRouter>
      <Provider store={store}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Provider>
    </BrowserRouter>
  </PayPalScriptProvider>
)
