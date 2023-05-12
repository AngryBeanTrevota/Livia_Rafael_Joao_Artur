import React from "react";
import FormCreate from "../../../components/Forms/FormCreate";
import NavbarAdm from "../../../components/NavbarAdm";
import axios from "axios";
import { useNavigate } from "react-router";


function CreateTeacher() {
    const navigate = useNavigate();
  const fields = [
    { label: "Nome", name: "name", type: "text" },
    { label: "Matrícula", name: "register", type: "text" },
    { label: "Senha", name: "password", type: "password" },
  ];

  const handleSubmit = (formData) => {
    axios
      .post("http://localhost:3333/teacher", formData)
      .then((response) => {
        console.log(response);
        navigate("/admin/teachers");
    })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <>
      <NavbarAdm />
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold my-6">Criar novo professor</h2>
        <FormCreate
          fields={fields}
          handleSubmit={handleSubmit}
          voltar={"/admin/teachers"}
        />
      </div>
    </>
  );
}

export default CreateTeacher;
