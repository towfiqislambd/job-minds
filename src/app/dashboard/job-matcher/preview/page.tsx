"use client";
import React from "react";
import image from "@/assets/images/dashboard/final_preview.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

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

      <div className="grid 3xl:grid-cols-2 gap-5 2xl:gap-6 items-start">
        {/* Left */}
        <div className="dashboard_card">
          <Image src={image} alt="final_preview" />
        </div>

        {/* Right */}
        <div className="dashboard_card">
          <h4 className="section_sub_title !mb-5">Cover Letter Preview</h4>

          <div className="p-5 bg-gray-100 shadow-box rounded text-sm lg:text-base">
            <p className="">
              James Carter <br /> 123 Maple Street <br /> Springfield, IL 62701
            </p>
            <br />
            <p>Dear Ms. Dawson</p>
            <br />
            <p>
              I am writing to express my enthusiasm for the Data Analyst
              position at BrightPath Analytics, as advertised on your careers
              page. With a solid foundation in data analysis, statistical
              modeling, and proficiency in business intelligence tools, I am
              eager to contribute to your mission of providing insightful,
              data-driven solutions to clients. In my previous role as a Junior
              Data Analyst at InsightEdge Solutions, I spent three years
              analyzing extensive datasets to uncover business trends, enhancing
              reporting systems with Power BI, and collaborating with
              cross-functional teams to optimize data workflows. A highlight of
              my experience was developing an automated reporting dashboard that
              cut monthly report preparation time by 40%.
            </p>
            <p>
              I am particularly drawn to BrightPath Analytics due to your
              commitment to innovation and your focus on generating actionable
              insights through advanced analytics. Your recent projects in the
              healthcare and logistics sectors have truly impressed me, and I am
              excited about the possibility of applying my SQL, Python, and
              Excel skills to support your expanding client base.
            </p>
            <br />
            <p>
              Thank you for considering my application. I have attached my
              resume for your review, and I would appreciate the opportunity to
              discuss how my skills and experiences align with your team's
              objectives. Please feel free to reach out to me at your
              convenience to arrange an interview.
            </p>
            <br />
            <p>Best regards,</p>
            <br />
            <p>James Carter</p>
          </div>
        </div>
      </div>

      {/* btns */}
      <div className="col-span-2 flex justify-end gap-3 xl:gap-5 items-center dashboard_card mt-5 2xl:mt-7">
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
          Save Documents
        </button>
      </div>
    </>
  );
};

export default page;
