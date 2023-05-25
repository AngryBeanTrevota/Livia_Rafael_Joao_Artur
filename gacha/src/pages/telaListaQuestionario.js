import React from "react";
import Window from "../components/Window";
import "./telaListaQuestionario.css";

import talk from "../icones/talk.png";
import talk2 from "../icones/talk2.png";

import { Link } from "react-router-dom";

const BotaoNivel = ({ nivel }) => {
    let tipoQuiz, visivel;
    if (nivel > 1) {
        tipoQuiz = "divNivelQuizBloqueado";
        visivel = true;
    } else {
        tipoQuiz = "divNivelQuiz";
        visivel = false;
    }
    return (
        <div style={{ marginTop: 25, marginBottom: 25 }}>
            <img
                src={talk2} alt="recycle"
                style={{
                    visibility: visivel ? "hidden" : "visible",
                    maxWidth: 50,
                    marginBottom: -65,
                    marginLeft: -50,
                }}
            />
            <img
                alt="cadeado"
                style={{ visibility: visivel ? "visible" : "hidden" }}
                id="imagemCadeadoQuiz"
                src="https://static.thenounproject.com/png/228611-200.png"
            ></img>
            <div className={tipoQuiz}>
                <img
                    alt="pasta"
                    style={{ width: 70, height: 55, paddingLeft: 5 }}
                    className="imagemPasta"
                    src="https://i.imgur.com/r3a0P0E.png"
                />
            </div>
        </div>
    );
};

const TelaListaQuestionario = () => {
    return (
        <Window titulo={"Lista de Questionários"}
            styleWindow={{
                height: "100vh",
                width: "100vw",
                display: "",
                // display: "flex",
                // flexDirection: "column",
                // gap: 60,
            }}
        >
            <div className="windowsBox" id="corpoQuestionarios">
                <BotaoNivel nivel="7" />
                <BotaoNivel nivel="6" />
                <BotaoNivel nivel="5" />
                <BotaoNivel nivel="4" />
                <BotaoNivel nivel="3" />
                <BotaoNivel nivel="2" />
                <Link
                    to="/quizindividual"
                >
                    <BotaoNivel nivel="1" />
                </Link>
            </div>
        </Window>
    )
}

export default TelaListaQuestionario;