"use client";
import { CheckIconSvg } from "@/Components/SvgContainer/SvgContainer";

const Page = () => {
  return (
    <section className="space-y-5 2xl:space-y-6 3xl:space-y-7">
      <div>
        {/* Title */}
        <h3 className="section_title">LinkedIn Profile Optimizer</h3>

        {/* Description */}
        <p className="section_description">
          Enhance your professional presence with AI-powered suggestions .
        </p>
      </div>

      <div className="dashboard_card">
        <h5 className="section_sub_title !mb-5">Improvement Suggestion</h5>
        <div className="flex flex-wrap items-center gap-3 md:gap-5">
          <div>
            <button className="flex items-center gap-3 justify-center border text-light-gray text-sm border-alt-border rounded-full px-3 md:px-5 py-2 md:py-2.5 font-medium">
              Structure
              <span className="justify-center items-center rounded-full text-white bg-secondary-blue  font-semibold w-6 h-6 md:h-7 md:w-7 grid place-items-center">
                4
              </span>
            </button>
          </div>
          <div>
            <button className="flex items-center gap-3 justify-center border text-light-gray text-sm border-alt-border rounded-full px-3 md:px-5 py-2 md:py-2.5 font-medium">
              Keywords
              <span className="bg-[#FFA600] justify-center items-center rounded-full text-white  font-semibold w-6 h-6 md:h-7 md:w-7 grid place-items-center">
                4
              </span>
            </button>
          </div>
          <div className="">
            <button className="flex items-center gap-3 justify-center border text-light-gray text-sm border-alt-border rounded-full px-3 md:px-5 py-2 md:py-2.5 font-medium">
              Tone
              <span className="bg-[#F44336] justify-center items-center rounded-full text-white  font-semibold w-6 h-6 md:h-7 md:w-7 grid place-items-center">
                6
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col 2xl:flex-row gap-5 2xl:gap-6">
        {/* Left */}
        <div className="dashboard_card">
          <h5 className="section_sub_title !mb-3 md:!mb-5">Current Profile</h5>
          <p className="p-3 md:p-6 bg-cream-white rounded-lg text-dark-blue text-xs font-normal leading-[164%]">
            As a passionate Data Analyst with over three years of experience, I
            thrive on transforming complex data into actionable insights that
            drive business success. My journey began at InsightEdge Solutions,
            where I honed my skills in data analysis and statistical modeling,
            working closely with cross-functional teams to enhance data
            workflows and reporting systems. At Insight Edge, I developed an
            automated reporting dashboard that significantly reduced the time
            spent on monthly report preparation by 40%. This project not only
            showcased my technical abilities but also my commitment to improving
            efficiency and delivering value to stakeholders. I am proficient in
            a variety of business intelligence tools, including Power BI, SQL,
            and Excel, which I leverage to analyze extensive datasets and
            uncover meaningful business trends. What excites me most about the
            field of data analytics is the opportunity to contribute to
            innovative projects that have a real-world impact. I am particularly
            drawn to organizations that prioritize data-driven decision-making
            and strive to push the boundaries of what analytics can achieve. My
            interest in advanced analytics has led me to explore various
            sectors, including healthcare and logistics, where I believe data
            can play a transformative role I am eager to connect with
            like-minded professionals and organizations that value analytical
            thinking and creativity. Whether it's collaborating on projects,
            sharing insights, or exploring new opportunities, I am always open
            to discussions that foster growth and innovation in the data
            analytics space.In addition to my technical skills, I bring a strong
            work ethic, a collaborative spirit, and a passion for continuous
            learning. I am excited about the future of data analytics and look
            forward to contributing to projects that make a difference. Let's
            connect and explore how we can leverage data to drive success
            together!
          </p>
        </div>

        {/* Right */}
        <div className="dashboard_card">
          <h5 className="section_sub_title !mb-3 md:!mb-5">AI-Enhanced Profile</h5>
          <p className="p-3 md:p-6 bg-cream-white rounded-lg text-dark-blue text-xs font-normal leading-[164%]">
            As a passionate Data Analyst with over three years of experience, I
            thrive on transforming complex data into actionable insights that
            drive business success. My journey began at InsightEdge Solutions,
            where I honed my skills in data analysis and statistical modeling,
            working closely with cross-functional teams to enhance data
            workflows and reporting systems. At Insight Edge, I developed an
            automated reporting dashboard that significantly reduced the time
            spent on monthly report preparation by 40%. This project not only
            showcased my technical abilities but also my commitment to improving
            efficiency and delivering value to stakeholders. I am proficient in
            a variety of business intelligence tools, including Power BI, SQL,
            and Excel, which I leverage to analyze extensive datasets and
            uncover meaningful business trends. What excites me most about the
            field of data analytics is the opportunity to contribute to
            innovative projects that have a real-world impact. I am particularly
            drawn to organizations that prioritize data-driven decision-making
            and strive to push the boundaries of what analytics can achieve. My
            interest in advanced analytics has led me to explore various
            sectors, including healthcare and logistics, where I believe data
            can play a transformative role I am eager to connect with
            like-minded professionals and organizations that value analytical
            thinking and creativity. Whether it's collaborating on projects,
            sharing insights, or exploring new opportunities, I am always open
            to discussions that foster growth and innovation in the data
            analytics space.In addition to my technical skills, I bring a strong
            work ethic, a collaborative spirit, and a passion for continuous
            learning. I am excited about the future of data analytics and look
            forward to contributing to projects that make a difference. Let's
            connect and explore how we can leverage data to drive success
            together!
          </p>
        </div>
      </div>

      <div className="dashboard_card flex gap-5 flex-col 2xl:flex-row justify-between items-center">
        <div className="flex items-center gap-2">
          <CheckIconSvg />
          <p className="lg:text-lg text-dark-blue leading-[164%]">
            Profile optimization complete!
            <span className="text-secondary-blue"> 18 improvements </span>
            suggested
          </p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end gap-3 3xl:gap-5 items-center">
          {/* Copy btn */}
          <button className="secondary-btn">Copy</button>

          {/* Download btn */}
          <button className="primary-btn">Download as DOCX</button>
        </div>
      </div>
    </section>
  );
};

export default Page;
