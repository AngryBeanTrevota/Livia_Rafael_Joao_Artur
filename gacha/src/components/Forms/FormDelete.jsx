import React from "react";
import { useNavigate } from "react-router-dom";
import "./Forms.css";

function FormDelete({ handleSubmit }) {
  const navigate = useNavigate();

  const handleDelete = () => {
    handleSubmit();
    navigate("/admin/");
  };

  return (
    <div className="titleDelete">
      <p>
        Tem certeza que deseja excluir este estudante?
      </p>
      <div className="buttons">
        <button
          type="button"
          onClick={handleDelete}
          className="button-save">
          Excluir
        </button>
        <button
          type="button"
          onClick={() => navigate("/admin/")}
          className="button-back">
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default FormDelete;
