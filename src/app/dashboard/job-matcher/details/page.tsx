"use client";
import CoverLetterSuggestion from "@/Components/Pages/dashboardPages/JobMatcherPageComponents/CoverLetterSuggestion";
import MatchingChart from "@/Components/Pages/dashboardPages/JobMatcherPageComponents/MatchingChart";
import ResumeSuggestion from "@/Components/Pages/dashboardPages/JobMatcherPageComponents/ResumeSuggestion";
import { useRouter, useSearchParams } from "next/navigation";

const page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const rawData = searchParams.get("data");
  const jobData = rawData ? JSON.parse(decodeURIComponent(rawData)) : null;
  const jobDetails = [
    {
      id: 1,
      title: "Position Name",
      description: jobData?.job?.position_name
        ? jobData?.job?.position_name
        : "N/A",
    },
    {
      id: 2,
      title: "Company",
      description: jobData?.job?.company_name
        ? jobData?.job?.company_name
        : "N/A",
    },
    {
      id: 3,
      title: "Location",
      description: jobData?.job?.location ? jobData?.job?.location : "N/A",
    },
    {
      id: 4,
      title: "Deadline",
      description: jobData?.job?.deadline ? jobData?.job?.deadline : "N/A",
    },
    {
      id: 5,
      title: "Employment Type",
      description: jobData?.job?.employment_type
        ? jobData?.job?.employment_type
        : "N/A",
    },
    {
      id: 6,
      title: "Experience Level",
      description: jobData?.job?.experience_level
        ? jobData?.job?.experience_level
        : "N/A",
    },
  ];

  return (
    <>
      {/* Title */}
      <h3 className="section_title">AI-Powered Job Matching</h3>

      {/* Description */}
      <p className="section_description mb-7 3xl:mb-8">
        Let AI analyze your job fit and get personalized suggestions
      </p>

      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-5 2xl:gap-6">
        {/* Detected Job Details */}
        <div className="dashboard_card">
          <h4 className="section_sub_title !mb-5 md:!mb-8">
            Detected Job Details
          </h4>

          <div className="space-y-4">
            {jobDetails?.map(({ id, title, description }) => (
              <div
                key={id}
                className="flex gap-2 md:gap-0 text-sm md:text-base"
              >
                <p className="space-y-3 text-light-gray md:flex-1">{title}</p>
                <p className="md:flex-1">: </p>
                <p className="text-secondary-black font-medium flex-1 md:text-right">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Matching */}
        <MatchingChart data={jobData?.matched} />

        {/* Resume Suggestions */}
        <ResumeSuggestion data={jobData?.improvement_suggestions} />

        {/* Cover Letter Suggestions */}
        <CoverLetterSuggestion data={jobData?.cover_letter?.content} />

        {/* btns */}
        <div className="2xl:col-span-2 flex justify-end gap-3 xl:gap-5 items-center dashboard_card">
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

          {/* apply change */}
          <button
            onClick={() => router.push("/dashboard/job-matcher/preview")}
            className="primary-btn"
          >
            Apply Changes
          </button>
        </div>
      </div>
    </>
  );
};

export default page;
