"use client";
import React, { useState } from "react";
import { SearchSvg } from "@/Components/SvgContainer/SvgContainer";
import { useAllDrafts, useRemoveFromDraft } from "@/Hooks/api/dashboard_api";
import { AiOutlineFileUnknown } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";
import { CgSpinnerTwo } from "react-icons/cg";

const Draft = () => {
  // States
  const [draftId, setDraftId] = useState<string | null>(null);
  const [searchDraft, setSearchDraft] = useState<string>("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Mutations & Queries
  const { data: draftsData, isLoading } = useAllDrafts(searchDraft);
  const { mutate: removeDraftMutation, isPending } =
    useRemoveFromDraft(draftId);

  const toggleAccordion = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="dashboard_card">
      {/* Header */}
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between items-center">
        <h4 className="section_sub_title">All Drafts</h4>

        {/* Search */}
        <div className="border rounded-full w-[300px] px-4 py-1.5 lg:py-2 xl:py-2.5 border-gray-200 flex gap-2 items-center">
          <span className="shrink-0">
            <SearchSvg />
          </span>
          <input
            type="text"
            placeholder="Search by job title"
            className="w-full border-none outline-none"
            value={searchDraft}
            onChange={e => setSearchDraft(e.target.value)}
          />
        </div>
      </div>

      {/* Content */}
      {isLoading ? (
        Array.from({ length: 4 }).map((_, idx) => (
          <div
            key={idx}
            className="border border-[#EAEAEA] rounded-[8px] p-3 lg:p-5 mt-4 animate-pulse"
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-x-3 items-center">
                <div className="size-7 bg-gray-200 rounded" />
                <div className="h-5 w-40 bg-gray-200 rounded" />
              </div>
              <div className="size-7 bg-gray-200 rounded-full" />
            </div>
          </div>
        ))
      ) : draftsData?.data?.length > 0 ? (
        draftsData?.data?.map((item: any, index: number) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={item.id || index}
              className="border border-[#EAEAEA] rounded-[8px] p-3 lg:p-5 mt-4"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex gap-x-3 items-center">
                  <h4 className="text-lg font-poppins font-medium">
                    {index + 1}.
                  </h4>
                  <h3 className="text-base lg:text-[17px] font-poppins text-[#071431] font-medium 2xl:font-semibold capitalize">
                    {item?.job_title}
                  </h3>
                </div>
                <div
                  className={`shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
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
                    <h3 className="mt-5 text-sm lg:text-base font-poppins text-gray-700 font-medium">
                      Question: {item?.question}
                    </h3>

                    <p className="text-sm font-poppins text-[#696969] py-3">
                      {item.answer}
                    </p>
                    <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-3 lg:gap-0 mt-3">
                      <div className="flex flex-col lg:flex-row gap-2 lg:gap-7 items-center">
                        <h4 className="text-sm font-poppins capitalize text-[#696969]">
                          Difficulty Level: {item.difficulty_level}
                        </h4>

                        <button
                          disabled={isPending}
                          onClick={() => {
                            setDraftId(item?.id);
                            if (draftId) {
                              removeDraftMutation();
                            }
                          }}
                          className={`text-sm text-red-400 font-medium group ${
                            isPending
                              ? "cursor-not-allowed opacity-90"
                              : "cursor-pointer"
                          }`}
                        >
                          {isPending ? (
                            <div className="flex gap-2 items-center">
                              <span className="inline-block animate-spin">
                                ⏳
                              </span>
                              <span>Removing form draft....</span>
                            </div>
                          ) : (
                            <span className="group-hover:underline">
                              Remove from draft
                            </span>
                          )}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })
      ) : (
        <div className="flex flex-col justify-center items-center gap-4 text-center py-16">
          <AiOutlineFileUnknown className="text-5xl text-gray-500" />
          <p className="font-medium text-gray-600">No drafts found!</p>
        </div>
      )}
    </section>
  );
};

export default Draft;
