import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Forms.css";

function FormEdit({ fields, initialData, handleSubmit, table }) {
  const [formData, setFormData] = useState(initialData);
  const navigate = useNavigate();


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(formData);
  };

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  return (
    <form onSubmit={onSubmit} className="form">
      {fields.map((field) => (
        <div key={field.name} className="input-container">
          <label htmlFor={field.name} className="input-label">
            {field.label}
          </label>
          <input
            type={field.type || "text"}
            name={field.name}
            id={field.name}
            value={formData[field.name] || ""}
            onChange={handleChange}
            className="input"
          />
        </div>
      ))}
      <div className="buttons">
        <button type="submit" className="button-save">
          Salvar
        </button>
        <button
          type="button"
          onClick={() => {
            navigate(table);
          }}
          className="button-back">
          Voltar
        </button>
      </div>
    </form>
  );
}

export default FormEdit;
