import { useState, useEffect } from "react";
import axios from "axios";
import NavbarAdm from "../../../components/NavbarAdm";
import { useNavigate } from "react-router";
import "../Tables.css";

function TeachersTable() {
  const [teachers, setTeachers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3333/teacher").then((response) => {
      setTeachers(response.data);
    });
  }, []);

  teachers.sort((a, b) => {
    return a.id - b.id;
  });

  return (
    <>
      <NavbarAdm />
      <div className="custom-container">
        <div className="custom-mt-12">
          <h2 className="custom-heading">Lista de Professores</h2>
        </div>
        <div className="custom-flex-col">
          <button
            className=" custom-add-btn"
            onClick={() => navigate("/admin/teachers/create")}>
            Adicionar Professor
          </button>
          <table className="custom-table">
            <thead>
              <tr>
                <th className="custom-cell">ID</th>
                <th className="custom-cell">Nome</th>
                <th className="custom-cell">Matrícula</th>
                <th className="custom-cell">Ações</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher) => (
                <tr key={teacher.id}>
                  <td className="custom-bordered-cell">{teacher.id}</td>
                  <td className="custom-bordered-cell">{teacher.name}</td>
                  <td className="custom-bordered-cell">
                    {teacher.registerTeacher}
                  </td>
                  <td className="custom-bordered-cell">
                    <button
                      className="custom-view-btn"
                      onClick={() =>
                        navigate(`/admin/teachers/view/${teacher.id}`)
                      }>
                      Visualizar
                    </button>
                    <button
                      className="custom-edit-btn"
                      onClick={() =>
                        navigate(`/admin/teachers/edit/${teacher.id}`)
                      }>
                      Editar
                    </button>
                    <button
                      className="custom-delete-btn"
                      onClick={() =>
                        navigate(`/admin/teachers/delete/${teacher.id}`)
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

export default TeachersTable;
