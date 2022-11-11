import React, { useState } from "react";
export const AuthContext = React.createContext();
function AuthContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState(null);
    const [ email, setEmail ] = useState(null);
    const loginUser = (res, value) => {
        setIsAuth(true);
        setToken(res);
        setEmail(value);
    }
    const logoutUser = () => {
        setIsAuth(false);
        setToken(null);
    }
    const values = { isAuth, token, email, loginUser, logoutUser }
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
}
export default AuthContextProvider;
