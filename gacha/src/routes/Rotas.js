import React from "react";
import { Routes, Route } from "react-router-dom";
import { RequireAuth } from "../context/Auth/RequireAuth";

import Menu from "../pages/menu";
import TelaLogin from "../pages/telaLogin";
import MenuAdquiridos from "../pages/menuAdquiridos";
import QuizIndividual from "../pages/quizIndividual";
import Quizzes from "../pages/quizzes";
import TelaInicial from "../pages/telaInicial";
import TelaJogoNovo from "../pages/telaJogoNovo";
import AnimacaoBanner from "../pages/AnimacaoBanner";
import Banner from "../pages/banner";
import ItemSorteado from "../pages/ItemSorteado";
import Cadastro from "../pages/telaCadastro";
import TelaHistoria from "../pages/telaHistoria";
import TelaSalaAluno from "../pages/telaSalaAluno";
import TelaReciclagem from "../pages/telaReciclagem";
import TelaListaQuestionario from "../pages/telaListaQuestionario";
import TelaRevisao from "../pages/telaRevisao";

import Dashboard from "../pages/admin/Dashboard";

import StudentsTable from "../pages/admin/Students/StudentsTable";
import CreateStudent from "../pages/admin/Students/CreateStudent";
import ViewStudent from "../pages/admin/Students/ViewStudent";
import EditStudent from "../pages/admin/Students/EditStudent";
import DeleteStudent from "../pages/admin/Students/DeleteStudent";

import TeachersTable from "../pages/admin/Teachers/TeachersTable";
import ViewTeacher from "../pages/admin/Teachers/ViewTeacher";
import CreateTeacher from "../pages/admin/Teachers/CreateTeacher";
import EditTeacher from "../pages/admin/Teachers/EditTeacher";
import DeleteTeacher from "../pages/admin/Teachers/DeleteTeacher";

import ClassesTable from "../pages/admin/Classes/ClassesTable";
import CreateClass from "../pages/admin/Classes/CreateClass";
import EditClass from "../pages/admin/Classes/EditClass";
import DeleteClass from "../pages/admin/Classes/DeleteClass";
import ViewClass from "../pages/admin/Classes/ViewClass";
import { AuthProvider } from "../context/Auth/AuthProvider";



const Rotas = () => {

  return (
    <div className="Rotas">
      <Routes>
        <Route path="/" element={<TelaLogin />} />
        <Route path="/cadastro" element={<Cadastro />} />

        <Route path="/nav" element={<RequireAuth><TelaInicial /></RequireAuth>} />
        <Route path="/banner" element={<RequireAuth><Banner /></RequireAuth>} />
        <Route path="/menu" element={<RequireAuth><Menu /></RequireAuth>} />
        <Route path="/menuadquiridos" element={<RequireAuth><MenuAdquiridos /></RequireAuth>} />
        <Route path="/quizindividual" element={<RequireAuth><QuizIndividual /></RequireAuth>} />
        <Route path="/criarsala" element={<RequireAuth><TelaJogoNovo /></RequireAuth>} />
        <Route path="/animacaoBanner" element={<RequireAuth><AnimacaoBanner /></RequireAuth>} />
        <Route path="/itemSorteado" element={<RequireAuth><ItemSorteado /></RequireAuth>} />
        <Route path="/sala" element={<RequireAuth><TelaSalaAluno /></RequireAuth>} />
        <Route path="/telareciclagem" element={<RequireAuth><TelaReciclagem /></RequireAuth>} />
        <Route path="/quizzes" element={<RequireAuth><TelaListaQuestionario /></RequireAuth>} />
        <Route path="/historia" element={<RequireAuth><TelaHistoria /></RequireAuth>} />
        <Route path="/revisao" element={<RequireAuth><TelaRevisao /></RequireAuth>} />

        <Route path="/admin" element={<Dashboard />} />

        <Route path="/admin/students" element={<StudentsTable />} />
        <Route path="/admin/students/create" element={<CreateStudent />} />
        <Route path="/admin/students/view/:id" element={<ViewStudent />} />
        <Route path="/admin/students/edit/:id" element={<EditStudent />} />
        <Route path="/admin/students/delete/:id" element={<DeleteStudent />} />

        <Route path="/admin/teachers" element={<TeachersTable />} />
        <Route path="/admin/teachers/create" element={<CreateTeacher />} />
        <Route path="/admin/teachers/view/:id" element={<ViewTeacher />} />
        <Route path="/admin/teachers/edit/:id" element={<EditTeacher />} />
        <Route path="/admin/teachers/delete/:id" element={<DeleteTeacher />} />

        <Route path="/admin/classes" element={<ClassesTable />} />
        <Route path="/admin/classes/create" element={<CreateClass />} />
        <Route path="/admin/classes/view/:id" element={<ViewClass />} />
        <Route path="/admin/classes/edit/:id" element={<EditClass />} />
        <Route path="/admin/classes/delete/:id" element={<DeleteClass />} />
      </Routes>
    </div>
  );
};

export default Rotas;
