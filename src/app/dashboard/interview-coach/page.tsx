"use client";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const initialRoles = [
  "User Experience (UX)",
  "User Experience (UX)",
  "User Experience Design (UED)",
  "Adobe XD",
  "User Interface (UI)",
  "Interaction Design (IxD)",
  "Interaction Design (IxD)",
  "Adobe XD",
  "User Experience (UX)",
  "User Experience (UX)",
  "User Experience Design (UED)",
  "Adobe XD",
  "User Interface (UI)",
  "Interaction Design (IxD)",
  "Interaction Design (IxD)",
  "Adobe XD",
];

const questionsData = [
  {
    question: "Can you describe your experience with system design?",
    answer:
      "Answer : I have extensive experience in system design, particularly in architecting scalable, efficient, and maintainable software solutions. My approach begins with a clear understanding of business requirements, followed by selecting appropriate technologies and designing the system’s components, data flow, and interactions. I focus heavily on modularity, fault tolerance, and future scalability, whether it's for monolithic systems, microservices, or event-driven architectures. I’ve worked on designing both backend infrastructures and full-stack platforms, ensuring security, performance optimization, and smooth integration with third-party services. Throughout, I collaborate closely with stakeholders and development teams to ensure the design meets user needs and aligns with long-term business goals.",
    difficulty: "Medium",
    category: "Technical",
  },
  {
    question: "How do you prioritize tasks in a project?",
    answer:
      "Answer : Answer : I have extensive experience in system design, particularly in architecting scalable, efficient, and maintainable software solutions. My approach begins with a clear understanding of business requirements, followed by selecting appropriate technologies and designing the system’s components, data flow, and interactions. I focus heavily on modularity, fault tolerance, and future scalability, whether it's for monolithic systems, microservices, or event-driven architectures. I’ve worked on designing both backend infrastructures and full-stack platforms, ensuring security, performance optimization, and smooth integration with third-party services. Throughout, I collaborate closely with stakeholders and development teams to ensure the design meets user needs and aligns with long-term business goals.",
    difficulty: "Easy",
    category: "Behavioral",
  },
  {
    question:
      "What are some challenges you faced while developing a new feature?",
    answer:
      "Answer : Answer : I have extensive experience in system design, particularly in architecting scalable, efficient, and maintainable software solutions. My approach begins with a clear understanding of business requirements, followed by selecting appropriate technologies and designing the system’s components, data flow, and interactions. I focus heavily on modularity, fault tolerance, and future scalability, whether it's for monolithic systems, microservices, or event-driven architectures. I’ve worked on designing both backend infrastructures and full-stack platforms, ensuring security, performance optimization, and smooth integration with third-party services. Throughout, I collaborate closely with stakeholders and development teams to ensure the design meets user needs and aligns with long-term business goals.",
    difficulty: "Easy",
    category: "Behavioral",
  },
  {
    question: "How do you prioritize tasks when working on multiple projects?",
    answer:
      "Answer : Answer : I have extensive experience in system design, particularly in architecting scalable, efficient, and maintainable software solutions. My approach begins with a clear understanding of business requirements, followed by selecting appropriate technologies and designing the system’s components, data flow, and interactions. I focus heavily on modularity, fault tolerance, and future scalability, whether it's for monolithic systems, microservices, or event-driven architectures. I’ve worked on designing both backend infrastructures and full-stack platforms, ensuring security, performance optimization, and smooth integration with third-party services. Throughout, I collaborate closely with stakeholders and development teams to ensure the design meets user needs and aligns with long-term business goals.",
    difficulty: "Easy",
    category: "Behavioral",
  },
  {
    question:
      "Can you explain a time when you had to troubleshoot a production issue?",
    answer:
      "Answer : Answer : I have extensive experience in system design, particularly in architecting scalable, efficient, and maintainable software solutions. My approach begins with a clear understanding of business requirements, followed by selecting appropriate technologies and designing the system’s components, data flow, and interactions. I focus heavily on modularity, fault tolerance, and future scalability, whether it's for monolithic systems, microservices, or event-driven architectures. I’ve worked on designing both backend infrastructures and full-stack platforms, ensuring security, performance optimization, and smooth integration with third-party services. Throughout, I collaborate closely with stakeholders and development teams to ensure the design meets user needs and aligns with long-term business goals.",
    difficulty: "Easy",
    category: "Behavioral",
  },
];

const Page = () => {
  const [jobRoles, setJobRoles] = useState<string[]>(initialRoles);
  const [selectedRole, setSelectedRole] = useState("");
  const [showQuestions, setShowQuestions] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleRoleClick = (role: string) => {
    setSelectedRole(role);
  };

  const handleGenerate = () => {
    if (selectedRole && !jobRoles.includes(selectedRole)) {
      setJobRoles(prev => [...prev, selectedRole]);
    }
    setShowQuestions(true);
  };

  const toggleAccordion = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <>
      <div>
        <h2 className="section_title">Interview Preparation Assistant</h2>
        <p className="section_description">
          Step up your interview skills with cool AI tips and tricks!
        </p>

        <div className="my-7 2xl:my-10 dashboard_card">
          <h3 className="section_sub_title">Select Your Job Role</h3>

          <div className="flex gap-5 pt-3 lg:py-6 items-center">
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
            <button onClick={handleGenerate} className="primary-btn shrink-0">
              Generate Questions
            </button>
          </div>
          <div className="pt-6 flex flex-wrap gap-3 3xl:gap-5">
            {jobRoles.map((role, index) => (
              <div
                key={index}
                onClick={() => handleRoleClick(role)}
                className="bg-[#F9FAFB] rounded-[45px] px-3 2xl:px-4 py-2 2xl:py-3 text-center cursor-pointer transition-all hover:-translate-y-2 duration-300 ease-in-out shrink-0 text-nowrap w-fit"
              >
                <p className="text-sm font-poppins text-[#071431]">{role}</p>
              </div>
            ))}
          </div>
        </div>

        {showQuestions && (
          <div className="dashboard_card mb-7 lg:mb-10">
            <h2 className="section_sub_title !mb-5">Interview Questions</h2>
            <div className="flex flex-col gap-4 2xl:gap-5">
              {questionsData?.map((item, index) => {
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
                      <div className="flex gap-x-3 items-center">
                        <h4 className="lg:text-lg 2xl:text-[20px] font-poppins font-normal text-[#696969]">
                          Q{index + 1}
                        </h4>
                        <h3 className="text-sm lg:text-base 2xl:text-lg font-poppins text-[#071431] font-medium 2xl:font-semibold">
                          {item.question}
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
                          <div className="flex justify-between items-center mt-4">
                            <div className="flex gap-x-4 items-center">
                              <h4 className="text-[14px] font-poppins font-normal text-[#696969]">
                                Difficulty : {item.difficulty}
                              </h4>
                              <h4 className="text-[14px] font-poppins font-normal text-[#696969]">
                                Category : {item.category}
                              </h4>
                            </div>
                            <button className="secondary-btn">
                              Save Draft
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="flex justify-end items-center gap-4 2xl:gap-5">
          <button className="secondary-btn">back</button>
          <Link href="/dashboard/mock-interview" className="primary-btn">
            Start Mock Interview
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page;
