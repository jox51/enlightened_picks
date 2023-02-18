import React from "react"
import { useAuth0 } from "@auth0/auth0-react"

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <div>Loading</div>
  }
  return (
    <>
      {isAuthenticated && (
        <div className="flex flex-col justify-center items-center px-5">
          <img className="h-10 rounded-xl" src={user.picture} />
          <h2 className="mx-auto">{user.name}</h2>
        </div>
      )}
    </>
  )
}

export default Profile
