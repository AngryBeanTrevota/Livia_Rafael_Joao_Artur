import React from "react";
import { Routes, Route } from "react-router-dom";

import { RequireAuth } from "../context/Auth/RequireAuth";
import Menu from "../pages/menu";
import MenuAdquiridos from "../pages/menuAdquiridos";
import QuizIndividual from "../pages/quizIndividual";
import Quizzes from "../pages/quizzes";
import TelaInicial from "../pages/telaInicial";
import TelaJogoNovo from "../pages/telaJogoNovo";
import AnimacaoBanner from "../pages/AnimacaoBanner";
import Banner from "../pages/banner";
import ItemSorteado from "../pages/ItemSorteado";
import Cadastro from "../pages/telaCadastro";

import StudentsTable from "../pages/admin/Students/StudentsTable";
import CreateStudent from "../pages/admin/Students/CreateStudent";
import Dashboard from "../pages/admin/Dashboard";
import ClassesTable from "../pages/admin/ClassesTable";
import TeachersTable from "../pages/admin/ClassesTable";

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
        
        <Route path="/admin" element={<Dashboard/>} />
        <Route path="/admin/students" element={<StudentsTable />} />
        <Route path="/admin/students/create" element={<CreateStudent />} />
        
        <Route path="/admin/teachers" element={<TeachersTable />} />
        <Route path="/admin/classes" element={<ClassesTable />} />
      </Routes>
    </div>
  );
};

export default Rotas;
