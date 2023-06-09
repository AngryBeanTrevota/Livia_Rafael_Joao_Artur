import { useContext, useState } from "react";
import  {AuthContext}  from "../context/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

import "./telaLogin.css"

import WindowsButton from "../components/WindowsButton";
import WindowsInput from "../components/WindowsInput";
import Window from "../components/Window";

export default function Cadastro() {
    const [matricula, setMatricula] = useState('');
    const [senha, setSenha] = useState('');

    const auth = useContext(AuthContext);
    const navigate = useNavigate()

    const handleRegister = () => {

    }

    return (
        <Window styleWindow={{height: "100vh", width: "100vw"}} titulo="Um nome">

            <Window styleContainer={{maxWidth: 500, minWidth: 300}} styleWindow={{height: 200, maxWidth: 400}} styleTitulo={{maxWidth: 400}} titulo={"Fazer Cadastro"}>
                <WindowsInput type="text" style={{marginBottom: 5}} value={matricula} onChange={e => setMatricula(e.target.event)} placeholder="Matricula" />
                <WindowsInput type="password" style={{marginBottom: 5}} value={senha} onChange={e => setSenha(e.target.value)} placeholder="Senha" />
                <WindowsInput type="password" style={{marginBottom: 20}} value={senha} onChange={e => setSenha(e.target.value)} placeholder="Confirmar senha" />

                <WindowsButton onClick={handleRegister}>Cadastrar</WindowsButton>
            </Window>

        </Window>
    )
}