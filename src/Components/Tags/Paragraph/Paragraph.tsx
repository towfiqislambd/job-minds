import { cn } from "@/lib/utils";
import React from "react";

type ParagraphProps = {
  Txt: string | React.ReactNode;
  className?: string;
};

const Paragraph: React.FC<ParagraphProps> = ({ Txt, className }) => {
  return (
    <p
      data-aos="fade-up"
      data-aos-delay="100"
      className={cn("default-design", className)}
    >
      {Txt}
    </p>
  );
};

export default Paragraph;
