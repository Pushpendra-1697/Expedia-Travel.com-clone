import React, { useState } from "react";

export const AuthContext = React.createContext();
function AuthContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState(null);
    const loginUser = (res) => {
        setIsAuth(true);
        setToken(res);
    }
    const logoutUser = () => {
        setIsAuth(false);
        setToken(null);
    }
 console.log(token)
    const values = { isAuth, token, loginUser, logoutUser }
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
