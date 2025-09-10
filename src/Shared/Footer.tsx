"use client";
import React from "react";
import Link from "next/link";
import Container from "@/Components/Common/Container";
import Heading from "@/Components/Tags/Heading/Heading";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
import { useSiteSettings } from "@/Hooks/api/auth_api";
import { useDynamicPages } from "@/Hooks/api/cms_api";
const CombinedArr = [
  {
    title: "Ai tools",
    navLinks: [
      {
        label: "Ai resume builder",
        path: "/dashboard/resume-builder",
      },
      {
        label: "Smart Cover Letter Creator",
        path: "/dashboard/cover-letter-tools",
      },
      {
        label: "Interview Preparation Coach",
        path: "/dashboard/interview-coach",
      },
      {
        label: "Job Application Automation",
        path: "/dashboard/job-matcher",
      },
    ],
  },
  {
    title: "All",
    navLinks: [
      {
        label: "Ai resume builder",
        path: "/dashboard/resume-builder",
      },
      {
        label: "Smart Cover Letter Creator",
        path: "/dashboard/cover-letter-tools",
      },
      {
        label: "Interview Preparation Coach",
        path: "/dashboard/interview-coach",
      },
      {
        label: "Job Application Automation",
        path: "/dashboard/job-matcher",
      },
    ],
  },
];

const Footer = () => {
  const { data: siteSettings } = useSiteSettings();
  const { data: dynamicPages } = useDynamicPages();

  return (
    <footer className="py-5 md:py-10 bg-dark-blue">
      <Container>
        <div className="flex flex-col gap-7 md:gap-10">
          {/* Upper Part */}
          <div className="flex flex-col lg:flex-row lg:items-center w-full lg:justify-between">
            <Heading
              Txt="JobMinds"
              Variant="h2"
              className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-[85px] 3xl:text-[100px] text-white font-[600] leading-[164%] "
            />
            <Paragraph
              Txt={
                "As a busy parent, finding time for myself was hard. Now I feel supported daily without feeling overwhelmed."
              }
              className="text-sm md:text-base xl:text-lg 2xl:text-xl text-white font-normal leading-[164%] max-w-[467px] lg:text-end"
            />
          </div>

          {/* Lower Part */}
          <div className="flex flex-col gap-y-8 lg:gap-9 w-full">
            <div className="flex flex-col gap-7 md:flex-row  gap-x-[70px]">
              {CombinedArr.map((item, idx) => {
                return (
                  <div key={idx} className="flex flex-col gap-y-[15px]">
                    <Heading
                      className="text-white lg:text-lg xl:text-xl font-[600] leading-[164%]"
                      Txt={item.title}
                    />
                    <div className="flex flex-col gap-y-3">
                      {item.navLinks.map((item, idx) => {
                        return (
                          <Link
                            key={idx}
                            href={item?.path}
                            className="text-white 3xl:text-lg text-sm
                            lg:text-base lg:font-semibold leading-[164%] hover:underline"
                          >
                            {item?.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col gap-y-7 w-full">
              <hr className="w-full h-[1px] border-white" />

              <div className="flex flex-row-reverse lg:flex-row gap-2 lg:gap-3 justify-center flex-wrap w-full lg:justify-between">
                <span className="text-center text-white xl:font-semibold text-sm xl:text-base">
                  {siteSettings?.data?.copyright_text}
                </span>

                <div className="flex flex-col md:flex-row gap-3 md:gap-10">
                  {dynamicPages?.data.map((item: any) => {
                    return (
                      <Link
                        key={item?.id}
                        href={`/dynamic-pages/${item?.page_slug}`}
                        className="text-white hover:underline leading-[164%] text-sm xl:text-base xl:font-semibold"
                      >
                        {item?.page_title}
                      </Link>
                    );
                  })}
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
