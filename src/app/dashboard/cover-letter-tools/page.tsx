"use client";
import {
  useDownloadCoverLetter,
  useGenerateCoverLetter,
  useSaveCoverLetter,
} from "@/Hooks/api/dashboard_api";
import toast from "react-hot-toast";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CgSpinnerTwo } from "react-icons/cg";
import { MdContentCopy } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

interface FormData {
  job_title: string;
  company_name: string;
  company_address: string;
  position: string;
  job_description: string;
  education: string;
  skills: string;
  experience: string;
  length: "short" | "long";
  tone: "professional" | "normal";
}

const Page = () => {
  // States
  const [preview, setPreview] = useState<any>(null);
  const [letter, setLetter] = useState<any>(null);

  // Mutations
  const { mutateAsync: generateCoverLetterMutation, isPending } =
    useGenerateCoverLetter();
  const { mutate: saveCoverLetterMutation, isPending: isSaving } =
    useSaveCoverLetter();
  const { mutate: downloadCoverLetterMutation, isPending: isDownloading } =
    useDownloadCoverLetter();

  // Form Data
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setPreview(null);
    setLetter(null);

    await generateCoverLetterMutation(data, {
      onSuccess: (data: any) => {
        setPreview(data.data?.content?.replace(/\n/g, "<br />"));
        setLetter(data?.data);
      },
    });
  };

  // Func for save
  const handleSave = () => {
    if (!letter) {
      return toast.error("Please generate a cover letter first");
    }
    saveCoverLetterMutation({ cover_letter: letter?.content });
  };

  // Func for download docx
  const handleDownload = () => {
    if (!letter) {
      return toast.error("Please generate a cover letter first");
    }

    downloadCoverLetterMutation(
      { cover_letter: letter?.content },
      {
        onSuccess: (blob: any) => {
          const file = new Blob([blob], {
            type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          });
          const url = window.URL.createObjectURL(file);
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", `cover-letter.docx`);
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
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = preview;
    tempDiv.querySelectorAll("br").forEach(br => (br.outerHTML = "\n"));
    tempDiv.querySelectorAll("p").forEach(p => {
      p.outerHTML = `${p.innerText}\n\n`;
    });
    const formattedText = tempDiv.innerText || tempDiv.textContent || "";
    navigator.clipboard.writeText(formattedText);
    toast.success("Copied to clipboard");
  };

  // Function for send email
  const handleSendEmail = () => {
    const subject = encodeURIComponent(
      `Application for the post of ${letter?.job_position}`
    );
    const body = encodeURIComponent(letter?.content);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&su=${subject}&body=${body}`;

    window.open(gmailUrl, "_blank");
  };

  return (
    <section className="flex flex-col gap-5 md:gap-y-7 3xl:gap-y-10">
      {/* Upper Part */}
      <div className="flex flex-col">
        <h3 className="section_title">
          Create Professional Cover Letters in Minutes
        </h3>
        <p className="section_description">
          AI-powered cover letter generator with GPT-4 Turbo integration
        </p>
      </div>

      {/* Lower Part */}
      <div className="flex flex-col 3xl:flex-row gap-6">
        {/* Left - Collecting Data */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full 3xl:w-[700px] flex flex-col gap-y-1 md:gap-y-3 dashboard_card"
        >
          <div className="flex flex-col gap-y-1 md:gap-y-2">
            <h4 className="section_sub_title">Job details</h4>
            <p className="section_sub_description">
              This information will be displayed publicly so be careful what you
              share
            </p>
          </div>

          <div className="flex flex-col gap-4.5 md:gap-y-6">
            {/* Job Title */}
            <div>
              <label htmlFor="job_title" className="resume_label">
                Job Title*
              </label>
              <input
                type="text"
                id="job_title"
                placeholder="Web developer"
                className="resume_input"
                {...register("job_title", {
                  required: "Job title is required",
                })}
              />
              {errors.job_title && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.job_title.message}
                </p>
              )}
            </div>

            {/* Company Name */}
            <div>
              <label htmlFor="company_name" className="resume_label">
                Company Name*
              </label>
              <input
                type="text"
                id="company_name"
                placeholder="Google"
                className="resume_input"
                {...register("company_name", {
                  required: "Company name is required",
                })}
              />
              {errors.company_name && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.company_name.message}
                </p>
              )}
            </div>

            {/* Company Address */}
            <div>
              <label htmlFor="company_address" className="resume_label">
                Company Address*
              </label>
              <input
                type="text"
                id="company_address"
                placeholder="Google"
                className="resume_input"
                {...register("company_address", {
                  required: "Company Address is required",
                })}
              />
              {errors.company_address && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.company_address.message}
                </p>
              )}
            </div>

            {/* Position */}
            <div>
              <label htmlFor="position" className="resume_label">
                Position*
              </label>
              <input
                type="text"
                id="position"
                placeholder="Senior SEO Expert"
                className="resume_input"
                {...register("position", {
                  required: "Position is required",
                })}
              />
              {errors.position && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.position.message}
                </p>
              )}
            </div>

            {/* Job Description */}
            <div>
              <label htmlFor="job_description" className="resume_label">
                Job Description*
              </label>
              <textarea
                id="job_description"
                placeholder="Describe about the job..."
                className="resume_input !h-[100px]"
                {...register("job_description", {
                  required: "Job description is required",
                })}
              ></textarea>
              {errors.job_description && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.job_description.message}
                </p>
              )}
            </div>

            {/* Education */}
            <div>
              <label htmlFor="education" className="resume_label">
                Education*
              </label>
              <textarea
                id="education"
                placeholder="List your educational background..."
                className="resume_input !h-[100px]"
                {...register("education", {
                  required: "Education is required",
                })}
              ></textarea>
              {errors.education && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.education.message}
                </p>
              )}
            </div>

            {/* Key skills */}
            <div>
              <label htmlFor="skills" className="resume_label">
                Key Skills*
              </label>
              <textarea
                id="skills"
                placeholder="Describe your key skills"
                className="resume_input !h-[100px]"
                {...register("skills", {
                  required: "Key skills are required",
                })}
              ></textarea>
              {errors.skills && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.skills.message}
                </p>
              )}
            </div>

            {/* Experience */}
            <div>
              <label htmlFor="experience" className="resume_label">
                Experience*
              </label>
              <textarea
                id="experience"
                placeholder="Describe your experience"
                className="resume_input !h-[100px]"
                {...register("experience", {
                  required: "Experience is required",
                })}
              ></textarea>
              {errors.experience && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.experience.message}
                </p>
              )}
            </div>

            {/* Letter Length */}
            <div>
              <label htmlFor="length" className="resume_label">
                Letter Length*
              </label>
              <select
                id="length"
                className="resume_input"
                {...register("length", {
                  required: "Letter length is required",
                })}
              >
                <option value="">Select Length</option>
                <option value="Short">Short</option>
                <option value="Long">Long</option>
              </select>
              {errors.length && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.length.message}
                </p>
              )}
            </div>

            {/* Letter Type */}
            <div>
              <label htmlFor="tone" className="resume_label">
                Letter Type*
              </label>
              <select
                id="tone"
                className="resume_input"
                {...register("tone", {
                  required: "Letter type is required",
                })}
              >
                <option value="">Select Type</option>
                <option value="professional">Professional</option>
                <option value="normal">Normal</option>
              </select>
              {errors.tone && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.tone.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-y-10 items-center mt-5">
            <div className="flex flex-row gap-3 xl:gap-5 items-center ">
              <button
                type="button"
                onClick={() => {
                  reset();
                  setLetter(null);
                  setPreview(null);
                }}
                className="primary-btn"
              >
                Reset
              </button>

              <button
                disabled={isPending}
                type="submit"
                className={`primary-btn ${isPending && "!cursor-not-allowed"}`}
              >
                {isPending ? (
                  <div className="flex gap-2 items-center">
                    <CgSpinnerTwo className="animate-spin text-xl" />
                    <span>Generating....</span>
                  </div>
                ) : letter ? (
                  "Re-generate"
                ) : (
                  "Generate"
                )}
              </button>
            </div>
          </div>
        </form>

        {/* Right - Preview */}
        <div className="w-full grow max-h-[517px] lg:max-h-[700px] flex flex-col gap-y-3 dashboard_card">
          <h4 className="section_sub_title">Live Preview</h4>
          {isPending ? (
            <div className="w-full h-[550px] p-3 lg:p-6 bg-[#F8FAFB] space-y-4 lg:space-y-6 animate-pulse">
              <div className="h-4 w-32 bg-gray-200 rounded" />
              <div className="h-4 w-40 bg-gray-200 rounded" />
              <div className="h-14 w-2/3 bg-gray-200 rounded" />
              <div className="h-20 w-full bg-gray-200 rounded" />
              <div className="h-11 lg:h-14 w-full bg-gray-200 rounded" />
              <div className="h-4 w-28 bg-gray-200 rounded" />
              <div className="h-4 w-36 bg-gray-200 rounded" />
            </div>
          ) : preview ? (
            <div className="w-full outline-none h-[680x] p-3 rounded-lg text-[13px] lg:text-base text-gray-800 leading-[170%] lg:p-6 bg-[#F8FAFB] overflow-y-auto relative">
              <div dangerouslySetInnerHTML={{ __html: preview }} />

              {/* Copy to clipboard */}
              <button
                className="absolute top-3 lg:top-5 right-2 lg:right-5 size-8 lg:size-10 border border-gray-300 rounded-full grid place-items-center cursor-pointer"
                onClick={handleCopyToClipboard}
              >
                <MdContentCopy className="lg:text-lg text-gray-500" />
              </button>

              {/* Send email */}
              <button
                onClick={handleSendEmail}
                className="absolute top-3 lg:top-5 right-12 lg:right-[70px] size-8 lg:size-10 border border-gray-300 rounded-full grid place-items-center cursor-pointer"
              >
                <MdOutlineMarkEmailUnread className="lg:text-lg text-gray-500" />
              </button>
            </div>
          ) : (
            <div className="w-full outline-none h-[680px] p-6 bg-[#F8FAFB] flex justify-center items-center flex-col gap-2 lg:gap-3">
              <IoDocumentTextOutline className="text-5xl lg:text-7xl text-gray-500" />
              <p className="text-gray-500 font-medium text-sm lg:text-base">
                Generate Cover Letter
              </p>
            </div>
          )}

          <div className="flex gap-3 xl:gap-5 items-center mt-5">
            {/* Save btn */}
            <button
              disabled={isSaving}
              className={`primary-btn ${isSaving && "!cursor-not-allowed"}`}
              onClick={handleSave}
            >
              {isSaving ? (
                <div className="flex gap-2 items-center">
                  <CgSpinnerTwo className="animate-spin text-xl" />
                  <span>Saving....</span>
                </div>
              ) : (
                "Save"
              )}
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
                "Download"
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
