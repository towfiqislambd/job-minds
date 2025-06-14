import Heading from "@/Components/Tags/Heading/Heading";
import React from "react";

const page = () => {
  return (
    <form className="container w-full h-screen flex items-center justify-center">
      <div className="w-auto px-[130px] h-auto py-[160px] bg-prmiray-off-blue rounded-[50px] flex flex-col gap-y-15  ">
        <Heading
          Txt={
            <>
              Get Hired Faster with{" "}
              <span className="bg-[linear-gradient(90deg,#21489f_0%,#0184ff_100%)] bg-clip-text text-transparent">
                Jobminds
              </span>{" "}
            </>
          }
          Variant="h2"
          className="auth-heading"
        />
        <div></div>
      </div>
    </form>
  );
};

export default page;
