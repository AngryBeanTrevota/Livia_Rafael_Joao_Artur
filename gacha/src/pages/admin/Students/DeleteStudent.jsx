import React from "react";
import NavbarAdm from "../../../components/NavbarAdm";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import FormDelete from "../../../components/Forms/FormDelete";

function DeleteStudent() {
  const { id } = useParams();

  const handleSubmit = () => {
    axios
      .delete(`http://localhost:3333/student/${id}`)
      .then((response) => {
        console.log(response);
        alert("Estudante excluído com sucesso!");
      })
      .catch((error) => {
        console.log(error);
        alert("Erro ao excluir estudante");
      });
  };

  return (
    <>
      <NavbarAdm />
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold my-6">Excluir Estudante</h2>
        <FormDelete handleSubmit={handleSubmit} />
      </div>
    </>
  );
}

export default DeleteStudent;