import React, { useState } from "react";
import "./PopupConfirmacao.css";

const PopupConfirmacao = ({ children, onConfirm, onCancel }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleConfirm = () => {
    setIsOpen(false);
    onConfirm();
  };

  const handleCancel = () => {
    setIsOpen(false);
    onCancel();
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Exibir PopupConfirmacao</button>
      {isOpen && (
        <div className="PopupConfirmacao">
          <div className="PopupConfirmacao-content">
            {children}
            <div className="PopupConfirmacao-actions">
              <button onClick={handleConfirm}>Confirmar</button>
              <button onClick={handleCancel}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupConfirmacao;
