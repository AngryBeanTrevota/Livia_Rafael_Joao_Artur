import { useContext, useState } from "react";
import  {AuthContext}  from "../context/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

import "./telaLogin.css"

import WindowsButton from "../components/WindowsButton";
import WindowsInput from "../components/WindowsInput";
import Window from "../components/Window";

export default function Cadastro() {
    const [name, setName] = useState('');
    const [registerStudent, setRegisterStudent] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const auth = useContext(AuthContext);
    const navigate = useNavigate()

    const handleRegister = () => {

        if (name && registerStudent && password && confirmPassword) {
            if (password === confirmPassword) {
                auth.register(name, registerStudent, password);
                console.log(auth.user);
            } else {
                alert("As senhas não são iguais");
            }
        }

        if (auth.user) {
            navigate("/menu");
        } else {
            alert("Preencha todos os campos corretamente");
        }
    }

    return (
        <Window styleWindow={{height: "100vh", width: "100vw"}} titulo="Um nome">

            <Window styleContainer={{maxWidth: 500, minWidth: 300}} styleWindow={{height: 200, maxWidth: 400}} styleTitulo={{maxWidth: 400}} titulo={"Fazer Cadastro"}>
                <WindowsInput type="text" style={{ marginBottom: 5 }} value={name} onChange={e => setName(e.target.value)} placeholder="Nome" />
                <WindowsInput type="text" style={{ marginBottom: 5 }} value={registerStudent} onChange={e => setRegisterStudent(e.target.value)} placeholder="Matricula" />
                <WindowsInput type="password" style={{ marginBottom: 5 }} value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha" />
                <WindowsInput type="password" style={{ marginBottom: 20 }} value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirmar senha" />

                <WindowsButton onClick={handleRegister}>Cadastrar</WindowsButton>
            </Window>

        </Window>
    )
}