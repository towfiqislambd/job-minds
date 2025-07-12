import React from "react";
import { CheckSvg, CrossSvg } from "../SvgContainer/SvgContainer";
const data = [
  {
    id: 1,
    title: "Enhance Data Analytics",
    description:
      "Proficiency in data analysis tools and techniques is essential.",
  },
  {
    id: 2,
    title: "Master Machine Learning",
    description:
      "Understanding machine learning algorithms is a key requirement.",
  },
  {
    id: 3,
    title: "Develop Mobile Applications",
    description: "Experience in mobile app development is highly valued.",
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

const CoverLetterSuggestion = () => {
  return (
    <section className="dashboard_card">
      <h4 className="section_sub_title !mb-5">Cover Letter Suggestions</h4>

      <div className="space-y-5">
        {data?.map(({ id, title, description }) => (
          <div key={id} className="border p-5 rounded-lg border-gray-100">
            <div className="flex justify-between items-center mb-1">
              <p className="section_sub_title !text-xl">{title}</p>
              <p className="flex gap-3 items-center">
                <span className="w-7.5 h-7.5 cursor-pointer grid place-items-center border rounded-full border-secondary-blue">
                  <CrossSvg />
                </span>
                <span className="w-7.5 h-7.5 cursor-pointer grid place-items-center border rounded-full border-secondary-blue">
                  <CheckSvg />
                </span>
              </p>
            </div>

            <p className="text-light-gray max-w-[500px]">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoverLetterSuggestion;
