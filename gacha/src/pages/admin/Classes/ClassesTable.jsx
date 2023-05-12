import { useState, useEffect } from "react";
import axios from "axios";
import NavbarAdm from "../../../components/NavbarAdm";
import { useNavigate } from "react-router";

function ClassesTable() {
  const [classes, setClasses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3333/class").then((response) => {
      setClasses(response.data);
    });
  }, []);

  classes.sort((a, b) => {
    return a.id - b.id;
  });

  return (
    <>
      <NavbarAdm />
      <div className="flex items-center flex-col w-full">
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Lista de Salas</h2>
        </div>
        <div className="flex flex-col items-center">
          <button
            className=" self-start bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => navigate("/admin/classes/create")}>
            Adicionar Sala
          </button>
          <table className="table-auto my-5">
            <thead>
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Nome</th>
                <th className="px-4 py-2">Senha</th>
                <th className="px-4 py-2">Ações</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((sala) => (
                <tr key={sala.id}>
                  <td className="border px-4 py-2">{sala.id}</td>
                  <td className="border px-4 py-2">{sala.name}</td>
                  <td className="border px-4 py-2">
                    {sala.password}
                  </td>
                  <td className="border px-4 py-2">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                      onClick={() =>
                        navigate(`/admin/classes/view/${sala.id}`)
                      }>
                      Visualizar
                    </button>
                    <button
                      className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mx-2"
                      onClick={() =>
                        navigate(`/admin/classes/edit/${sala.id}`)
                      }>
                      Editar
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                      onClick={() =>
                        navigate(`/admin/classes/delete/${sala.id}`)
                      }>
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ClassesTable;
