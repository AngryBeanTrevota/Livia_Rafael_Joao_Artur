import React from "react";
import { useNavigate } from "react-router-dom";

function FormView({ data, fields, table }) {
  const navigate = useNavigate();

  console.log(data);
  console.log(fields);
  return (
    <div className="mt-8 space-y-6 w-1/2 m-auto">
      {fields.map((field) => (
        <div key={field.name} className="mt-4">
          <label
            htmlFor={field.name}
            className="block text-gray-700 font-bold mb-2">
            {field.label}
          </label>
          <input
            type={field.type}
            name={field.name}
            id={field.name}
            value={data[field.name] || ""}
            readOnly
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
          />
        </div>
      ))}
      <div className="mt-8 flex gap-7">
        <button
          onClick={() => {
            navigate(table);
          }}
          className="bg-slate-400 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded">
          Voltar
        </button>
      </div>
    </div>
  );
}

export default FormView;
