import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    
    const auth = getAuth(app);
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)
    console.log(user)
    const name = 'rabbi'

    const googleProvider = new GoogleAuthProvider()
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe =    onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe();
        }
    },[auth])
    const authInfo = {
        googleLogin,
        user,
        loading,
        name,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;