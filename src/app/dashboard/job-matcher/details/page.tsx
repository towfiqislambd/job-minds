"use client";
import CoverLetterSuggestion from "@/Components/JobMatcherPage/CoverLetterSuggestion";
import MatchingChart from "@/Components/JobMatcherPage/MatchingChart";
import ResumeSuggestion from "@/Components/JobMatcherPage/ResumeSuggestion";
import { useRouter } from "next/navigation";

const data = [
  {
    id: 1,
    title: "Job Details",
    description: "Senior Frontend Developer",
  },
  {
    id: 2,
    title: "Company",
    description: "Tech Solutions Inc.",
  },
  {
    id: 3,
    title: "Location",
    description: "San Francisco, CA",
  },
  {
    id: 4,
    title: "Interview Date",
    description: " March 15, 2023",
  },
  {
    id: 5,
    title: "Employment Type",
    description: "Full-time",
  },
  {
    id: 6,
    title: "Experience Level",
    description: "Senior (5+ years)",
  },
];

const page = () => {
  const router = useRouter();

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
          <h4 className="section_sub_title !mb-8">Detected Job Details</h4>

          <div className="space-y-4">
            {data?.map(({ id, title, description }) => (
              <div key={id} className="flex">
                <p className="space-y-3 text-light-gray flex-1">{title}</p>
                <p className="flex-1">:</p>
                <p className="text-secondary-black font-medium flex-1 text-right">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Matching */}
        <MatchingChart />

        {/* Resume Suggestions */}
        <ResumeSuggestion />

        {/* Cover Letter Suggestions */}
        <CoverLetterSuggestion />

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
