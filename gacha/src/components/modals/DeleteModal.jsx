import React from "react";

function ModalDelete({ isOpen, onClose, onDelete }) {
  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
        <div className="bg-white rounded-lg overflow-hidden shadow-xl p-4 mx-2">
          <div className="text-xl font-semibold mb-4">Excluir item</div>
          <div className="text-gray-600 mb-8">
            Tem certeza que deseja excluir este item? Essa ação não pode ser
            desfeita.
          </div>
          <div className="flex justify-end">
            <button
              className="px-4 py-2 bg-white text-gray-500 hover:text-gray-700 mr-2"
              onClick={onClose}>
              Cancelar
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white hover:bg-red-600"
              onClick={onDelete}>
              Excluir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalDelete;
