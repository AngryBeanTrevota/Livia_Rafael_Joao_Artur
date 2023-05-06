import React from "react";

function CreateModal({ isOpen, onClose, onSubmit, name, onNameChange, register, onRegisterChange, password, onPasswordChange }) {
  return (
    <div className={isOpen ? "fixed z-10 inset-0 overflow-y-auto" : "hidden"}>
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        &#8203;
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h2 className="text-lg font-medium leading-6 text-gray-900">
              Adicionar Estudante
            </h2>
            <div className="mt-4">
              <form onSubmit={onSubmit}>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-4">
                    <label htmlFor="name" className="font-medium">Nome:</label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={onNameChange}
                      className="rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      required
                    />
                  </div>
                  <div className="flex gap-4">
                    <label htmlFor="register" className="font-medium">Matrícula:</label>
                    <input
                      id="register"
                      type="text"
                      value={register}
                      onChange={onRegisterChange}
                      className="rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      required
                    />
                  </div>
                  <div className="flex gap-4">
                    <label htmlFor="password" className="font-medium">Senha:</label>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={onPasswordChange}
                      className="rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      required
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-800 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Adicionar
                  </button>
                  <button
                    onClick={onClose}
                    type="button"
                    className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-
                    3 sm:w-auto sm:text-sm"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default CreateModal;