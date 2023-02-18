import { Auth0Provider } from "@auth0/auth0-react"
import React from "react"

const AuthProvider = ({ children }) => {
  const authDomain = process.env.REACT_APP_AUTH0_DOMAIN
  const clientId = process.env.REACT_APP_AUTH0_CLIENT

  return (
    <Auth0Provider
      domain={authDomain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      {children}
    </Auth0Provider>
  )
}

export default AuthProvider
