import React from "react"
import { useAuth0 } from "@auth0/auth0-react"

const AuthLogout = () => {
  const { logout } = useAuth0()
  return (
    <button
      type="button"
      className="btn"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Logout
    </button>
  )
}

export default AuthLogout
