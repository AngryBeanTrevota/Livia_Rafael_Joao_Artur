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
      <div className="custom-container">
        <div className="custom-mt-12">
          <h2 className="custom-heading">Lista de Salas</h2>
        </div>
        <div className="custom-flex-col">
          <button
            className=" custom-add-btn"
            onClick={() => navigate("/admin/classes/create")}>
            Adicionar Sala
          </button>
          <table className="custom-table">
            <thead>
              <tr>
                <th className="custom-cell">Nome</th>
                <th className="custom-cell">Senha</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((sala) => (
                <tr key={sala.id}>
                  <td className="custom-bordered-cell">{sala.id}</td>
                  <td className="custom-bordered-cell">{sala.name}</td>
                  <td className="custom-bordered-cell">
                    {sala.password}
                  </td>
                  <td className="custom-bordered-cell">
                    <button
                      className="custom-view-btn"
                      onClick={() =>
                        navigate(`/admin/classes/view/${sala.id}`)
                      }>
                      Visualizar
                    </button>
                    <button
                      className="custom-edit-btn"
                      onClick={() =>
                        navigate(`/admin/classes/edit/${sala.id}`)
                      }>
                      Editar
                    </button>
                    <button
                      class="custom-delete-btn"
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
