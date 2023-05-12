import React, { useState, useEffect } from "react";
import NavbarAdm from "../../../components/NavbarAdm";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import FormEdit from "../../../components/Forms/FormEdit";

function EditClass() {
  const navigate = useNavigate();
  const { id } = useParams();

  const fields = [
    { label: "Nome", name: "name", type: "text" },
    { label: "Senha", name: "password", type: "text" },
  ];

  const [sala, setSala] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:3333/class/${id}`).then((response) => {
      setSala(response.data);
    });
  }, [id]);

  const handleSubmit = (data) => {
    axios.put(`http://localhost:3333/class/${id}`, data).then(() => {
      navigate("/admin/classes");
    });
  };

  return (
    <>
      <NavbarAdm />
      <h1 className="text-xl font-bold mt-4 ml-4 flex justify-center items-center">Editar Aluno</h1>
        <FormEdit
            fields={fields}
            initialData={sala}
            handleSubmit={handleSubmit}
            table="/admin/classes"
        />
    </>
  );
}

export default EditClass;
