import { useState } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signin = (registerStudent, password) => {
        axios
            .post("http://localhost:3333/login", {
                registerStudent,
                password,
            })
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                setUser(response.data.student);
            })
        
    };

    return (
        <AuthContext.Provider value={{ user, signin }}>
            {children}
        </AuthContext.Provider>
    );
};