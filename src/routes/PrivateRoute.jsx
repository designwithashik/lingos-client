import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({children}) => {
    const { loading, user } = useAuth()
    if (loading) {
        return <h2>Wait a bit...</h2>
    }

    if (user) {
        return <>{children}</>
    }

    return <Navigate to='/login'></Navigate>
        
};

export default PrivateRoute;