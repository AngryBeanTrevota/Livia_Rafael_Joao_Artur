import React from "react";
import { useNavigate } from "react-router-dom";

function FormDelete({ handleSubmit }) {
  const navigate = useNavigate();

  const handleDelete = () => {
    handleSubmit();
    navigate("/admin/");
  };

  return (
    <div className="mt-8 space-y-6">
      <p className="text-red-500 text-lg font-bold">
        Tem certeza que deseja excluir este estudante?
      </p>
      <div className="mt-8 flex gap-7">
        <button
          type="button"
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Excluir
        </button>
        <button
          type="button"
          onClick={() => navigate("/admin/")}
          className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default FormDelete;
