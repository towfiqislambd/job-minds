'use client'
import { CircleActive, CircleInActive } from "@/Components/SvgContainer/SvgContainer";
import Heading from "@/Components/Tags/Heading/Heading";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  data: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="pricing"
      className="w-full gap-y-[59px] flex flex-col   container items-center  "
    >
      <Heading
        className="text-[64px] font-[600] leading-[164%] capitalize text-primary-blue "
        Txt={"FAQ"}
      />
      <div className="w-full flex flex-col gap-y-5  ">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white flex flex-col gap-y-4  rounded-[30px] h-auto w-full p-[60px] cursor-pointer ease-in-out duration-300 hover:shadow"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center">
              <Heading
                className="font-[600] text-dark-blue leading-[164%] text-[32px] "
                Txt={item.question}
              />
              <span>
                {activeIndex === index ? <CircleActive /> : <CircleInActive />}
              </span>
            </div>
            {activeIndex === index && (
              <Paragraph
                Txt={
                  "Instantly generate job-specific resumes tailored to your skills and experience."
                }
                className=" text-2xl text-primary-gray font-normal leading-[164%] "
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
