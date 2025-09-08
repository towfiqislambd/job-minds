"use client";
import { DownloadSvg } from "@/Components/SvgContainer/SvgContainer";
import { useJobMatching } from "@/Hooks/api/dashboard_api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CgSpinnerTwo } from "react-icons/cg";

type formData = {
  job_description: string;
  file: FileList;
};

const page = () => {
  const router = useRouter();
  const { mutateAsync: jobMatchingMutation, isPending } = useJobMatching();
  const [imageFile, setImageFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();

  const onSubmit = async (data: formData) => {
    if (!imageFile) return;
    const formData = new FormData();
    formData.append("job_description", data.job_description);
    formData.append("file", imageFile);
    const response = await jobMatchingMutation(formData);
    const jobData = response?.data;
    const encodedData = encodeURIComponent(JSON.stringify(jobData));
    router.push(`/dashboard/job-matcher/details?data=${encodedData}`);
  };

  return (
    <>
      {/* Title */}
      <h3 className="section_title">AI-Powered Job Matching</h3>

      {/* Description */}
      <p className="section_description mb-5 md:mb-7 3xl:mb-8">
        Let AI analyze your job fit and get personalized suggestions
      </p>

      <div className="dashboard_card">
        <h4 className="section_sub_title">Import Job Details</h4>

        <p className="section_sub_description text-lg md:!mt-3 !mb-5 md:!mb-7">
          Paste the full job description to get personalized suggestions
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-3 md:space-y-5"
        >
          {/* Write Job Description */}
          <div>
            <label htmlFor="job_description" className="resume_label">
              Job Details
            </label>
            <textarea
              rows={7}
              placeholder="Paste job description here....... "
              id="job_description"
              className="resume_input"
              {...register("job_description", {
                required: "Job Description is required",
              })}
            ></textarea>
            {errors.job_description && (
              <p className="text-sm text-red-500 mt-1">
                {errors.job_description.message}
              </p>
            )}
          </div>

          <div className="flex justify-center gap-5 items-center">
            <p className="border-b border-gray-200 flex-1"></p>
            <p className="text-gray-300 font-medium">OR</p>
            <p className="border-b border-gray-200 flex-1"></p>
          </div>

          {/* Upload PDF */}
          <div>
            <label
              htmlFor="file"
              className="border block w-full hover:bg-gray-100 duration-200 transition-all rounded-lg border-gray-100 text-center cursor-pointer py-10 bg-gray-50"
            >
              <div className="flex flex-col gap-3 justify-center items-center">
                <DownloadSvg />
                <p className="text-gray-500 text-sm md:text-base">
                  Click to upload your resume as PDF
                </p>
              </div>

              <input
                type="file"
                className="hidden"
                id="file"
                accept="application/pdf"
                {...register("file", {
                  required: "PDF is required",
                  onChange: e => {
                    const file = e.target.files[0];
                    if (file) {
                      setImageFile(file);
                    }
                  },
                })}
              />
            </label>
            {errors.file && (
              <p className="text-sm text-red-500 mt-1.5">
                {errors.file.message}
              </p>
            )}
            {imageFile && (
              <p className="text-sm text-green-500 mt-3">{imageFile?.name}</p>
            )}
          </div>

          {/* Analyze btn */}
          <div className="flex justify-end items-center mt-7">
            <button
              disabled={isPending}
              className={`primary-btn ${isPending && "!cursor-not-allowed"}`}
            >
              {isPending ? (
                <div className="flex gap-2 items-center">
                  <CgSpinnerTwo className="animate-spin text-xl" />
                  <span>Analyzing Job....</span>
                </div>
              ) : (
                "Analyze Job"
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
