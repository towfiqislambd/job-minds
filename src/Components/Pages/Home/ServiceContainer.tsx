import ServiceCard from "@/Components/Cards/ServiceCard";
import Heading from "@/Components/Tags/Heading/Heading";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
import React from "react";
import defaultFrame from "../../../assets/images/home/default-service.png";
import Container from "@/Components/Common/Container";

const ServiceContainer = () => {
  const ServiceContainerArr = [
    {
      title: "Quickly create a job-ready resume with Job Minds!",
      descreption:
        "Use AI to make your resume ATS-friendly, boost your score, and add job-specific keywords in just a few clicks.",
      btnTxt: "Create My Resume",
    },
    {
      title: "Create Smart Cover Letters Instantly with AI",
      descreption:
        "Stop stressing over that blank page! Grab custom cover letters made just for your job apps in no time.",
      btnTxt: "Create Letter",
    },
    {
      title:
        "Here are some fun questions you could throw out during a job interview.",
      descreption:
        "Quickly fill out applications with our AI tool, making sure your entries are spot on every time!",
      btnTxt: "Ask your question.",
    },
    {
      title: "AI That Matches You With the Right Job—In Seconds",
      descreption:
        "Check out job suggestions just for you, based on what you’re good at and what you love. No more boring job searches!",
      btnTxt: "Analyze Job Fit",
    },
    {
      title: "Your LinkedIn, Leveled Up by AI.",
      descreption:
        "Our AI builds tailored cover letters that highlight your strengths, align with job descriptions, and save you hours of writing.",
      btnTxt: "Scan My LinkedIn Now",
    },
  ];

  return (
    <section
      id="ai-tool"
      className="-mt-10 lg:-mt-0 pb-8 md:pb-12 xl:pb-20 3xl:pb-[120px]"
    >
      <Container>
        <div className="flex flex-col gap-8.5 xl:gap-y-[60px]">
          <div className="flex flex-col gap-y-2 lg:gap-y-4.5 items-center">
            <Heading
              className="text-blue-black w-full md:w-11/12 mx-auto max-w-[1298px] text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-semibold leading-[132%] tracking-[-0.72%] text-center"
              Txt={
                <>
                  Simplify Every Step of your Job search with{" "}
                  <span className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-semibold lg:leading-[132%] tracking-[-0.8px] text-center bg-[linear-gradient(90deg,#21489F_0%,#0184FF_100%)] bg-clip-text text-transparent">
                    Job Minds
                  </span>
                </>
              }
            />
            <Paragraph
              Txt="Emotional Intelligence Integration"
              className="text-center md:text-lg lg:text-xl xl:text-2xl xl:leading-[164%] font-medium text-light-gray"
            />
          </div>
          {ServiceContainerArr.map((item, idx) => {
            return (
              <ServiceCard
                key={idx}
                title={item.title}
                descreption={item.descreption}
                btnTxt={item.btnTxt}
                bgImg={defaultFrame.src}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ServiceContainer;
