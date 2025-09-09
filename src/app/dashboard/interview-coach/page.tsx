"use client";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import toast from "react-hot-toast";
import {
  useDraftInterviewQuestions,
  useInitialJobRoles,
  useInterviewAssistant,
} from "@/Hooks/api/dashboard_api";
import { CgSpinnerTwo } from "react-icons/cg";
import { useRouter } from "next/navigation";
import { Loader } from "@/Components/Loader/Loader";

type JobQuestion = {
  question: string;
  answer: string;
  difficulty: string;
  category: string;
};

const Page = () => {
  // Hook
  const router = useRouter();

  // Mutation & Queries
  const { data: initialJobRoles, isLoading } = useInitialJobRoles();
  const { mutate: interviewAssistantMutation, isPending } =
    useInterviewAssistant();
  const { mutate: draftQuestionMutation, isPending: isDrafting } =
    useDraftInterviewQuestions();

  // States
  const [jobData, setJobData] = useState<JobQuestion[]>([]);
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [showQuestions, setShowQuestions] = useState<boolean>(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleRoleClick = (role: string) => {
    setSelectedRole(role);
  };

  const toggleAccordion = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  // Func for generate interview questions
  const handleGenerateQuestions = () => {
    if (!selectedRole) {
      return toast.error("Please enter your job role");
    }

    interviewAssistantMutation(
      { role: selectedRole },
      {
        onSuccess: (data: any) => {
          setJobData(data?.data?.questions);
        },
      }
    );
    setShowQuestions(true);
  };

  if (isLoading) {
    return (
      <div className="h-[80vh] flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <h2 className="section_title">Interview Preparation Assistant</h2>

      <p className="section_description">
        Step up your interview skills with cool AI tips and tricks!
      </p>

      <div className="my-7 2xl:my-10 dashboard_card">
        <h3 className="section_sub_title">Select Your Job Role</h3>

        <div className="flex flex-col md:flex-row gap-3 md:gap-5 pt-3 lg:py-6 items-center">
          {/* Search input */}
          <div className="relative w-full">
            <input
              type="search"
              placeholder="Enter or select your job role"
              value={selectedRole}
              onChange={e => setSelectedRole(e.target.value)}
              className="py-3 pl-[30px] rounded-[8px] border border-[#ECEEF0] text-[14px] font-poppins text-[#071431] font-normal outline-0 w-full"
            />
            <div className="absolute top-[15px] left-2">
              <CiSearch className="fill-[#DADADA]" />
            </div>
          </div>

          {/* Submit btn */}
          <button
            disabled={isPending}
            onClick={handleGenerateQuestions}
            className={`primary-btn shrink-0 ${
              isPending && "!cursor-not-allowed"
            }`}
          >
            {isPending ? (
              <div className="flex gap-2 items-center">
                <CgSpinnerTwo className="animate-spin text-xl" />
                <span>Generating....</span>
              </div>
            ) : (
              "Generate Questions"
            )}
          </button>
        </div>

        {/* Default roles */}
        <div className="pt-6 flex flex-wrap gap-3 3xl:gap-5">
          {initialJobRoles?.data.map((role: any, index: number) => (
            <div
              key={index}
              onClick={() => handleRoleClick(role?.name)}
              className="bg-[#F9FAFB] rounded-[45px] px-3 2xl:px-4 py-2 2xl:py-3 text-center cursor-pointer transition-all hover:-translate-y-2 duration-300 ease-in-out shrink-0 text-nowrap w-fit"
            >
              <p className="text-sm font-poppins text-[#071431]">
                {role?.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Map */}
      {showQuestions && (
        <div className="dashboard_card mb-7 lg:mb-10">
          <h2 className="section_sub_title !mb-5">Interview Questions</h2>

          <div className="flex flex-col gap-4 2xl:gap-5">
            {isPending ? (
              <div className="space-y-4">
                <div className="rounded-[8px] p-3 lg:p-5 animate-pulse bg-gray-100 w-1/3" />
                <div className="rounded-[8px] p-3 lg:p-5 animate-pulse bg-gray-100 w-2/3" />
                <div className="rounded-[8px] p-3 lg:p-5 animate-pulse bg-gray-100" />
              </div>
            ) : (
              jobData?.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="border border-[#EAEAEA] rounded-[8px] p-3 lg:p-5"
                  >
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleAccordion(index)}
                    >
                      <div className="flex gap-x-3">
                        <h4 className="hidden lg:block lg:text-lg 2xl:text-[20px] font-poppins font-normal text-[#696969]">
                          Q{index + 1}
                        </h4>
                        <h3 className="text-sm lg:text-base 2xl:text-lg font-poppins text-[#071431] font-medium 2xl:font-semibold">
                          {item?.question}
                        </h3>
                      </div>
                      <div
                        className={`shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-0" : "rotate-180"
                        }`}
                      >
                        <IoIosArrowUp className="size-5" />
                      </div>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-[14px] font-normal font-poppins text-[#696969] py-4">
                            {item.answer}
                          </p>
                          <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-3 lg:gap-0 mt-4">
                            <div className="flex flex-col lg:flex-row gap-2 l:gap-4 items-center">
                              <h4 className="text-[14px] font-poppins font-normal text-[#696969]">
                                Difficulty : {item.difficulty}
                              </h4>
                              <h4 className="text-[14px] font-poppins font-normal text-[#696969]">
                                Category : {item.category}
                              </h4>
                            </div>

                            {/* Draft btn */}
                            <button
                              disabled={isDrafting}
                              className={`secondary-btn ${
                                isDrafting && "!cursor-not-allowed"
                              }`}
                              onClick={() => {
                                const data = {
                                  question: item?.question,
                                  answer: item?.answer,
                                  job_title: selectedRole,
                                  difficulty_level: item.difficulty,
                                };
                                draftQuestionMutation(data);
                              }}
                            >
                              {isDrafting ? (
                                <div className="flex gap-2 items-center">
                                  <CgSpinnerTwo className="animate-spin text-xl" />
                                  <span>Saving....</span>
                                </div>
                              ) : (
                                " Save Draft"
                              )}
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

      <div className="flex justify-end items-center gap-4 2xl:gap-5">
        <button onClick={() => router.back()} className="secondary-btn">
          back
        </button>

        <Link href="/dashboard/mock-interview" className="primary-btn">
          Start Mock Interview
        </Link>
      </div>
    </>
  );
};

export default Page;
