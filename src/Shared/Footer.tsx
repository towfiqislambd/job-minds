import React from "react";
import Link from "next/link";
import Container from "@/Components/Common/Container";
import Heading from "@/Components/Tags/Heading/Heading";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";

const CombinedArr = [
  {
    title: "Ai tools",
    navLinkArr: [
      "Ai resume builder",
      "Smart Cover Letter Creator",
      "Interview Preparation Coach",
      "Job Application Automation",
    ],
  },
  {
    title: "Blog",
    navLinkArr: [
      "Ai resume builder",
      "Smart Cover Letter Creator",
      "Interview Preparation Coach",
      "Job Application Automation",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="py-10 3xl:py-[57px] bg-dark-blue">
      <Container>
        <div className="flex flex-col gap-7 md:gap-10 3xl:gap-y-20 4xl:gap-y-[100px]">
          {/* Upper Part */}
          <div className="flex flex-col lg:flex-row lg:items-center w-full lg:justify-between">
            <Heading
              Txt={"JobMinds"}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-[100px] 3xl:text-[150px] text-white font-[600] leading-[164%] "
              Variant="h2"
            />
            <Paragraph
              Txt={
                "As a busy parent, finding time for myself was hard. Now I feel supported daily without feeling overwhelmed."
              }
              className="text-sm md:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl text-white font-normal leading-[164%] max-w-[467px] lg:text-end"
            />
          </div>

          {/* Lower Part */}
          <div className="flex flex-col gap-y-8 lg:gap-12 3xl:gap-y-[100px] w-full">
            <div className="flex flex-col gap-7 md:flex-row gap-x-[70px] ">
              {CombinedArr.map((item, idx) => {
                return (
                  <div key={idx} className="flex flex-col gap-y-[15px]">
                    <Heading
                      className="text-white lg:text-lg xl:text-xl 3xl:text-2xl font-[600] leading-[164%] "
                      Txt={item.title}
                    />
                    <div className="flex flex-col gap-y-3">
                      {item.navLinkArr.map((item, idx) => {
                        return (
                          <Paragraph
                            key={idx}
                            className="text-white 3xl:text-lg font-normal text-sm lg:text-base lg:font-[600] leading-[164%] "
                            Txt={item}
                          />
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-y-5 w-full">
              <hr
                data-aos="fade-up"
                data-aos-delay="100"
                className="w-full h-[1px] border-white"
              />
              <div className="flex gap-3 md:justify-center flex-wrap w-full lg:justify-between">
                <span className=" text-white xl:font-[600]  text-sm xl:text-base">
                  2025 Jobminds Limited, All rights reserved
                </span>
                <div className="flex flex-col md:flex-row gap-3 md:gap-10">
                  <Link
                    className=" text-white leading-[164%]  text-sm xl:text-base xl:font-[600] "
                    href={"#"}
                  >
                    Trams and condition
                  </Link>
                  <Link
                    className=" text-white leading-[164%] text-sm xl:text-base xl:font-[600] "
                    href={"#"}
                  >
                    Privacy and policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
