import React from "react";
import "./quizzes.css";
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
        style={{ visibility: visivel ? "visible" : "hidden" }}
        id="imagemCadeadoQuiz"
        src="https://static.thenounproject.com/png/228611-200.png"
      ></img>
      <div className={tipoQuiz}>
        <botao className="botaoNivelQuiz">{nivel}</botao>
      </div>
    </div>
  );
};

const Quizzes = () => {
  return (
    <div id="tudo">
      <div className="windowsBox" id="headerQuizBackground">
        <div id="header">
          <p>Quizzes</p>
          <button className="windowsButton">
            <Link to="/menu">x</Link>
          </button>
        </div>
      </div>
      <div className="windowsBox" id="corpoQuizzes">
        <BotaoNivel nivel="7" />
        <BotaoNivel nivel="6" />
        <BotaoNivel nivel="5" />
        <BotaoNivel nivel="4" />
        <BotaoNivel nivel="3" />
        <BotaoNivel nivel="2" />
        <BotaoNivel nivel="1" />
      </div>
    </div>
  );
};

export default Quizzes;