import React from "react";

const page = ({ params }: any) => {
  const { template_id } = params;
  return (
    <div>
      <h2>{template_id}</h2>
    </div>
  );
};

export default page;
