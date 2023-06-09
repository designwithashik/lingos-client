import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
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
    const emailSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const emailLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe();
        }
    }, [auth])
    


    //toggle mode

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
      );
    
      
    
      useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
      }, [theme]);
    const authInfo = {
        googleLogin,
        emailSignUp,
        emailLogin,
        user,
        loading,
        name,
        logOut,
        theme,
        setTheme

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;