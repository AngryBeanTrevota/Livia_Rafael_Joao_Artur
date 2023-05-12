import React from "react";
import NavbarAdm from "../../../components/NavbarAdm";
import axios from "axios";
import { useParams } from "react-router";
import FormView from "../../../components/Forms/FormView";

function ViewClass() {
  const { id } = useParams();
  const fields = [
    { label: "Nome", name: "name", type: "text" },
    { label: "Senha", name: "password", type: "text" },
  ];

  const [sala, setSala] = React.useState({});

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3333/class/${id}`);
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
