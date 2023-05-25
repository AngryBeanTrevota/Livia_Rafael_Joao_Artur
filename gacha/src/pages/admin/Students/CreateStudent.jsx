import React from "react";
import FormCreate from "../../../components/Forms/FormCreate";
import NavbarAdm from "../../../components/NavbarAdm";
import axios from "axios";
import { useNavigate } from "react-router";


function CreatePage() {
    const navigate = useNavigate();
  const fields = [
    { label: "Nome", name: "name", type: "text" },
    { label: "Matrícula", name: "register", type: "text" },
    { label: "Senha", name: "password", type: "password" },
  ];

  const handleSubmit = (formData) => {
    axios
      .post("http://localhost:3333/student", formData)
      .then((response) => {
        console.log(response);
        navigate("/admin/students");
    })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <>
      <NavbarAdm />
      <div className="flex flex-col items-center">
        <FormCreate
          fields={fields}
          handleSubmit={handleSubmit}
          voltar={"/admin/students"}
        />
      </div>
    </>
  );
}

export default CreatePage;
