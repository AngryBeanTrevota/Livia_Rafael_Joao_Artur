import { useState, useEffect } from "react";
import axios from "axios";
import NavbarAdm from "../../../components/NavbarAdm";
import { useNavigate } from "react-router";
import "../Tables.css"

function StudentsTable() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3333/student").then((response) => {
      setStudents(response.data);
    });
  }, []);

  students.sort((a, b) => {
    return a.id - b.id;
  });

  return (
    <>
      <NavbarAdm />
      <div className="custom-container">
        <div className="custom-mt-12">
          <h2 className="custom-heading">Lista de Estudantes</h2>
        </div>
        <div className="custom-flex-col">
          <button
            className="custom-add-btn"
            onClick={() => navigate("/admin/students/create")}>
            Adicionar Estudante
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
              {students.map((student) => (
                <tr key={student.id}>
                  <td className="custom-bordered-cell">{student.id}</td>
                  <td className="custom-bordered-cell">{student.name}</td>
                  <td className="custom-bordered-cell">
                    {student.registerStudent}
                  </td>
                  <td className="custom-bordered-cell">
                    <button
                      className="custom-view-btn"
                      onClick={() =>
                        navigate(`/admin/students/view/${student.id}`)
                      }>
                      Visualizar
                    </button>
                    <button
                      className="custom-edit-btn"
                      onClick={() =>
                        navigate(`/admin/students/edit/${student.id}`)
                      }>
                      Editar
                    </button>
                    <button
                      className="custom-delete-btn"
                      onClick={() =>
                        navigate(`/admin/students/delete/${student.id}`)
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

export default StudentsTable;
