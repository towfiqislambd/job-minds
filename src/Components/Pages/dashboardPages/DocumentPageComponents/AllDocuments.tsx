import React, { useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FiEye } from "react-icons/fi";
import { FiDelete } from "react-icons/fi";
import { TbFileExport } from "react-icons/tb";
import {
  FileSvg,
  FilterSvg,
  SearchSvg,
} from "@/Components/SvgContainer/SvgContainer";

const data = [
  {
    id: 1,
    document_type: "Resume",
    job_title: "Software Engineer",
    company: "Tech Innovations",
    last_update: "Jan 15, 2024",
    status: "Completed",
  },
  {
    id: 2,
    document_type: "Cover Letter",
    job_title: "Software Engineer",
    company: "Tech Innovations",
    last_update: "Jan 15, 2024",
    status: "Completed",
  },
  {
    id: 3,
    document_type: "Job match",
    job_title: "Software Engineer",
    company: "Tech Innovations",
    last_update: "Jan 15, 2024",
    status: "In Progress",
  },
  {
    id: 4,
    document_type: "Interview Question",
    job_title: "Software Engineer",
    company: "Tech Innovations",
    last_update: "Jan 15, 2024",
    status: "Completed",
  },
  {
    id: 5,
    document_type: "Resume",
    job_title: "Software Engineer",
    company: "Tech Innovations",
    last_update: "Jan 15, 2024",
    status: "In Progress",
  },
];

const AllDocuments = () => {
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [popoverId, setPopoverId] = useState<number>(0);

  return (
    <section className="dashboard_card">
      <div
        onClick={() => {
          setOpen(false);
          setOpenFilter(false);
        }}
        className="absolute inset-0"
      />

      {/* Upper Part */}
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between items-center">
        <h4 className="section_sub_title">All Documents</h4>
        <div className="flex gap-3 3xl:gap-5 items-center flex-wrap-reverse justify-center">
          {/* Search */}
          <p className="border rounded-full w-[250px] px-4 py-1.5 lg:py-2 xl:py-2.5 border-gray-200 flex gap-2 items-center">
            <span className="shrink-0">
              <SearchSvg />
            </span>
            <input
              type="text"
              placeholder="Search something"
              className="w-full border-none outline-none"
            />
          </p>

          {/* Filter */}
          <button
            onClick={() => setOpenFilter(!openFilter)}
            className="flex gap-2 items-center cursor-pointer px-4 py-1.5 lg:py-2 xl:py-2.5 rounded-full border border-gray-200 relative"
          >
            <span className="shrink-0">
              <FilterSvg />
            </span>
            <span className="text-light-gray">Filter</span>

            {openFilter && (
              <div
                onClick={e => e.stopPropagation()}
                className="absolute top-14 right-0 w-[250px] bg-white shadow-lg border border-gray-50 rounded-lg p-5 z-50"
              >
                <div className="flex justify-between items-center font-medium text-secondary-black">
                  <h3>Filters</h3>
                  <button className="cursor-pointer">Reset</button>
                </div>

                <hr className="text-gray-300 my-3" />

                <div className="space-y-3 text-sm text-secondary-gray">
                  <h3 className="font-medium text-left text-secondary-black text-base">
                    Document Type
                  </h3>

                  <p className="flex gap-2 items-center">
                    <input
                      type="radio"
                      id="all"
                      name="document_type"
                      className="scale-125"
                    />
                    <label htmlFor="all">All</label>
                  </p>

                  <p className="flex gap-2 items-center">
                    <input
                      type="radio"
                      id="resume"
                      name="document_type"
                      className="scale-125"
                    />
                    <label htmlFor="resume">Resume</label>
                  </p>

                  <p className="flex gap-2 items-center">
                    <input
                      type="radio"
                      id="cover_letter"
                      name="document_type"
                      className="scale-125"
                    />
                    <label htmlFor="cover_letter">Cover Letter</label>
                  </p>

                  <p className="flex gap-2 items-center">
                    <input
                      type="radio"
                      id="job_match"
                      name="document_type"
                      className="scale-125"
                    />
                    <label htmlFor="job_match">Job Match</label>
                  </p>
                </div>

                <hr className="text-gray-300 my-4" />

                <div className="space-y-3 text-sm text-secondary-gray mb-5">
                  <h3 className="font-medium text-left text-secondary-black text-base">
                    Progress Status
                  </h3>

                  <p className="flex gap-2 items-center">
                    <input
                      type="radio"
                      id="all"
                      name="progress_status"
                      className="scale-125"
                    />
                    <label htmlFor="all">All</label>
                  </p>

                  <p className="flex gap-2 items-center">
                    <input
                      type="radio"
                      id="incomplete"
                      name="progress_status"
                      className="scale-125"
                    />
                    <label htmlFor="incomplete">Incomplete</label>
                  </p>

                  <p className="flex gap-2 items-center">
                    <input
                      type="radio"
                      id="progress"
                      name="progress_status"
                      className="scale-125"
                    />
                    <label htmlFor="progress">In Progress</label>
                  </p>

                  <p className="flex gap-2 items-center">
                    <input
                      type="radio"
                      id="complete"
                      name="progress_status"
                      className="scale-125"
                    />
                    <label htmlFor="complete">Complete</label>
                  </p>
                </div>

                <button className="block w-full bg-secondary-blue text-white font-medium rounded-lg cursor-pointer transition-transform hover:scale-105 duration-300 py-3">
                  Apply Filters
                </button>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto mt-2.5 3xl:mt-5">
        <table className="w-full border-separate border-spacing-y-7 2xl:border-spacing-y-10 text-sm 2xl:text-base">
          <thead>
            <tr className="text-nowrap text-dark-blue text-base 2xl:text-lg capitalize">
              <td className="font-medium px-3 2xl:px-4">Document Type</td>
              <td className="font-medium px-3 2xl:px-4">Job Title & Company</td>
              <td className="font-medium px-3 2xl:px-4">Last Update</td>
              <td className="font-medium px-3 2xl:px-4">Status</td>
              <td className="font-medium px-3 2xl:px-4 text-center">Action</td>
            </tr>
          </thead>
          <tbody>
            {data?.map(
              (
                { id, document_type, job_title, company, last_update, status },
                idx
              ) => (
                <tr key={id} className="text-nowrap">
                  <td className="px-3 2xl:px-4 flex gap-3 items-center">
                    <p className="w-11 h-11 rounded-full grid place-items-center border-2 bg-[#cce6ff] border-secondary-blue">
                      <FileSvg />
                    </p>
                    <p className="text-secondary-black font-medium">
                      {document_type}
                    </p>
                  </td>

                  <td className="px-3 2xl:px-4">
                    <p className="text-secondary-black font-medium">
                      {job_title}
                    </p>
                    <p className="text-light-gray">{company}</p>
                  </td>

                  <td className="px-3 2xl:px-4">
                    <p className="text-secondary-black">{last_update}</p>
                  </td>

                  <td className="px-3 2xl:px-4">
                    <span
                      className={`capitalize px-3 lg:px-4 py-1 lg:py-1.5 rounded-lg ${
                        status?.toLowerCase() === "in progress"
                          ? "bg-[#CD8F1E] text-[#fff]"
                          : "bg-[#DCFCE7] text-[#09A506]"
                      }`}
                    >
                      {status}
                    </span>
                  </td>

                  <td className="px-3 2xl:px-4 flex justify-center items-center relative">
                    <button
                      onClick={e => {
                        setOpen(true);
                        setPopoverId(id);
                        e.stopPropagation();
                      }}
                      className="cursor-pointer"
                    >
                      <HiOutlineDotsVertical className="text-xl" />
                    </button>

                    {/* Popover */}
                    <div
                      onClick={e => e.stopPropagation()}
                      className={`${
                        open && id === popoverId ? "block" : "hidden"
                      } absolute top-5 right-16 p-3 border border-gray-100 bg-white rounded-lg shadow-lg space-y-2.5 z-50 w-28 text-sm ${
                        idx === data.length - 1 && "!-top-28"
                      }`}
                    >
                      <button
                        onClick={() => setOpen(false)}
                        className="flex gap-2 items-center cursor-pointer"
                      >
                        <FiEye />
                        <span>View</span>
                      </button>
                      <button
                        onClick={() => setOpen(false)}
                        className="flex gap-2 items-center cursor-pointer"
                      >
                        <TbFileExport />
                        <span>Export</span>
                      </button>
                      <button
                        onClick={() => setOpen(false)}
                        className="flex gap-2 items-center cursor-pointer text-red-500"
                      >
                        <FiDelete />
                        <span>Delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllDocuments;
