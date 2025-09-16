import React from "react";
import { Loader } from "@/Components/Loader/Loader";

const loading = () => {
  return (
    <div className="h-screen flex justify-center items-center text-5xl">
      <Loader />
    </div>
  );
};

export default loading;
