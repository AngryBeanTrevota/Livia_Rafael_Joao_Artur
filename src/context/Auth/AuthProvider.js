import { useState } from "react";
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const singin = (matricula, senha) => {
        //Requisição ao back-end
    }

    const singout = () => {
        //Requisição ao back-end
    }

    return (
        <AuthContext.Provider value={{ user, singin, singout }}>
            {children}
        </AuthContext.Provider>
    )
}