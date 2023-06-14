import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { motion } from "framer-motion";

const PrivateRoute = ({children}) => {
    const { loading, user } = useAuth()
    const location = useLocation()
    if (loading) {
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

    if (user) {
        return <>{children}</>
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
        
};

export default PrivateRoute;