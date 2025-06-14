import React from "react";

type ButtonProps = {
  type?: "reset" | "submit" | "button";
  Txt: string | React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className: string;
};

const Button: React.FC<ButtonProps> = ({
  type = "button",
  Txt,
  onClick,
  className,
}) => {
  return (
    <div data-aos="fade-up" data-aos-delay="100">
      <button className={className} onClick={onClick} type={type}>
        {Txt}
      </button>
    </div>
  );
};

export default Button;
