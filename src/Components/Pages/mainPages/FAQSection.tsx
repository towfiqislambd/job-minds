"use client";
import { useState } from "react";
import Heading from "@/Components/Tags/Heading/Heading";
import Container from "@/Components/Common/Container";
import {
  CircleActive,
  CircleInActive,
} from "@/Components/SvgContainer/SvgContainer";
import { motion, AnimatePresence } from "framer-motion";

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
                className="bg-white flex flex-col rounded-xl md:rounded-2xl p-4 lg:p-5 xl:p-7"
              >
                <div
                  onClick={() => toggle(id)}
                  className="flex gap-1.5 justify-between items-center cursor-pointer"
                >
                  <Heading
                    className="font-semibold text-dark-blue md:text-lg 2xl:text-xl"
                    Txt={question}
                  />
                  <span className="shrink-0">
                    {activeIndex === id ? <CircleActive /> : <CircleInActive />}
                  </span>
                </div>

                {/* start */}
                <AnimatePresence initial={false}>
                  {activeIndex === id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-5 text-sm md:text-base 2xl:text-lg text-primary-gray leading-[164%]">
                        {answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
