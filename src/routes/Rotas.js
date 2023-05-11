import React from "react";
import { Routes, Route } from "react-router-dom";

import Menu from "../pages/menu";
import MenuAdquiridos from "../pages/menuAdquiridos";
import QuizIndividual from "../pages/quizIndividual";
import Quizzes from "../pages/quizzes";
import TelaInicial from "../pages/telaInicial";
import TelaJogoNovo from "../pages/telaJogoNovo";
import AnimacaoBanner from "../pages/AnimacaoBanner";
import Banner from "../pages/banner";
import ItemSorteado from "../pages/ItemSorteado";
import TelaHistoria from "../pages/telaHistoria";
import { RequireAuth } from "../context/Auth/RequireAuth";
import Cadastro from "../pages/telaCadastro";
import TelaSalaAluno from "../pages/telaSalaAluno";
import TelaReciclagem from "../pages/telaReciclagem";
import TelaListaQuestionario from "../pages/telaListaQuestionario";

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
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/telasalaaluno" element={<TelaSalaAluno />} />
        <Route path="/telareciclagem" element={<TelaReciclagem />} />
        <Route path="/telalistaquestionario" element={<TelaListaQuestionario />} />
        <Route path="/historia" element={<TelaHistoria />}></Route>
      </Routes>
    </div>
  );
};

export default Rotas;
