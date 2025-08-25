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
  const { data: siteSettings } = useSiteSettings();
  const { data: dynamicPages } = useDynamicPages();

  return (
    <footer className="py-10 bg-dark-blue">
      <Container>
        <div className="flex flex-col gap-7 md:gap-10">
          {/* Upper Part */}
          <div className="flex flex-col lg:flex-row lg:items-center w-full lg:justify-between">
            <Heading
              Txt="JobMinds"
              Variant="h2"
              className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-[100px] text-white font-[600] leading-[164%] "
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
            <div className="flex flex-col gap-7 md:flex-row gap-x-[70px] ">
              {CombinedArr.map((item, idx) => {
                return (
                  <div key={idx} className="flex flex-col gap-y-[15px]">
                    <Heading
                      className="text-white lg:text-lg xl:text-xl font-[600] leading-[164%] "
                      Txt={item.title}
                    />
                    <div className="flex flex-col gap-y-3">
                      {item.navLinkArr.map((item, idx) => {
                        return (
                          <Paragraph
                            key={idx}
                            Txt={item}
                            className="text-white 3xl:text-lg text-sm lg:text-base lg:font-semibold leading-[164%]"
                          />
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-y-7 w-full">
              <hr className="w-full h-[1px] border-white" />
              <div className="flex gap-3 md:justify-center flex-wrap w-full lg:justify-between">
                <span className=" text-white xl:font-[600]  text-sm xl:text-base">
                  {siteSettings?.data?.copyright_text}
                </span>

                <div className="flex flex-col md:flex-row gap-3 md:gap-10">
                  {dynamicPages?.data.map((item: any) => {
                    return (
                      <Link
                        key={item?.id}
                        href={item?.page_slug}
                        className="text-white leading-[164%] text-sm xl:text-base xl:font-semibold"
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
