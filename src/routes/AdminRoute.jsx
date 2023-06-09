import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdminVerify from "../hooks/useAdminVerify";

const AdminRoute = ({ children }) => {
    const { loading, user } = useAuth()
    const [isAdmin, isAdminLoading] = useAdminVerify();
    console.log(isAdmin)
    const location = useLocation()
    if (loading || isAdminLoading) {
        return <h2>Wait a bit...</h2>
    }

    if (user || isAdmin === true) {
        return <>{children}</>
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
        
};

export default AdminRoute;