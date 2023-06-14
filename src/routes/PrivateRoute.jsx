import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({children}) => {
    const { loading, user } = useAuth()
    const location = useLocation()
    if (loading) {
        return <h2>Wait a bit...</h2>
    
    }

    if (user) {
        return <>{children}</>
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
        
};

export default PrivateRoute;