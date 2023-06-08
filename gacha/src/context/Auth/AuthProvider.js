import { useState } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLogged, setIsLogged] = useState(false);

    const signin = (registerStudent, password) => {
        return new Promise((resolve, reject) => {
            axios
                .post("http://localhost:3333/login", {
                    registerStudent,
                    password,
                })
                .then((response) => {
                    localStorage.setItem("token", response.data.token);
                    setUser(response.data.student);
                    setIsLogged(true);
                    resolve();
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    return (
        <AuthContext.Provider value={{ user, signin }}>
            {children}
        </AuthContext.Provider>
    );
};