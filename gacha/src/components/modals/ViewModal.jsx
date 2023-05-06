import React from "react";

function ViewModal({isOpen, student, onClose }) {
    if (!isOpen) return null;
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        &#8203;
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h2 className="text-lg font-medium leading-6 text-gray-900">
              Dados do Estudante
            </h2>
            <div className="mt-4">
              <div className="flex flex-col gap-2">
                <div className="flex gap-4">
                  <span className="font-medium">ID:</span>
                  <span>{student.id}</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-medium">Nome:</span>
                  <span>{student.name}</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-medium">Matrícula:</span>
                  <span>{student.registerStudent}</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-medium">Tiros:</span>
                  <span>{student.shots}</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-medium">Questionários feitos:</span>
                  <span>{student.number_quizzes}</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-medium">Questionários Acertados:</span>
                  <span>{student.number_quizzes_success}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={onClose}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-800 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm">
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewModal;
