import React from "react"
import { Outlet, Navigate } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"

const PrivateRouteAdmin = () => {
  const { isAuthenticated, user, loginWithRedirect } = useAuth0()

  if (isAuthenticated && user?.elroles === "admin") {
    return <Outlet />
  } else {
    return <Navigate to={loginWithRedirect()} />
  }
}

export default PrivateRouteAdmin
