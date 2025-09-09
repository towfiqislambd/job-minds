"use client";
import { useState } from "react";
import Heading from "@/Components/Tags/Heading/Heading";
import Container from "@/Components/Common/Container";
import {
  CircleActive,
  CircleInActive,
} from "@/Components/SvgContainer/SvgContainer";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

interface FAQSectionProps {
  data: FAQItem[];
}

const FAQSection = ({ data }: FAQSectionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (id: number) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <section id="pricing">
      <Container>
        <div className="flex flex-col 2xl:items-center gap-y-4 lg:gap-y-5 2xl:gap-y-10">
          {/* Title */}
          <Heading
            className="text-2xl md:text-4xl xl:text-5xl 3xl:text-[64px] text-center font-[600] leading-[164%] capitalize text-primary-blue "
            Txt={"FAQ"}
          />

          {/* Map */}
          <div className="w-full flex flex-col gap-y-4 xl:gap-y-5">
            {data?.map(({ id, question, answer }) => (
              <div
                key={id}
                className="bg-white flex flex-col gap-y-4 rounded-xl md:rounded-2xl p-4 lg:p-5 xl:p-7 cursor-pointer ease-in-out duration-300 hover:shadow"
                onClick={() => toggle(id)}
              >
                <div className="flex gap-1.5 justify-between items-center">
                  <Heading
                    className="font-semibold text-dark-blue md:text-lg 2xl:text-xl 3xl:text-2xl"
                    Txt={question}
                  />
                  <span className="shrink-0">
                    {activeIndex === id ? <CircleActive /> : <CircleInActive />}
                  </span>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeIndex === id
                      ? "max-h-40 opacity-100 mt-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm md:text-base 2xl:text-lg 3xl:text-xl text-primary-gray font-normal leading-[164%]">
                    {answer}
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
