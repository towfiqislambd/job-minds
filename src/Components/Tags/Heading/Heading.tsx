import { cn } from "@/lib/utils";
import React from "react";

type HeadingProps = {
  Txt: string | React.ReactNode;
  className?: string;
  Variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const Heading: React.FC<HeadingProps> = ({
  Txt,
  className,
  Variant = "h2",
}) => {
  const Component = Variant;

  return (
    <Component
      data-aos="fade-up"
      data-aos-delay="100"
      className={cn("", className)}
    >
      {Txt}
    </Component>
  );
};

export default Heading;
