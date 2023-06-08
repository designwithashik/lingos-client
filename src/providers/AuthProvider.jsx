import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup} from 'firebase/auth'
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    
    const auth = getAuth(app);
    const [user, setUser] = useState('')

    const googleProvider = new GoogleAuthProvider()
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
    },[])
    const authInfo = {
        googleLogin,
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;