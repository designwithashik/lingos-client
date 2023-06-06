import { createContext } from "react";

const AuthProvider = ({children}) => {
    const AuthContext = createContext()
const user = 'Rabbi'
    const authInfo = {
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;