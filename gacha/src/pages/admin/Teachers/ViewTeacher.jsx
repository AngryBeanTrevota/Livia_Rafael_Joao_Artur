import React from "react";
import NavbarAdm from "../../../components/NavbarAdm";
import axios from "axios";
import { useParams } from "react-router";
import FormView from "../../../components/Forms/FormView";

function ViewTeacher() {
  const { id } = useParams();
  const fields = [
    { label: "Nome", name: "name", type: "text" },
    { label: "Matrícula", name: "registerTeacher", type: "text" },
    { label: "Sala de Aula", name: "classroom", type: "text"}    
  ];

  const [teacher, setTeacher] = React.useState({});

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3333/teacher/${id}`);
        response.data.classroom = response.data.classroom.name;
        setTeacher(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <NavbarAdm />
      <FormView fields={fields} data={teacher} table={"/admin/teachers"} />
    </>
  );
}

export default ViewTeacher;
