import React from "react";
const StepFive = ({ step, setStep, template }: any) => {
  return (
    <div>
      {/* Title */}
      <h4 className="text-dark-blue text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl font-semibold leading-[132%] tracking-[-0.319px] mb-5 3xl:mb-7">
        Check out your <span className="text-blue-500">resume</span>.
      </h4>

      {/* Preview Resume */}
      <iframe
        srcDoc={template}
        className="w-full h-[1000px] border-none"
        title="Resume Preview"
      />

      {/* <iframe
        src={`${process.env.NEXT_PUBLIC_SITE_URL}/${template}`}
        className="w-full h-[600px]"
        title="PDF Preview"
      /> */}

      <div className="flex flex-col md:flex-row md:justify-between items-center gap-3 md:gap-0 dashboard_card">
        {/* Back btn */}
        <button onClick={() => setStep(step - 1)} className="secondary-btn">
          Back
        </button>

        <div className="flex justify-end gap-3 xl:gap-5 items-center">
          {/* Save btn */}
          <button className="secondary-btn">Save</button>

          {/* pdf btn */}
          <button className="primary-btn lowercase">Export as pdf</button>
        </div>
      </div>
    </div>
  );
};

export default StepFive;
