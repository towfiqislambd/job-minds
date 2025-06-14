import React from "react";

type ButtonProps = {
  type?: "reset" | "submit";
  Txt: string | React.ReactNode;
  onClick?: () => void;
  className: string;
};

const Button: React.FC<ButtonProps> = ({ type, Txt, onClick, className }) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {Txt}
    </button>
  );
};

export default Button;
