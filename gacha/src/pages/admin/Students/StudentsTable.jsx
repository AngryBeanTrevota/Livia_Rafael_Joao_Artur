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
      <div class="custom-container">
        <div class="custom-mt-12">
          <h2 class="custom-heading">Lista de Estudantes</h2>
        </div>
        <div class="custom-flex-col">
          <button
            class="custom-add-btn"
            onClick={() => navigate("/admin/students/create")}>
            Adicionar Estudante
          </button>
          <table class="custom-table">
            <thead>
              <tr>
                <th class="custom-cell">ID</th>
                <th class="custom-cell">Nome</th>
                <th class="custom-cell">Matrícula</th>
                <th class="custom-cell">Ações</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td class="custom-bordered-cell">{student.id}</td>
                  <td class="custom-bordered-cell">{student.name}</td>
                  <td class="custom-bordered-cell">
                    {student.registerStudent}
                  </td>
                  <td class="custom-bordered-cell">
                    <button
                      class="custom-view-btn"
                      onClick={() =>
                        navigate(`/admin/students/view/${student.id}`)
                      }>
                      Visualizar
                    </button>
                    <button
                      class="custom-edit-btn"
                      onClick={() =>
                        navigate(`/admin/students/edit/${student.id}`)
                      }>
                      Editar
                    </button>
                    <button
                      class="custom-delete-btn"
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
