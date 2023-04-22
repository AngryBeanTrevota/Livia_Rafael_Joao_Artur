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
import { RequireAuth } from "../context/Auth/RequireAuth";
import Cadastro from "../pages/telaCadastro";

const Rotas = () => {
  return (
    <div className="Rotas">
      <Routes>
        <Route exact path="/" element={<RequireAuth><TelaInicial /></RequireAuth>} />
        <Route path="/banner" element={<RequireAuth><Banner /></RequireAuth>} />
        <Route path="/menu" element={<RequireAuth><Menu /></RequireAuth>} />
        <Route path="/menuadquiridos" element={<RequireAuth><MenuAdquiridos /></RequireAuth>} />
        <Route path="/quizindividual" element={<RequireAuth><QuizIndividual /></RequireAuth>} />
        <Route path="/quizzes" element={<RequireAuth><Quizzes /></RequireAuth>} />
        <Route path="/telajogonovo" element={<RequireAuth><TelaJogoNovo /></RequireAuth>} />
        <Route path="/animacaoBanner" element={<RequireAuth><AnimacaoBanner /></RequireAuth>} />
        <Route path="/itemSorteado" element={<RequireAuth><ItemSorteado /></RequireAuth>} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </div>
  );
};

export default Rotas;
