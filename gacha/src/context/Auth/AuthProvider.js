import { useState } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [quiz, setQuiz] = useState(null);
    const [historia, setHistoria] = useState(-1);
    const conversas = [
        {
            personagem: "Nome Personagem",
            mensagens: [
                {
                    nome: "Personagem",
                    mensagem: "Uma mensagem",
                },
                {
                    nome: "Jogador",
                    mensagem: "Uma mensagem"
                },
                {
                    nome: "Jogador",
                    mensagem: "Uma mensagem"
                },
                {
                    nome: "Jogador",
                    mensagem: "Uma mensagem"
                },
                {
                    nome: "Personagem",
                    mensagem: "Uma mensagem"
                },
                {
                    nome: "Personagem",
                    mensagem: "Uma mensagem"
                },
                {
                    nome: "Jogador",
                    mensagem: "Uma mensagem"
                },
                {
                    nome: "Jogador",
                    mensagem: "Uma mensagem"
                },
                {
                    nome: "Jogador",
                    mensagem: "Uma mensagem"
                },
                {
                    nome: "Personagem",
                    mensagem: "Uma mensagem asdf;kja;sdkjf ;alksjd f;lkajsdflk jas;ldf ha;ksjdh f';oas hdflkja hgsdlki"
                }
            ]
        }
    ];

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
        <AuthContext.Provider value={{ user, setUser, signin, register, signout, quiz, setQuiz, setHistoria, historia, conversas }}>
            {children}
        </AuthContext.Provider>
    );
};
