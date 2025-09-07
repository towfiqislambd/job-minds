"use client";
import {
  useDownloadDoc,
  useLinkedinOptimizer,
} from "@/Hooks/api/dashboard_api";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { CgSpinnerTwo } from "react-icons/cg";
import { IoDocumentTextOutline } from "react-icons/io5";

type formData = {
  profile_summary: string;
};

const Page = () => {
  // States
  const [optimizedData, setOptimizedData] = useState<string>("");
  const [doc, setDoc] = useState<string>("");

  // Mutations
  const { mutateAsync: submitDataMutation, isPending } = useLinkedinOptimizer();
  const { mutate: downloadDocMutation, isPending: isDownloading } =
    useDownloadDoc();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();

  const onSubmit = async (data: formData) => {
    await submitDataMutation(data, {
      onSuccess: (data: any) => {
        setOptimizedData(
          data?.data?.optimized_profile_summary?.replace(/\n/g, "<br />")
        );
        setDoc(data?.data?.optimized_profile_summary);
      },
    });
  };

  // Func for download docx
  const handleDownload = () => {
    if (!doc) {
      return toast.error("Please generate linkedin optimizer");
    }

    downloadDocMutation(
      { profile_summary: doc },
      {
        onSuccess: (blob: any) => {
          const file = new Blob([blob], {
            type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          });
          const url = window.URL.createObjectURL(file);
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", `linkedin-optimizer.docx`);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        },
        onError: (error: any) => {
          console.error("Failed to download docx:", error);
        },
      }
    );
  };

  // Func for copy to clipboard
  const handleCopyToClipboard = () => {
    if (!doc) {
      return toast.error("Please generate linkedin optimizer");
    }

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = doc;
    tempDiv.querySelectorAll("p").forEach(p => {
      p.outerHTML = `${p.innerText}\n\n`;
    });
    const formattedText = tempDiv.innerText || tempDiv.textContent || "";
    navigator.clipboard.writeText(formattedText);
    toast.success("Copied to clipboard");
  };

  return (
    <>
      <div className="mb-7 3xl:mb-10">
        {/* Title */}
        <h3 className="section_title">LinkedIn Profile Optimizer</h3>

        {/* Description */}
        <p className="section_description">
          Enhance your professional presence with AI-powered suggestions.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-7">
        {/* Left - Input */}
        <div className="dashboard_card">
          <h5 className="section_sub_title !mb-3.5 3xl:!mb-5">
            Current Profile
          </h5>

          <form onSubmit={handleSubmit(onSubmit)}>
            <textarea
              placeholder="Paste Your Current LinkedIn Profile Content"
              className="resume_input h-[430px] bg-gray-50 !leading-[164%] !text-sm !text-gray-700"
              id="profile_summary"
              {...register("profile_summary", {
                required: "You must provide your profile information here",
              })}
            ></textarea>
            {errors.profile_summary && (
              <p className="text-sm text-red-500 mt-1">
                {errors.profile_summary.message}
              </p>
            )}

            <button
              type="submit"
              disabled={isPending}
              className={`primary-btn mt-5 ${
                isPending && "!cursor-not-allowed"
              }`}
            >
              {isPending ? (
                <div className="flex gap-2 items-center">
                  <CgSpinnerTwo className="animate-spin text-xl" />
                  <span>Analyzing....</span>
                </div>
              ) : (
                "Analyze Profile"
              )}
            </button>
          </form>
        </div>

        {/* Right - Output */}
        <div className="dashboard_card">
          <h5 className="section_sub_title !mb-3.5 3xl:!mb-5">
            AI-Enhanced Profile
          </h5>

          <div>
            <p className="h-[430px] rounded-lg bg-gray-50 overflow-y-auto p-5 leading-[164%] text-sm text-gray-700">
              {isPending ? (
                <div className="w-full h-full bg-[#F8FAFB] space-y-6 animate-pulse">
                  <div className="h-4 w-40 bg-gray-200 rounded" />
                  <div className="h-4 w-60 bg-gray-200 rounded" />
                  <div className="h-14 w-1/3 bg-gray-200 rounded" />
                  <div className="h-14 w-2/3 bg-gray-200 rounded" />
                  <div className="h-14 w-full bg-gray-200 rounded" />
                  <div className="h-4 w-28 bg-gray-200 rounded" />
                  <div className="h-4 w-36 bg-gray-200 rounded" />
                </div>
              ) : optimizedData ? (
                <div dangerouslySetInnerHTML={{ __html: optimizedData }} />
              ) : (
                <div className="w-full outline-none h-full p-6 bg-[#F8FAFB] flex justify-center items-center flex-col gap-3">
                  <IoDocumentTextOutline className="text-6xl text-gray-500" />
                  <p className="text-gray-500 font-medium">
                    Generate AI Enhanced Content
                  </p>
                </div>
              )}
            </p>

            <div className="flex flex-wrap justify-center md:justify-end gap-3 3xl:gap-5 items-center mt-5">
              {/* Copy btn */}
              <button onClick={handleCopyToClipboard} className="secondary-btn">
                Copy
              </button>

              {/* Download btn */}
              <button
                disabled={isDownloading}
                className={`primary-btn ${
                  isDownloading && "!opacity-80 !cursor-not-allowed"
                }`}
                onClick={handleDownload}
              >
                {isDownloading ? (
                  <div className="flex gap-2 items-center">
                    <span className="inline-block animate-spin">⏳</span>
                    <span>Downloading....</span>
                  </div>
                ) : (
                  " Download as DOCX"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
