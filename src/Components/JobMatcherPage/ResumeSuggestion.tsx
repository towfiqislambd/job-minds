import React from "react";
import { CheckSvg, CrossSvg } from "../SvgContainer/SvgContainer";
const data = [
  {
    id: 1,
    title: "Add Cloud Skills",
    description: "The job requires expertise in cloud technologies.",
  },
  {
    id: 2,
    title: "Enhance Data Analytics",
    description:
      "Proficiency in analyzing and interpreting complex data sets is essential.",
  },
  {
    id: 3,
    title: "Develop UI/UX Designs",
    description:
      "Proficiency in analyzing and interpreting complex data sets is essential.",
  },
  {
    id: 4,
    title: "Implement Cybersecurity Measures",
    description:
      "Strong skills in creating user-friendly interfaces and enhancing user experience.",
  },
  {
    id: 5,
    title: "Master Agile Methodologies",
    description:
      "Experience with agile frameworks to improve project efficiency and collaboration.",
  },
  {
    id: 6,
    title: "Optimize Machine Learning Models",
    description:
      "Ability to refine and enhance machine learning algorithms for better performance.",
  },
];

const ResumeSuggestion = () => {
  return (
    <section className="dashboard_card">
      <h4 className="section_sub_title !mb-5">Resume Suggestions</h4>

      <div className="space-y-5">
        {data?.map(({ id, title, description }) => (
          <div key={id} className="border p-4 rounded-lg border-gray-100">
            <div className="flex justify-between items-start gap-5">
              <div>
                <p className="section_sub_title !text-lg 3xl:!text-xl">{title}</p>
                <p className="text-light-gray">{description}</p>
              </div>
              
              <p className="flex gap-3 items-center">
                <span className="w-7.5 h-7.5 cursor-pointer grid place-items-center border rounded-full border-secondary-blue">
                  <CrossSvg />
                </span>
                <span className="w-7.5 h-7.5 cursor-pointer grid place-items-center border rounded-full border-secondary-blue">
                  <CheckSvg />
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResumeSuggestion;
