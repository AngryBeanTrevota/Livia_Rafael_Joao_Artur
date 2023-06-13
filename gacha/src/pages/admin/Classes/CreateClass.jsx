import React, { useEffect, useState } from "react";
import axios from "axios";
import FormCreate from "../../../components/Forms/FormCreate";
import NavbarAdm from "../../../components/NavbarAdm";
import { useNavigate } from "react-router-dom";

function CreateClass() {
  const navigate = useNavigate();
  const [teachersOptions, setTeachersOptions] = useState([]);

  useEffect(() => {
    async function fetchTeachers() {
      try {
        const response = await axios.get("http://localhost:3333/teacher");
        const teachers = response.data;
        const options = teachers.map((teacher) => ({
          label: teacher.name,
          value: teacher.id,
        }));
        setTeachersOptions(options);
      } catch (error) {
        console.log(error);
      }
    }

    fetchTeachers();
  }, []);

  const fields = [
    { label: "Nome", name: "name", type: "text" },
    { label: "Senha", name: "password", type: "text" },
    {
      label: "Professor",
      name: "teacher_id",
      type: "dropdown",
      options: [
        { label: "Selecione um professor", value: "" },
        ...teachersOptions,
      ],
    },
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
