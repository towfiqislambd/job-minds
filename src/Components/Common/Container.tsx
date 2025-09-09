import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1720px] mx-auto px-4 lg:px-5 xl:px-8 2xl:px-16 4xl:px-5">
      {children}
    </div>
  );
};

export default Container;
