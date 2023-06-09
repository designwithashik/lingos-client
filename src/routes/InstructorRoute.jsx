import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useInstructorVerify from "../hooks/useInstructorVerify";

const InstructorRoute = ({ children }) => {
    const { loading, user } = useAuth()
    const [isInstructor, isInstructorLoading] = useInstructorVerify()
    console.log(isInstructor)
    const location = useLocation()
    if (loading || isInstructorLoading) {
        return <h2>Wait a bit...</h2>
    }

    if (user || isInstructor === true) {
        return <>{children}</>
    }

    return <Navigate to='/' state={{from: location}} replace></Navigate>
        
};

export default InstructorRoute;