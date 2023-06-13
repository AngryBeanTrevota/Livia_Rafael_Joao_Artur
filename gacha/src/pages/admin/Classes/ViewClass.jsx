import React from "react";
import NavbarAdm from "../../../components/NavbarAdm";
import axios from "axios";
import { useParams } from "react-router";
import FormView from "../../../components/Forms/FormView";

function ViewClass() {
  const { id } = useParams();

  const [studentsOptions, setStudentsOptions] = React.useState([]);

  React.useEffect(() => {
    //pegar todos os estudantes que estão na sala
    async function fetchStudents() {
      try {
        const response = await axios.get("http://localhost:3333/student");
        const students = response.data;
        const options = students.map((student) => ({
          label: student.name,
          value: student.id,
        }));
        setStudentsOptions(options);
      } catch (error) {
        console.log(error);
      }
    }
  });

  const fields = [
    { label: "Nome", name: "name", type: "text" },
    { label: "Senha", name: "password", type: "text" },
    { label: "Professor", name: "teacher", type: "text" },
    {
      label: "Alunos",
      name: "students",
      type: "dropdown",
      options: [
        { label: "Alunos inscritos", value: "" },
        ...studentsOptions,
      ]
    },
  ];

  const [sala, setSala] = React.useState({});

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3333/class/${id}`);
        response.data.teacher = response.data.teacher.name;
        const students = response.data.Students;
        const options = students.map((student) => ({
          label: student.name,
          value: student.id,
        }));
        setStudentsOptions(options);
        response.data.students = options;
        setSala(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <NavbarAdm />
      <FormView fields={fields} data={sala} table={"/admin/classes"} />
    </>
  );
}

export default ViewClass;
