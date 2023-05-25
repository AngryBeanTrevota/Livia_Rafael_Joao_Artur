import React from "react";
import { useNavigate } from "react-router-dom";
import "./Forms.css";

function FormView({ data, fields, table }) {
  const navigate = useNavigate();

  console.log(data);
  console.log(fields);
  return (
    <div className="form">
      {fields.map((field) => (
        <div key={field.name} className="input-container">
          <label htmlFor={field.name} className="input-label">
            {field.label}
          </label>
          <input
            type={field.type}
            name={field.name}
            id={field.name}
            value={data[field.name] || ""}
            readOnly
            className="input"
          />
        </div>
      ))}
      <div className="buttons">
        <button
          onClick={() => {
            navigate(table);
          }}
          className="button-back">
          Voltar
        </button>
      </div>
    </div>
  );
}

export default FormView;
