import React, { useState, useEffect } from "react";
import NavbarAdm from "../../../components/NavbarAdm";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import FormEdit from "../../../components/Forms/FormEdit";

function EditTeacher() {
  const navigate = useNavigate();
  const { id } = useParams();

  const fields = [
    { label: "Nome", name: "name", type: "text" },
    { label: "Matrícula", name: "registerTeacher", type: "text" },
    { label: "Senha", name: "password", type: "password" },
  ];

  const [teacher, setTeacher] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:3333/teacher/${id}`).then((response) => {
      setTeacher(response.data);
    });
  }, [id]);

  const handleSubmit = (data) => {
    axios.put(`http://localhost:3333/teacher/${id}`, data).then(() => {
      navigate("/admin/teachers");
    });
  };

  return (
    <>
      <NavbarAdm />
      <h1 className="text-xl font-bold mt-4 ml-4 flex justify-center items-center">Editar Aluno</h1>
        <FormEdit
            fields={fields}
            initialData={teacher}
            handleSubmit={handleSubmit}
            table="/admin/teachers"
        />
    </>
  );
}

export default EditTeacher;
