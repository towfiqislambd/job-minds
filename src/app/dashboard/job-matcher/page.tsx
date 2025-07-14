"use client";
import { DownloadSvg } from "@/Components/SvgContainer/SvgContainer";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

type formData = {
  job_details: string;
  photo: string;
};

const page = () => {
  const router = useRouter();
  const [imageFile, setImageFile] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();

  const onSubmit = async (data: formData) => {
    console.log(data);
    router.push("/dashboard/job-matcher/details");
  };
  return (
    <>
      {/* Title */}
      <h3 className="section_title">AI-Powered Job Matching</h3>

      {/* Description */}
      <p className="section_description mb-7 3xl:mb-8">
        Let AI analyze your job fit and get personalized suggestions
      </p>

      <div className="shadow-box p-7 bg-white rounded-lg">
        <h4 className="section_sub_title">Import Job Details</h4>

        <p className="section_sub_description text-lg !mt-3 !mb-7">
          Paste a job listing URL or the full job description to get
          personalized suggestions
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Write Job Description */}
          <div>
            <label htmlFor="job_details" className="resume_label">
              Job Details
            </label>
            <textarea
              rows={4}
              placeholder="Paste job description or URL here....... "
              id="job_details"
              className="resume_input"
              {...register("job_details", {
                required: "Job Description is required",
              })}
            ></textarea>
            {errors.job_details && (
              <p className="text-sm text-red-500 mt-1">
                {errors.job_details.message}
              </p>
            )}
          </div>

          <div className="flex justify-center gap-5 items-center">
            <p className="border-b border-gray-200 flex-1"></p>
            <p className="text-gray-300 font-medium">OR</p>
            <p className="border-b border-gray-200 flex-1"></p>
          </div>

          {/* Upload Job Description */}
          <div>
            <label
              htmlFor="upload_job_desc"
              className="border block w-full hover:bg-gray-100 duration-200 transition-all rounded-lg border-gray-200 text-center cursor-pointer py-10"
            >
              <div className="flex flex-col gap-3 justify-center items-center">
                <DownloadSvg />
                <p className="text-gray-500">
                  Click to upload your description PDF
                </p>
              </div>

              <input
                type="file"
                className="hidden"
                id="upload_job_desc"
                accept="application/pdf"
                {...register("photo", {
                  required: "Photo is required",
                  onChange: e => {
                    const file = e.target.files[0].name;
                    if (file) {
                      setImageFile(file);
                    }
                  },
                })}
              />
            </label>
            {errors.photo && (
              <p className="text-sm text-red-500 mt-1.5">
                {errors.photo.message}
              </p>
            )}
            {imageFile && (
              <p className="text-sm text-green-500 mt-3">{imageFile}</p>
            )}
          </div>

          {/* btn */}
          <div className="flex justify-end items-center mt-7">
            <button className="primary-btn">Analyze Job</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
