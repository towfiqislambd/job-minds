"use client";
import Container from "@/Components/Common/Container";
import {
  CircleActive,
  CircleInActive,
} from "@/Components/SvgContainer/SvgContainer";
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
    <section id="pricing">
      <Container>
        <div className="flex flex-col 2xl:items-center gap-y-5 2xl:gap-y-10">
          <Heading
            className="text-5xl 3xl:text-[64px] text-center font-[600] leading-[164%] capitalize text-primary-blue "
            Txt={"FAQ"}
          />
          <div className="w-full flex flex-col gap-y-5  ">
            {data.map((item, index) => (
              <div
                key={index}
                className="bg-white flex flex-col gap-y-4 rounded-2xl 2xl:rounded-[30px] h-auto w-full p-7 2xl:p-10 cursor-pointer ease-in-out duration-300 hover:shadow"
                onClick={() => toggle(index)}
              >
                <div className="flex justify-between items-center">
                  <Heading
                    className="font-[600] text-dark-blue leading-[164%] text-xl 2xl:text-3xl 3xl:text-[32px] "
                    Txt={item.question}
                  />
                  <span>
                    {activeIndex === index ? (
                      <CircleActive />
                    ) : (
                      <CircleInActive />
                    )}
                  </span>
                </div>
                {activeIndex === index && (
                  <p className="text-lg 2xl:text-xl 3xl:text-2xl text-primary-gray font-normal leading-[164%]">
                    Instantly generate job-specific resumes tailored to your
                    skills and experience.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
