import React, { useState } from "react";
import { FileSvg, FilterSvg, SearchSvg } from "../SvgContainer/SvgContainer";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FiEye } from "react-icons/fi";
import { FiDelete } from "react-icons/fi";
import { FaRegEdit } from "react-icons/fa";
import { TbFileExport } from "react-icons/tb";

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
  const [open, setOpen] = useState<boolean>(false);
  const [popoverId, setPopoverId] = useState<number>(0);

  return (
    <section onClick={() => setOpen(false)} className="dashboard_card">
      {/* Upper Part */}
      <div className="flex justify-between items-center">
        <h4 className="section_sub_title">All Documents</h4>
        <div className="flex gap-3 3xl:gap-5 items-center">
          {/* Search */}
          <p className="border rounded-full w-[250px] px-4 py-2.5 border-gray-200 flex gap-2 items-center">
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
          <button className="flex gap-2 items-center cursor-pointer px-4 py-2.5 rounded-full border border-gray-200">
            <span className="shrink-0">
              <FilterSvg />
            </span>
            <span className="text-light-gray">Filter</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto mt-2.5 3xl:mt-5">
        <table className="w-full border-separate border-spacing-y-10">
          <thead>
            <tr className="text-nowrap text-dark-blue text-lg capitalize">
              <td className="font-medium px-4">Document Type</td>
              <td className="font-medium px-4">Job Title & Company</td>
              <td className="font-medium px-4">Last Update</td>
              <td className="font-medium px-4">progress</td>
              <td className="font-medium px-4">Status</td>
              <td className="font-medium px-4 text-center">Action</td>
            </tr>
          </thead>
          <tbody>
            {data?.map(
              (
                { id, document_type, job_title, company, last_update, status },
                idx
              ) => (
                <tr key={id} className="text-nowrap">
                  <td className="px-4 flex gap-3 items-center">
                    <p className="w-11 h-11 rounded-full grid place-items-center border-2 bg-[#cce6ff] border-secondary-blue">
                      <FileSvg />
                    </p>
                    <p className="text-secondary-black font-medium">
                      {document_type}
                    </p>
                  </td>

                  <td className="px-4">
                    <p className="text-secondary-black font-medium">
                      {job_title}
                    </p>
                    <p className="text-light-gray">{company}</p>
                  </td>

                  <td className="px-4">
                    <p className="text-secondary-black">{last_update}</p>
                  </td>

                  <td className="px-4 flex gap-3 items-center">
                    <div className="w-20 h-2 rounded-xl bg-green-500"></div>
                    <p className="text-secondary-black">3 of 3</p>
                  </td>

                  <td className="px-4">
                    <span
                      className={`capitalize px-4 py-1.5 rounded-lg ${
                        status?.toLowerCase() === "in progress"
                          ? "bg-[#CD8F1E] text-[#fff]"
                          : "bg-[#DCFCE7] text-[#09A506]"
                      }`}
                    >
                      {status}
                    </span>
                  </td>

                  <td className="px-4 flex justify-center items-center relative">
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
                        <FaRegEdit />
                        <span>Edit</span>
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
