import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useInstructorVerify from "../hooks/useInstructorVerify";
import { motion } from "framer-motion";


const InstructorRoute = ({ children }) => {
    const { loading, user } = useAuth()
    const [isInstructor, isInstructorLoading] = useInstructorVerify()
    console.log(isInstructor)
    const location = useLocation()
    if (loading || isInstructorLoading) {
        return <motion.div
        className="box"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"]
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1
        }}
      />
    }

    if (user || isInstructor === true) {
        return <>{children}</>
    }

    return <Navigate to='/' state={{from: location}} replace></Navigate>
        
};

export default InstructorRoute;