import React from "react";
import NavbarAdm from "../../../components/NavbarAdm";
import axios from "axios";
import { useParams } from "react-router-dom";
import FormDelete from "../../../components/Forms/FormDelete";

function DeleteTeacher() {
  const { id } = useParams();

  const handleSubmit = () => {
    axios
      .delete(`http://localhost:3333/teacher/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        alert("Erro ao excluir professor");
      });
  };

  return (
    <>
      <NavbarAdm />
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold my-6">Excluir Professor</h2>
        <FormDelete handleSubmit={handleSubmit} />
      </div>
    </>
  );
}

export default DeleteTeacher;
