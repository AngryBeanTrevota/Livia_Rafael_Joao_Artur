import { useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signin = (register, password, is_student) => {
        axios
            .post("http://localhost:3333/login", {
                register,
                password,
                is_student,
            })
            .then((response) => {
                console.log(response.data);
                document.cookie = `token=${response.data.cookie}; path=/;`;
                response.data.is_student = is_student;
                setUser(response.data);
            });
    };

    const signout = (is_student) => {
        setUser(null);
        if (is_student) {
            document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            return;
        }
        else
            document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/admin;";
    };

    const register = (name, registerStudent, password) => {
        axios
            .post("http://localhost:3333/register", {
                name,
                registerStudent,
                password,
            })
            .then((response) => {
                document.cookie = `token=${response.data.token}; path=/;`;
                response.data.is_student = true;
                setUser(response.data);
            });
    };

    return (
        <AuthContext.Provider value={{ user, signin, register, signout }}>
            {children}
        </AuthContext.Provider>
    );
};
