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
        <FormDelete handleSubmit={handleSubmit} />
      </div>
    </>
  );
}

export default DeleteStudent;
