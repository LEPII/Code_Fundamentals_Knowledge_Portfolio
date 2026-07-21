import { Navigate, Outlet } from "react-router-dom"
import useAuth from "./hooks/useAuth"

const PrivateRoutes = () => {
    const { user } = useAuth()
    if (!user) return <Navigate to="/login" replace /> // this will redirect the user to the login page if they are not logged in. The replace prop will replace the current entry in the history stack with the new one, so that the user cannot go back to the previous page using the back button.

    return <Outlet />
}

export default PrivateRoutes