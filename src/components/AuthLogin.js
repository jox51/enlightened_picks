import React from "react"
import { useAuth0 } from "@auth0/auth0-react"

const AuthLogin = () => {
  const { loginWithRedirect } = useAuth0()
  return (
    <button type="button" className="btn" onClick={() => loginWithRedirect()}>
      Login
    </button>
  )
}

export default AuthLogin
