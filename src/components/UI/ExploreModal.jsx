import React from "react";

const Modal = ({ title, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white p-[30px] rounded-[10px] w-[530px] h-[275px]">
        <h2 className="text-[24px] font-[500]">{title}</h2>
        <div className="flex flex-row"></div>
      </div>
    </div>
  );
};

export default Modal;
