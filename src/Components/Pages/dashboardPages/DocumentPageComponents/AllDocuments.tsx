import moment from "moment";
import useAuth from "@/Hooks/useAuth";
import {
  FileSvg,
  FilterSvg,
  SearchSvg,
} from "@/Components/SvgContainer/SvgContainer";
import {
  useAllDocuments,
  useDeleteDocument,
  useExportDocument,
} from "@/Hooks/api/dashboard_api";
import { FiEye } from "react-icons/fi";
import { FiDelete } from "react-icons/fi";
import { GrPowerReset } from "react-icons/gr";
import { TbFileExport } from "react-icons/tb";
import React, { useEffect, useState } from "react";
import { AiOutlineFileUnknown } from "react-icons/ai";
import { HiOutlineDotsVertical } from "react-icons/hi";

type documentItem = {
  id: number;
  title: string;
  document_type: string;
  last_update: string;
  status: string;
  file_type: string;
  document_file: string;
};

const AllDocuments = () => {
  // Hooks
  const { search } = useAuth();

  // States
  const [documentId, setDocumentId] = useState<number | null>(null);
  const [activePage, setActivePage] = useState<number>(1);
  const [searchDoc, setSearchDoc] = useState<string>("");
  const [docType, setDocType] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [popoverId, setPopoverId] = useState<number>(0);
  const [tempDocumentType, setTempDocumentType] = useState<string>("");
  const [tempStatus, setTempStatus] = useState<string>("");

  // Mutations
  const { mutate: deleteDocumentMutation, isPending } =
    useDeleteDocument(documentId);
  const { mutate: exportDocumentMutation, isPending: isExporting } =
    useExportDocument(documentId);

  // Queries
  const { data: allDocuments, isLoading } = useAllDocuments(
    searchDoc || search,
    docType,
    status,
    activePage
  );

  const handleApplyChange = () => {
    setDocType(tempDocumentType);
    setStatus(tempStatus);
    setActivePage(1);
    setOpenFilter(false);
  };

  // Func for view pdf
  const handleView = (document_file: string) => {
    setOpen(false);
    const file = `${process.env.NEXT_PUBLIC_SITE_URL}/${document_file}`;
    window.open(file);
  };

  // Func for export documents
  const handleExport = (document_id: number, file_type: string) => {
    setDocumentId(document_id);

    if (documentId && file_type === "pdf") {
      exportDocumentMutation(null, {
        onSuccess: (blob: any) => {
          const url = window.URL.createObjectURL(new Blob([blob]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", `resume.pdf`);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        },
      });
    }

    if (documentId && file_type === "docx") {
      exportDocumentMutation(null, {
        onSuccess: (blob: any) => {
          const file = new Blob([blob], {
            type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          });
          const url = window.URL.createObjectURL(file);
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", `cover-letter.docx`);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        },
      });
    }
  };

  useEffect(() => {
    const handleWindowClick = () => {
      setOpen(false);
      setOpenFilter(false);
    };

    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  return (
    <section className="dashboard_card">
      {/* Upper Part */}
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between items-center">
        <h4 className="section_sub_title">All Documents</h4>
        <div className="flex gap-3 3xl:gap-5 items-center flex-wrap-reverse justify-center">
          {/* Search */}
          <p className="border rounded-full w-[350px] px-4 py-1.5 lg:py-2 xl:py-2.5 border-gray-200 flex gap-2 items-center">
            <span className="shrink-0">
              <SearchSvg />
            </span>
            <input
              type="text"
              value={searchDoc}
              placeholder="Search by document"
              className="w-full border-none outline-none"
              onChange={e => setSearchDoc(e.target.value)}
            />
          </p>

          {/* Filter */}
          <button
            onClick={e => {
              e.stopPropagation();
              setOpenFilter(!openFilter);
            }}
            className="flex gap-2 items-center cursor-pointer px-4 py-1.5 lg:py-2 xl:py-2.5 rounded-full border-gray-200 relative duration-500 transition-all hover:bg-black hover:text-white border hover:border-transparent text-light-gray"
          >
            <span className="shrink-0">
              <FilterSvg />
            </span>
            <span>Filter</span>

            {openFilter && (
              <div
                onClick={e => e.stopPropagation()}
                className="absolute top-14 right-0 w-[250px] bg-white shadow-lg border border-gray-50 rounded-lg p-5 z-50"
              >
                <div className="flex justify-between items-center font-medium text-secondary-black">
                  <h3>Filters</h3>
                </div>

                <hr className="text-gray-300 my-3" />

                <div className="space-y-3 text-sm text-secondary-gray">
                  <h3 className="font-medium text-left text-secondary-black text-base">
                    Document Type
                  </h3>

                  {/* Document Type */}
                  {[
                    { id: "all", label: "All", value: "" },
                    { id: "resume", label: "Resume", value: "Resume" },
                    {
                      id: "cover_letter",
                      label: "Cover Letter",
                      value: "Cover Letter",
                    },
                    {
                      id: "profile_summary",
                      label: "Profile Summary",
                      value: "profile summary",
                    },
                  ].map(option => (
                    <p key={option.id} className="flex gap-2 items-center">
                      <input
                        type="radio"
                        id={option.id}
                        name="document_type"
                        className="scale-125"
                        value={option.value}
                        checked={tempDocumentType === option.value}
                        onChange={e => setTempDocumentType(e.target.value)}
                      />
                      <label htmlFor={option.id}>{option.label}</label>
                    </p>
                  ))}
                </div>

                <hr className="text-gray-300 my-4" />

                {/* Progress Status */}
                <div className="space-y-3 text-sm text-secondary-gray mb-5">
                  <h3 className="font-medium text-left text-secondary-black text-base">
                    Progress Status
                  </h3>

                  {[
                    { id: "all_status", label: "All", value: "" },
                    { id: "complete", label: "Completed", value: "Completed" },
                    { id: "exported", label: "Exported", value: "Exported" },
                  ].map(option => (
                    <p key={option.id} className="flex gap-2 items-center">
                      <input
                        type="radio"
                        id={option.id}
                        name="progress_status"
                        className="scale-125"
                        value={option.value}
                        checked={tempStatus === option.value}
                        onChange={e => setTempStatus(e.target.value)}
                      />
                      <label htmlFor={option.id}>{option.label}</label>
                    </p>
                  ))}
                </div>

                <button
                  onClick={handleApplyChange}
                  className="block w-full bg-secondary-blue text-white font-medium rounded-lg cursor-pointer transition-transform hover:scale-105 duration-300 py-3"
                >
                  Apply Filters
                </button>
              </div>
            )}
          </button>

          {/* Reset */}
          <button
            onClick={() => {
              setSearchDoc("");
              setDocType("");
              setStatus("");
            }}
            className="px-4 py-2.5 rounded-full duration-500 transition-all hover:bg-black hover:text-white border hover:border-transparent border-gray-300 cursor-pointer text-gray-500 flex gap-2 items-center"
          >
            <GrPowerReset />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Table */}
      {isLoading ? (
        <table className="w-full border-separate border-spacing-y-8 text-sm 2xl:text-base">
          {Array.from({ length: 4 }).map((_, idx) => (
            <tbody key={idx}>
              <tr className="text-nowrap animate-pulse">
                <td className="px-3 2xl:px-4 flex gap-3 items-center">
                  <div className="w-11 h-11 rounded-full bg-gray-200" />
                  <div className="h-4 w-24 bg-gray-200 rounded" />
                </td>

                <td className="px-3 2xl:px-4">
                  <div className="h-4 w-32 bg-gray-200 rounded" />
                </td>

                <td className="px-3 2xl:px-4">
                  <div className="h-4 w-20 bg-gray-200 rounded" />
                </td>

                <td className="px-3 2xl:px-4">
                  <div className="h-6 w-16 bg-gray-200 rounded-lg" />
                </td>

                <td className="px-3 2xl:px-4 flex justify-center items-center">
                  <div className="h-6 w-6 bg-gray-200 rounded" />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      ) : allDocuments?.data?.data?.length > 0 ? (
        <div className="w-full overflow-x-auto mt-2.5 3xl:mt-5">
          <table className="w-full border-separate border-spacing-y-7 2xl:border-spacing-y-10 text-sm 2xl:text-base">
            <thead>
              <tr className="text-nowrap text-dark-blue text-base 2xl:text-lg capitalize">
                <td className="font-medium px-3 2xl:px-4">Document Type</td>
                <td className="font-medium px-3 2xl:px-4">Title</td>
                <td className="font-medium px-3 2xl:px-4">Date</td>
                <td className="font-medium px-3 2xl:px-4">Status</td>
                <td className="font-medium px-3 2xl:px-4 text-center">
                  Action
                </td>
              </tr>
            </thead>
            <tbody>
              {allDocuments?.data?.data?.map(
                (
                  {
                    id,
                    document_type,
                    title,
                    last_update,
                    status,
                    file_type,
                    document_file,
                  }: documentItem,
                  idx: number
                ) => (
                  <tr key={id} className="text-nowrap">
                    <td className="px-3 2xl:px-4 flex gap-3 items-center">
                      <p className="w-11 h-11 rounded-full grid place-items-center border-2 bg-[#cce6ff] border-secondary-blue">
                        <FileSvg />
                      </p>
                      <p className="text-secondary-black font-medium capitalize">
                        {document_type}
                      </p>
                    </td>

                    <td className="px-3 2xl:px-4">
                      <p className="text-secondary-black font-medium">
                        {title}
                      </p>
                    </td>

                    <td className="px-3 2xl:px-4">
                      <p className="text-secondary-black">
                        {moment(last_update).format("ll")}
                      </p>
                    </td>

                    <td className="px-3 2xl:px-4">
                      <span
                        className={`capitalize px-3 lg:px-4 py-1 lg:py-1.5 rounded-lg ${
                          status?.toLowerCase() === "exported"
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
                        } absolute top-5 right-20 p-3 border border-gray-100 bg-white rounded-lg shadow-lg space-y-2.5 z-40 w-[120px] text-sm ${
                          idx === allDocuments?.data?.data?.length - 1 &&
                          "!-top-28"
                        }`}
                      >
                        {/* View btn */}
                        {file_type === "pdf" && (
                          <button
                            onClick={() => handleView(document_file)}
                            className="flex gap-2 items-center cursor-pointer"
                          >
                            <FiEye />
                            <span>View</span>
                          </button>
                        )}

                        {/* Export btn */}
                        <button
                          disabled={isExporting}
                          onClick={() => handleExport(id, file_type)}
                          className={`flex gap-2 items-center cursor-pointer ${
                            isExporting && "!cursor-not-allowed"
                          }`}
                        >
                          <TbFileExport />
                          <span>{isExporting ? "Exporting" : "Export"}</span>
                        </button>

                        {/* Delete btn */}
                        <button
                          onClick={() => {
                            setDocumentId(id);
                            if (documentId) {
                              deleteDocumentMutation();
                            }
                          }}
                          className="flex gap-2 items-center cursor-pointer text-red-500"
                        >
                          <FiDelete />
                          <span>{isPending ? "Deleting" : "Delete"}</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-4 text-center py-20">
          <AiOutlineFileUnknown className="text-5xl text-gray-500" />
          <p className="font-medium text-gray-600">No documents found!!</p>
        </div>
      )}

      {/* Pagination */}
      {!isLoading && (
        <div className="mt-5 flex justify-center items-center gap-2 flex-wrap">
          {allDocuments?.data?.links.map((item: any, idx: number) => (
            <button
              key={idx}
              onClick={() => item.url && setActivePage(item.url.split("=")[1])}
              className={`px-3 py-1 rounded border transition-all duration-200 
        ${
          item.active ? "bg-primary-blue text-white" : "bg-white text-gray-700"
        } 
        ${!item.url ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
              disabled={!item.url}
              dangerouslySetInnerHTML={{ __html: item.label }}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default AllDocuments;
