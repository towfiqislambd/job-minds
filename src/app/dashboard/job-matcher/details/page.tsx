"use client";
import CoverLetterSuggestion from "@/Components/Pages/dashboardPages/JobMatcherPageComponents/CoverLetterSuggestion";
import MatchingChart from "@/Components/Pages/dashboardPages/JobMatcherPageComponents/MatchingChart";
import ResumeSuggestion from "@/Components/Pages/dashboardPages/JobMatcherPageComponents/ResumeSuggestion";
import { useApplyChangesJobMatcher } from "@/Hooks/api/dashboard_api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CgSpinnerTwo } from "react-icons/cg";

const page = () => {
  const { mutateAsync: applyChangesMutation, isPending } =
    useApplyChangesJobMatcher();
  const router = useRouter();
  const [jobData, setJobData] = useState<any>({});
  const [improvement_suggestions, setImprovementSuggestions] = useState<any>(
    []
  );
  useEffect(() => {
    const storedData = sessionStorage.getItem("jobData");
    if (storedData) {
      setJobData(JSON.parse(storedData));
    }
  }, []);

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

  const data = {
    html: jobData?.html,
    resume_data: jobData?.resume_data,
    improvement_suggestions: improvement_suggestions,
  };

  const handleApplyChanges = async () => {
    console.log(improvement_suggestions);
    if (improvement_suggestions.length === 0) {
      return toast.error("Please select resume suggestions!");
    }
    const response = await applyChangesMutation(data);
    const htmlData = response?.data?.html;
    sessionStorage.setItem("htmlData", JSON.stringify(htmlData));
    router.push("/dashboard/job-matcher/preview");
  };

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
        <ResumeSuggestion
          setImprovementSuggestions={setImprovementSuggestions}
          data={jobData?.improvement_suggestions}
        />

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

          {/* Apply change btn */}
          <button
            disabled={isPending}
            onClick={handleApplyChanges}
            className={`primary-btn ${isPending && "!cursor-not-allowed"}`}
          >
            {isPending ? (
              <div className="flex gap-2 items-center">
                <CgSpinnerTwo className="animate-spin text-xl" />
                <span>Please wait...</span>
              </div>
            ) : (
              " Apply Changes"
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default page;
