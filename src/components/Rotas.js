import React from "react";
import { Routes, Route } from "react-router-dom";

import Banner from "../pages/Banner";
import Menu from "../pages/Menu";
import MenuAdquiridos from "../pages/MenuAdquiridos";
import QuizIndividual from "../pages/QuizIndividual";
import Quizzes from "../pages/Quizzes";
import TelaInicial from "../pages/TelaInicial";
import TelaJogoNovo from "../pages/TelaJogoNovo";

const Rotas = () => {
    return(
        <div className="Rotas">
            <Routes>
                <Route exact path="/" element={<TelaInicial/>}/>
                <Route path="/banner" element={<Banner/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/menuadquiridos" element={<MenuAdquiridos/>}/>
                <Route path="/quizindividual" element={<QuizIndividual/>}/>
                <Route path="/quizzes" element={<Quizzes/>}/>
                <Route path="/telajogonovo" element={<TelaJogoNovo/>}/>
            </Routes>
        </div>
    )
}

export default Rotas
