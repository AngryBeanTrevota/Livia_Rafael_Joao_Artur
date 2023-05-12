import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormCreate({ fields, handleSubmit, voltar }) {
  const [formData, setFormData] = useState({});
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

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-6 w-1/2">
      {fields.map((field) => (
        <div key={field.name} className="mt-4">
          <label
            htmlFor={field.name}
            className="block text-gray-700 font-bold mb-2">
            {field.label}
          </label>
          <input
            type={field.type || "text"}
            name={field.name}
            id={field.name}
            value={formData[field.name] || ""}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      ))}
      <div className="mt-8 flex gap-7">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Salvar
        </button>
        <button
          type="button"
          onClick={() => {
            navigate(voltar);
          }}
          className="bg-slate-400 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded">
         Voltar
        </button>
      </div>
    </form>
  );
}

export default FormCreate;
