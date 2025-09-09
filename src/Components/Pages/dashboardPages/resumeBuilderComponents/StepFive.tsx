import { useExportPdf, useSaveResumeTemplate } from "@/Hooks/api/dashboard_api";
import React from "react";
import { CgSpinnerTwo } from "react-icons/cg";
const StepFive = ({ step, setStep, template }: any) => {
  const { mutate: saveResumeMutation, isPending } = useSaveResumeTemplate();
  const { mutate: downloadPdf, isPending: isDownloading } = useExportPdf();

  const handleDownload = () => {
    downloadPdf(template, {
      onSuccess: (blob: any) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `resume.pdf`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      },
      onError: (error: any) => {
        console.error("Failed to download pdf:", error);
      },
    });
  };

  return (
    <>
      {/* Title */}
      <h4 className="text-dark-blue text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl font-semibold leading-[132%] tracking-[-0.319px] mb-5 3xl:mb-7">
        Check out your <span className="text-blue-500">resume</span>.
      </h4>

      {/* Preview Resume */}
      <iframe
        srcDoc={template?.html}
        className="w-full h-[1000px] border-none"
        title="Resume Preview"
      />

      <div className="flex flex-col md:flex-row md:justify-between items-center gap-3 md:gap-0 dashboard_card">
        {/* Back btn */}
        <button
          onClick={() => setStep(step - 1)}
          className="secondary-btn hidden lg:block"
        >
          Back
        </button>

        <div className="flex justify-end gap-3 xl:gap-5 items-center">
          {/* Save btn */}
          <button
            type="submit"
            disabled={isPending}
            onClick={() => saveResumeMutation({ html: template?.html })}
            className={`secondary-btn ${isPending && "!cursor-not-allowed"}`}
          >
            {isPending ? (
              <div className="flex gap-2 items-center">
                <CgSpinnerTwo className="animate-spin text-xl" />
                <span>Saving....</span>
              </div>
            ) : (
              "Save"
            )}
          </button>

          {/* pdf btn */}
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className={`primary-btn !normal-case ${
              isDownloading && "opacity-80 !cursor-not-allowed"
            }`}
          >
            {isDownloading ? (
              <>
                <span className="inline-block animate-spin">⏳</span> Exporting
              </>
            ) : (
              "Export as pdf"
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default StepFive;
