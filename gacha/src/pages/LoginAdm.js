import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import WindowsButton from "../components/WindowsButton";
import WindowsInput from "../components/WindowsInput";
import Window from "../components/Window";
import { AuthContext } from "../context/Auth/AuthContext";

export default function LoginAdm() {
    const auth = useContext(AuthContext);

    const [register, setRegister] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        if (auth.user) {
            navigate("/admin");
        }
    }, [auth.user, navigate]);

    const handleLogin = () => {
        if (register && password) {
            auth.signin(register, password, false);
            console.log(auth.user);
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
                    titulo={"Fazer login para a área administrativa"}
                >
                    <WindowsInput
                        type="text"
                        style={{ margin: 5 }}
                        value={register}
                        onChange={(e) => setRegister(e.target.value)}
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
                </Window>
            </Window>

    );
}
