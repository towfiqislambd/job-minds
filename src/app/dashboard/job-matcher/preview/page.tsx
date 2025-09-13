"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useExportPdf, useSaveResumeTemplate } from "@/Hooks/api/dashboard_api";
import { CgSpinnerTwo } from "react-icons/cg";

const page = () => {
  // Hook
  const router = useRouter();

  // State
  const [htmlData, setHtmlData] = useState<string>("");

  // Mutations
  const { mutate: downloadPdf, isPending: isDownloading } = useExportPdf();
  const { mutate: saveResumeMutation, isPending } = useSaveResumeTemplate();

  useEffect(() => {
    const storedData = sessionStorage.getItem("htmlData");
    if (storedData) {
      setHtmlData(JSON.parse(storedData));
    }
  }, []);

  // Func for download pdf
  const handleDownload = () => {
    downloadPdf(
      { html: htmlData },
      {
        onSuccess: (blob: any) => {
          const url = window.URL.createObjectURL(new Blob([blob]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", `updated-resume.pdf`);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        },
        onError: (error: any) => {
          console.error("Failed to download pdf:", error);
        },
      }
    );
  };

  return (
    <>
      {/* Title */}
      <h3 className="section_title">AI-Powered Job Matching</h3>

      {/* Description */}
      <p className="section_description mb-7 3xl:mb-8">
        Let AI analyze your job fit and get personalized suggestions
      </p>

      <iframe
        srcDoc={htmlData}
        className="w-full h-[1000px] border-none"
        title="Resume Preview"
      />

      {/* btns */}
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-3 md:gap-0 dashboard_card mt-5">
        {/* Back btn */}
        <button
          onClick={e => {
            e.preventDefault();
            router.back();
          }}
          className="secondary-btn"
        >
          Back
        </button>

        <div className="flex justify-end gap-3 xl:gap-5 items-center">
          {/* Save btn */}
          <button
            type="submit"
            disabled={isPending}
            onClick={() => saveResumeMutation({ html: htmlData })}
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
                <span className="inline-block animate-spin">⏳</span>{" "}
                Downloading
              </>
            ) : (
              "Download as pdf"
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default page;
