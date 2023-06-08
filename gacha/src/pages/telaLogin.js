import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import WindowsButton from "../components/WindowsButton";
import WindowsInput from "../components/WindowsInput";
import Window from "../components/Window";
import { AuthContext } from "../context/Auth/AuthContext";

export default function Login() {
    const auth = useContext(AuthContext);

    const [registerStudent, setRegisterStudent] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = () => {
        if (registerStudent && password) {
            auth.signin(registerStudent, password)
                .then(() => {
                    navigate("/menu");
                })
                .catch((error) => {
                    alert("Matricula ou senha incorretos");
                    console.log(error);
                });
        } else {
            alert("Preencha todos os campos");
        }
    };

    return (

            <Window styleWindow={{ height: "100vh", width: "100vw" }} titulo="Um nome">
                <Window
                    styleContainer={{ maxWidth: 500, minWidth: 300 }}
                    styleWindow={{ height: 200, maxWidth: 400 }}
                    styleTitulo={{ maxWidth: 400 }}
                    titulo={"Fazer Login"}
                >
                    <WindowsInput
                        type="text"
                        style={{ margin: 5 }}
                        value={registerStudent}
                        onChange={(e) => setRegisterStudent(e.target.value)}
                        placeholder="Matricula"
                    />
                    <WindowsInput
                        type="password"
                        style={{ marginBottom: 20 }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Senha"
                    />

                    <WindowsButton onClick={handleLogin}>Login</WindowsButton>
                    <WindowsButton onClick={() => navigate("/cadastro")}>Cadastro</WindowsButton>
                </Window>
            </Window>

    );
}
