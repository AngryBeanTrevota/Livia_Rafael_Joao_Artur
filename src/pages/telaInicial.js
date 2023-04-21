import React from "react";
import "./telaInicial.css";
import { Link } from 'react-router-dom';

const TelaInicial = () => {
    return (
        <div>
            <p>TelaInicial</p>
            <Link to="/banner" className="home-button">Banner </Link>
            <Link to="/menu" className="home-button">Menu </Link>
            <Link to="/menuadquiridos" className="home-button">MenuAdquiridos </Link>
            <Link to="/quizindividual" className="home-button">QuizIndividual </Link>
            <Link to="/quizzes" className="home-button">Quizzes </Link>
            <Link to="/telajogonovo" className="home-button">TelaJogoNovo </Link>
        </div>
    )
}

export default TelaInicial;