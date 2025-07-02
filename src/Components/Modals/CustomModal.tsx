import React from "react";

type CustomModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const CustomModal: React.FC<CustomModalProps> = ({
  open,
  onClose,
  children,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-[1px]">
      {/* Clickable backdrop to close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative z-10 w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        {children}
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-primary-blue text-white rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CustomModal;
