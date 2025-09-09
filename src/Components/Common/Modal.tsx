"use client";
import React, { ReactNode, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
};

const Modal = ({ open, onClose, children, className }: ModalProps) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-[1px]">
      <div className="absolute inset-0" onClick={onClose}></div>
      <div
        className={`relative z-10 w-[calc(100vw-30px)] max-w-[550px] max-h-[calc(100vh-50px)] overflow-y-auto py-10 px-4 lg:px-5 bg-white rounded-lg shadow-lg ${className}`}
      >
        {/* Modal Content */}
        {children}

        {/* Close btn */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 cursor-pointer grid place-items-center"
        >
          <RxCross2 className="text-xl text-black" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
