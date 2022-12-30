import React from "react";
import { Routes, Route } from "react-router-dom";

import Menu from "../pages/Menu";
import MenuAdquiridos from "../pages/MenuAdquiridos";
import QuizIndividual from "../pages/QuizIndividual";
import Quizzes from "../pages/Quizzes";
import TelaInicial from "../pages/TelaInicial";
import TelaJogoNovo from "../pages/TelaJogoNovo";
import AnimacaoBanner from "../pages/AnimacaoBanner";
import Banner from "../pages/Banner";
import ItemSorteado from "../pages/ItemSorteado";

const Rotas = () => {
  return (
    <div className="Rotas">
      <Routes>
        <Route exact path="/" element={<TelaInicial />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menuadquiridos" element={<MenuAdquiridos />} />
        <Route path="/quizindividual" element={<QuizIndividual />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/telajogonovo" element={<TelaJogoNovo />} />
        <Route path="/animacaoBanner" element={<AnimacaoBanner />} />
        <Route path="/itemSorteado" element={<ItemSorteado />} />
      </Routes>
    </div>
  );
};

export default Rotas;
