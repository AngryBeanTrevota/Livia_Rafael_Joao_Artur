import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    <form onSubmit={onSubmit} className="mt-8 space-y-6 w-1/2 m-auto">
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
            navigate(table);
          }}
          className="bg-slate-400 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded">
          Voltar
        </button>
      </div>
    </form>
  );
}

export default FormEdit;
