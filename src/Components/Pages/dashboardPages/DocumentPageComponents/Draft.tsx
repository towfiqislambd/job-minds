"use client";
import React, { useEffect, useState } from "react";
import { FiDelete } from "react-icons/fi";
import { SearchSvg } from "@/Components/SvgContainer/SvgContainer";
import { Loader } from "@/Components/Loader/Loader";
import { useAllDrafts } from "@/Hooks/api/dashboard_api";
import { AiOutlineFileUnknown } from "react-icons/ai";
const data = [
  {
    id: 1,
    document_type: "Resume",
    question: "Can you describe your experience with system design?",
    difficulty_level: "Easy",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 2,
    document_type: "Cover Letter",
    question: "How do you prioritize tasks when working on multiple projects?",
    difficulty_level: "Minium",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 3,
    document_type: "Job match",
    question: "Can you describe your experience with system design?",
    difficulty_level: "Hard",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
];

const Draft = () => {
  const [searchDraft, setSearchDraft] = useState<string>("");
  const { data: draftsData, isLoading } = useAllDrafts();

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="h-[80vh] flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <section className="dashboard_card">
      {/* Upper Part */}
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between items-center">
        <h4 className="section_sub_title">All Draft</h4>

        {/* Search */}
        {draftsData?.data?.length > 0 && (
          <p className="border rounded-full w-[300px] px-4 py-1.5 lg:py-2 xl:py-2.5 border-gray-200 flex gap-2 items-center">
            <span className="shrink-0">
              <SearchSvg />
            </span>

            <input
              type="text"
              placeholder="Search by job title"
              className="w-full border-none outline-none"
              onChange={e => setSearchDraft(e.target.value)}
            />
          </p>
        )}
      </div>

      {/* Table */}
      {draftsData?.data?.length > 0 ? (
        <div className="w-full overflow-x-auto mt-2.5 3xl:mt-5">
          <table className="w-full border-separate border-spacing-y-7 2xl:border-spacing-y-10 text-sm 2xl:text-base">
            <thead>
              <tr className="text-nowrap text-dark-blue text-base 2xl:text-lg capitalize">
                <td className="font-medium px-3 2xl:px-4">Job Title</td>
                <td className="font-medium px-3 2xl:px-4">Questions</td>
                <td className="font-medium px-3 2xl:px-4">Difficulty Level </td>
                <td className="font-medium px-3 2xl:px-4 text-center">
                  Action
                </td>
              </tr>
            </thead>
            <tbody>
              {data?.map(
                ({ id, document_type, question, difficulty_level }) => (
                  <tr key={id} className="text-nowrap">
                    <td className="px-3 2xl:px-4 text-secondary-black font-medium">
                      {document_type}
                    </td>

                    <td className="px-3 2xl:px-4 text-secondary-gray font-medium">
                      {question}
                    </td>

                    <td className="px-3 2xl:px-4 text-secondary-black">
                      {difficulty_level}
                    </td>

                    <td className="px-3 2xl:px-4 flex justify-center items-center relative">
                      <button className="cursor-pointer">
                        <FiDelete className="text-xl text-red-500" />
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
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
