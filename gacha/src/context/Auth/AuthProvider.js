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

    const signout = () => {
        setUser(null);
        localStorage.removeItem("token");
    }

    const register = (name, registerStudent, password) => {
        axios
            .post("http://localhost:3333/register", {
                name,
                registerStudent,
                password,
            })
            .then((response) => {
                console.log(response.data);
                localStorage.setItem("token", response.data.token);
                setUser(response.data.student);
            });
    }

    return (
        <AuthContext.Provider value={{ user, signin, register, signout }}>
            {children}
        </AuthContext.Provider>
    );
};