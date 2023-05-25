import React from "react";
import FormCreate from "../../../components/Forms/FormCreate";
import NavbarAdm from "../../../components/NavbarAdm";
import axios from "axios";
import { useNavigate } from "react-router";


function CreateClass() {
    const navigate = useNavigate();
  const fields = [
    { label: "Nome", name: "name", type: "text" },
    { label: "Senha", name: "password", type: "text" },
  ];

  const handleSubmit = (formData) => {
    axios
      .post("http://localhost:3333/class", formData)
      .then((response) => {
        console.log(response);
        navigate("/admin/classes");
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
          voltar={"/admin/classes"}
        />
      </div>
    </>
  );
}

export default CreateClass;
