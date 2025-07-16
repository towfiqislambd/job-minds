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
      <h4 className="section_sub_title !mb-3 lg:!mb-5">
        Cover Letter Suggestions
      </h4>

      <div className="space-y-3 lg:space-y-5">
        {data?.map(({ id, title, description }) => (
          <div key={id} className="border p-4 rounded-lg border-gray-100">
            <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-3 md:gap-5">
              <div>
                <p className="section_sub_title !text-base lg:!text-lg 3xl:!text-xl">
                  {title}
                </p>
                <p className="text-light-gray text-sm lg:text-base">
                  {description}
                </p>
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

export default CoverLetterSuggestion;
