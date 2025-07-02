import Heading from "@/Components/Tags/Heading/Heading";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
import Link from "next/link";
import React from "react";

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
    <footer className="flex flex-col w-full h-auto py-[57px]  bg-dark-blue  ">
      <div className="flex flex-col container gap-y-[100px] ">
        <div className="flex flex-row items-center w-full justify-between ">
          <Heading
            Txt={"JobMinds"}
            className="text-[180px] text-white font-[600] leading-[164%] "
            Variant="h2"
          />
          <Paragraph
            Txt={
              "As a busy parent, finding time for myself was hard. Now I feel supported daily without feeling overwhelmed."
            }
            className="text-2xl text-white font-normal leading-[164%] max-w-[467px] text-end "
          />
        </div>
        <div className="flex flex-col gap-y-[100px] w-full ">
          <div className="flex flex-row gap-x-[70px] ">
            {CombinedArr.map((item, idx) => {
              return (
                <div className="flex flex-col gap-y-[15px] ">
                  <Heading
                    className="text-white text-2xl font-[600] leading-[164%] "
                    Txt={item.title}
                  />
                  <div className="flex flex-col gap-y-3">
                    {item.navLinkArr.map((item, idx) => {
                      return (
                        <Paragraph
                          key={idx}
                          className="text-white text-lg font-[600] leading-[164%] "
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
            <div className="flex flex-row w-full justify-between">
              <span
                className=" text-white font-[600] "
              >
                2025 Jobminds Limited, All rights reserved
              </span>
              <div className="flex flex-row gap-x-10 ">
                <Link
                  className=" text-white leading-[164%] font-[600] "
                  href={"#"}
                >
                  Trams and condition
                </Link>
                <Link
                  className=" text-white leading-[164%] font-[600] "
                  href={"#"}
                >
                  Privacy and policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
