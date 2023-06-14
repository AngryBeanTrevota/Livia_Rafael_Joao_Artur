import React from "react";
import { Routes, Route } from "react-router-dom";
import { RequireAuthStudent } from "../context/Auth/RequireAuthStudent";
import { RequireAuthAdmin } from "../context/Auth/RequireAuthAdmin";

import Menu from "../pages/menu";
import TelaLogin from "../pages/telaLogin";
import LoginAdm from "../pages/LoginAdm";
import MenuAdquiridos from "../pages/menuAdquiridos";
import QuizIndividual from "../pages/quizIndividual";
import TelaInicial from "../pages/telaInicial";
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

//mudando alguma coisa

const Rotas = () => {

  return (
    <div className="Rotas">
      <Routes>
        <Route path="/" element={<TelaLogin />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<LoginAdm />} />

        <Route path="/nav" element={<RequireAuthStudent><TelaInicial /></RequireAuthStudent>} />
        <Route path="/banner" element={<RequireAuthStudent><Banner /></RequireAuthStudent>} />
        <Route path="/menu" element={<RequireAuthStudent><Menu /></RequireAuthStudent>} />
        <Route path="/menuadquiridos" element={<RequireAuthStudent><MenuAdquiridos /></RequireAuthStudent>} />
        <Route path="/quizindividual" element={<RequireAuthStudent><QuizIndividual /></RequireAuthStudent>} />
        <Route path="/animacaoBanner" element={<RequireAuthStudent><AnimacaoBanner /></RequireAuthStudent>} />
        <Route path="/itemSorteado" element={<RequireAuthStudent><ItemSorteado /></RequireAuthStudent>} />
        <Route path="/sala" element={<RequireAuthStudent><TelaSalaAluno /></RequireAuthStudent>} />
        <Route path="/reciclagem" element={<RequireAuthStudent><TelaReciclagem /></RequireAuthStudent>} />
        <Route path="/quizzes" element={<RequireAuthStudent><TelaListaQuestionario /></RequireAuthStudent>} />
        <Route path="/historia" element={<RequireAuthStudent><TelaHistoria /></RequireAuthStudent>} />
        <Route path="/revisao" element={<RequireAuthStudent><TelaRevisao /></RequireAuthStudent>} />

        <Route path="/admin" element={<RequireAuthAdmin><Dashboard /></RequireAuthAdmin>} />

        <Route path="/admin/students" element={<RequireAuthAdmin><StudentsTable /></RequireAuthAdmin>} />
        <Route path="/admin/students/create" element={<RequireAuthAdmin><CreateStudent /></RequireAuthAdmin>} />
        <Route path="/admin/students/view/:id" element={<RequireAuthAdmin><ViewStudent /></RequireAuthAdmin>} />
        <Route path="/admin/students/edit/:id" element={<RequireAuthAdmin><EditStudent /></RequireAuthAdmin>} />
        <Route path="/admin/students/delete/:id" element={<RequireAuthAdmin><DeleteStudent /></RequireAuthAdmin>} />

        <Route path="/admin/teachers" element={<RequireAuthAdmin><TeachersTable /></RequireAuthAdmin>} />
        <Route path="/admin/teachers/create" element={<RequireAuthAdmin><CreateTeacher /></RequireAuthAdmin>} />
        <Route path="/admin/teachers/view/:id" element={<RequireAuthAdmin><ViewTeacher /></RequireAuthAdmin>} />
        <Route path="/admin/teachers/edit/:id" element={<RequireAuthAdmin><EditTeacher /></RequireAuthAdmin>} />
        <Route path="/admin/teachers/delete/:id" element={<RequireAuthAdmin><DeleteTeacher /></RequireAuthAdmin>} />

        <Route path="/admin/classes" element={<RequireAuthAdmin><ClassesTable /></RequireAuthAdmin>} />
        <Route path="/admin/classes/create" element={<RequireAuthAdmin><CreateClass /></RequireAuthAdmin>} />
        <Route path="/admin/classes/view/:id" element={<RequireAuthAdmin><ViewClass /></RequireAuthAdmin>} />
        <Route path="/admin/classes/edit/:id" element={<RequireAuthAdmin><EditClass /></RequireAuthAdmin>} />
        <Route path="/admin/classes/delete/:id" element={<RequireAuthAdmin><DeleteClass /></RequireAuthAdmin>} />
      </Routes>
    </div>
  );
};

export default Rotas;
