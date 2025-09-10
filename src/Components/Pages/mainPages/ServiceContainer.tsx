import React from "react";
import f1 from "@/assets/f1.png";
import f2 from "@/assets/f2.png";
import f3 from "@/assets/f3.png";
import f4 from "@/assets/f4.png";
import Container from "@/Components/Common/Container";
import Heading from "@/Components/Tags/Heading/Heading";
import ServiceCard from "@/Components/Cards/ServiceCard";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";

const ServiceContainerArr = [
  {
    title: "Quickly create a job-ready resume with Job Minds!",
    description:
      "Use AI to make your resume ATS-friendly, boost your score, and add job-specific keywords in just a few clicks.",
    btnTxt: "Create My Resume",
    btnUrl: "/dashboard/resume-builder",
    image: f1,
  },
  {
    title: "Create Smart Cover Letters Instantly with AI",
    description:
      "Stop stressing over that blank page! Grab custom cover letters made just for your job apps in no time.",
    btnTxt: "Create Letter",
    btnUrl: "dashboard/cover-letter-tools",
    image: f2,
  },
  {
    title:
      "Here are some fun questions you could throw out during a job interview.",
    description:
      "Quickly fill out applications with our AI tool, making sure your entries are spot on every time!",
    btnTxt: "Ask your question.",
    btnUrl: "dashboard/interview-coach",
    image: f3,
  },
  {
    title: "AI That Matches You With the Right Job—In Seconds",
    description:
      "Check out job suggestions just for you, based on what you’re good at and what you love. No more boring job searches!",
    btnTxt: "Analyze Job Fit",
    btnUrl: "dashboard/job-matcher",
    image: f4,
  },
  {
    title: "Your LinkedIn, Leveled Up by AI.",
    description:
      "Our AI builds tailored cover letters that highlight your strengths, align with job descriptions, and save you hours of writing.",
    btnTxt: "Scan My LinkedIn Now",
    btnUrl: "dashboard/linkedin-optimizer",
    image: f2,
  },
];

const ServiceContainer = () => {
  return (
    <section
      id="ai-tool"
      className="-mt-10 lg:-mt-0 pb-8 md:pb-12 xl:pb-20 3xl:pb-[120px]"
    >
      <Container>
        <div className="flex flex-col gap-5 lg:gap-8.5 xl:gap-y-10 3xl:gap-y-[60px]">
          <div className="flex flex-col gap-y-2 lg:gap-y-4.5 items-center">
            <Heading
              className="text-blue-black w-full md:w-11/12 mx-auto max-w-[1298px] text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[45px] 3xl:text-6xl font-semibold leading-[136%] tracking-[-0.72%] text-center"
              Txt={
                <>
                  Simplify Every Step of your Job search with
                  <span className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-semibold lg:leading-[132%] tracking-[-0.8px] text-center bg-[linear-gradient(90deg,#21489F_0%,#0184FF_100%)] bg-clip-text text-transparent ps-1 lg:ps-2 xl:ps-3 2xl:ps-4">
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
          {ServiceContainerArr?.map((item, idx) => {
            return (
              <ServiceCard
                key={idx}
                title={item?.title}
                description={item?.description}
                btnTxt={item?.btnTxt}
                btnUrl={item?.btnUrl}
                bgImg={item?.image}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ServiceContainer;
