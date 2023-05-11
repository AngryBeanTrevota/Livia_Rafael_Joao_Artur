import React from "react";
import NavbarAdm from "../../../components/NavbarAdm";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import FormView from "../../../components/Forms/FormView";

function ViewStudent() {
  const { id } = useParams();
  const fields = [
    { label: "Nome", name: "name", type: "text" },
    { label: "Matrícula", name: "registerStudent", type: "text" },
    { label: "Senha", name: "password", type: "password" },
    { label: "XP", name: "xp", type: "number" },
    { label: "Tiros", name: "shots", type: "number" },
    { label: "Número de quizzes", name: "number_quizzes", type: "number" },
    { label: "Número de quizzes acertados", name: "number_quizzes_success", type: "number" },
  ];

  const [student, setStudent] = React.useState({});

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3333/student/${id}`);
        setStudent(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <NavbarAdm />
      <FormView fields={fields} data={student} table={"/admin/students"} />
    </>
  );
}

export default ViewStudent;
