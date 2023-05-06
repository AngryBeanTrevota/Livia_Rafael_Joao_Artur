import { useState, useEffect } from "react";
import axios from "axios";
import CreateModal from "../../components/modals/CreateModal";
import EditModal from "../../components/modals/EditModal";
import ViewModal from "../../components/modals/ViewModal";
import DeleteModal from "../../components/modals/DeleteModal";

function StudentsTable() {
  const [students, setStudents] = useState([]);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState({});
  const [name, setName] = useState("");
  const [register, setRegister] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3333/student").then((response) => {
      setStudents(response.data);
    });
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleRegisterChange = (event) => {
    setRegister(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCreateSubmit = (event) => {
    event.preventDefault();
    const studentData = {
      name: name,
      register: register,
      password: password,
    };
    axios.post("/students", studentData).then((response) => {
      setStudents([...students, response.data]);
      setCreateModalOpen(false);
    });
    setName("");
    setRegister("");
    setPassword("");
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();
    const studentData = {
      name: name,
      register: register,
      password: password,
    };
    axios
      .put(`/students/${selectedStudent.id}`, studentData)
      .then((response) => {
        setStudents(
          students.map((student) => {
            if (student.id === response.data.id) {
              return response.data;
            } else {
              return student;
            }
          })
        );
        setEditModalOpen(false);
      });
    setName("");
    setRegister("");
    setPassword("");
  };

  const handleViewOpen = (student) => {
    setSelectedStudent(student);
    setViewModalOpen(true);
  };

  const handleEditOpen = (student) => {
    setSelectedStudent(student);
    setName(student.name);
    setRegister(student.register);
    setPassword(student.password);
    setEditModalOpen(true);
  };

  const handleDeleteOpen = (student) => {
    setSelectedStudent(student);
    setDeleteModalOpen(true);
  };

  const handleDelete = () => {
    axios.delete(`/students/${selectedStudent.id}`).then(() => {
      setStudents(
        students.filter((student) => student.id !== selectedStudent.id)
      );
      setDeleteModalOpen(false);
    });
  };

  return (
    <div className="flex items-center flex-col w-full">
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Lista de Estudantes</h2>
      </div>
      <div className="flex flex-col items-center">
      <button
        className=" self-start bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCreateModalOpen(true)}>
        Adicionar Estudante
      </button>
        <table className="table-auto my-5">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Nome</th>
              <th className="px-4 py-2">Matrícula</th>
              <th className="px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td className="border px-4 py-2">{student.id}</td>
                <td className="border px-4 py-2">{student.name}</td>
                <td className="border px-4 py-2">{student.registerStudent}</td>
                <td className="border px-4 py-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => handleViewOpen(student)}>
                    Visualizar
                  </button>
                  <button
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mx-2"
                    onClick={() => handleEditOpen(student)}>
                    Editar
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => handleDelete(student.id)}>
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedStudent && (
        <div>
          <ViewModal
            isOpen={viewModalOpen}
            onClose={() => setViewModalOpen(false)}
            student={selectedStudent}
          />
          <EditModal
            isOpen={editModalOpen}
            onClose={() => setEditModalOpen(false)}
            onSubmit={handleEditSubmit}
            student={selectedStudent}
            name={name}
            onNameChange={handleNameChange}
            register={register}
            onRegisterChange={handleRegisterChange}
            password={password}
            onPasswordChange={handlePasswordChange}
          />
        </div>
      )}
      {selectedStudent && (
        <DeleteModal
          isOpen={deleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          onDelete={handleDelete}
          student={selectedStudent}
        />
      )}
    </div>
  );
}

export default StudentsTable;
