"use client";
import { useState } from "react";
import Heading from "@/Components/Tags/Heading/Heading";
import Container from "@/Components/Common/Container";
import {
  CircleActive,
  CircleInActive,
} from "@/Components/SvgContainer/SvgContainer";

type FAQItem = {
  question: string;
  answer: string;
};

interface FAQSectionProps {
  data: FAQItem[];
}

const FAQSection = ({ data }: FAQSectionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="pricing">
      <Container>
        <div className="flex flex-col 2xl:items-center gap-y-5 2xl:gap-y-10">
          <Heading
            className="text-2xl md:text-4xl xl:text-5xl 3xl:text-[64px] text-center font-[600] leading-[164%] capitalize text-primary-blue "
            Txt={"FAQ"}
          />
          <div className="w-full flex flex-col gap-y-4 md:gap-y-5">
            {data?.map((item, index) => (
              <div
                key={index}
                className="bg-white flex flex-col gap-y-4 rounded-xl md:rounded-2xl 2xl:rounded-[30px] h-auto w-full p-4 md:p-7 2xl:p-10 cursor-pointer ease-in-out duration-300 hover:shadow"
                onClick={() => toggle(index)}
              >
                <div className="flex gap-1.5 justify-between items-center">
                  <Heading
                    className="font-[600] text-dark-blue leading-[164%] md:text-lg lg:text-xl 2xl:text-3xl 3xl:text-[32px] "
                    Txt={item?.question}
                  />
                  <span className="shrink-0">
                    {activeIndex === index ? (
                      <CircleActive />
                    ) : (
                      <CircleInActive />
                    )}
                  </span>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeIndex === index
                      ? "max-h-40 opacity-100 mt-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm md:text-base lg:text-lg 2xl:text-xl 3xl:text-2xl text-primary-gray font-normal leading-[164%]">
                    {item?.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
