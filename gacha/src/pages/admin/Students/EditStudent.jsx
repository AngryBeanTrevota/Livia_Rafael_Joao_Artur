import React, { useState, useEffect } from "react";
import NavbarAdm from "../../../components/NavbarAdm";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import FormEdit from "../../../components/Forms/FormEdit";

function EditStudent() {
  const navigate = useNavigate();
  const { id } = useParams();

  const fields = [
    { label: "Nome", name: "name", type: "text" },
    { label: "Matrícula", name: "registerStudent", type: "text" },
    { label: "Senha", name: "password", type: "password" },
    { label: "XP", name: "xp", type: "number" },
    { label: "Tiros", name: "shots", type: "number" },
    { label: "Número de quizzes", name: "number_quizzes", type: "number" },
    {
      label: "Número de quizzes acertados",
      name: "number_quizzes_success",
      type: "number",
    },
  ];

  const [student, setStudent] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:3333/student/${id}`).then((response) => {
      setStudent(response.data);
    });
  }, [id]);
  student.password = "";

  
  const handleSubmit = (data) => {
    data.xp = parseInt(data.xp);
    data.shots = parseInt(data.shots);
    axios.put(`http://localhost:3333/student/${id}`, data).then(() => {
      navigate("/admin/students");
    });
  };

  return (
    <>
      <NavbarAdm />
      <FormEdit
        fields={fields}
        initialData={student}
        handleSubmit={handleSubmit}
        table="/admin/students"
      />
    </>
  );
}

export default EditStudent;
