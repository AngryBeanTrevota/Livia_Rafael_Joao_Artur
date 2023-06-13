import { useState } from "react";
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
                localStorage.setItem("token", response.data.token);
                response.data.user.is_student = is_student;
                setUser(response.data.user);
            });
    };

    const signout = () => {
        setUser(null);
        localStorage.removeItem("token");
    };

    const register = (name, registerStudent, password) => {
        axios
            .post("http://localhost:3333/register", {
                name,
                registerStudent,
                password,
            })
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                response.data.user.is_student = true;
                setUser(response.data.user);
            });
    };

    return (
        <AuthContext.Provider value={{ user, signin, register, signout }}>
            {children}
        </AuthContext.Provider>
    );
};
