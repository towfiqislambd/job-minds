"use client";
import { useState } from "react";
import Draft from "@/Components/Pages/dashboardPages/DocumentPageComponents/Draft";
import AllDocuments from "@/Components/Pages/dashboardPages/DocumentPageComponents/AllDocuments";
import RecentActivity from "@/Components/Pages/dashboardPages/DocumentPageComponents/RecentActivity";

const tabData = [
  { id: 1, label: "All Documents", path: "all-documents" },
  { id: 2, label: "Recent Activity", path: "recent-activity" },
  { id: 3, label: "Draft", path: "draft" },
];

const page = () => {
  // State
  const [activeTab, setActiveTab] = useState<string>("all-documents");

  return (
    <>
      {/* Title */}
      <h3 className="section_title">Documents History</h3>

      {/* Description */}
      <p className="section_description !max-w-full">
        Track your documents, filter by type, and monitor your application
        progress.
      </p>

      {/* Tabs */}
      <div className="flex md:inline-flex flex-col md:flex-row gap-3 items-center mt-5 3xl:mt-8 mb-5 md:mb-7 3xl:mb-10 p-2 md:border rounded-full md:border-gray-200 md:shadow">
        {tabData?.map(({ id, path, label }) => (
          <button
            key={id}
            onClick={() => setActiveTab(path)}
            className={`w-full md:w-fit block md:inline px-5 py-2.5 rounded-full cursor-pointer shadow ${
              activeTab === path
                ? "text-white bg-secondary-blue"
                : "text-dark bg-white"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === "all-documents" && <AllDocuments />}
      {activeTab === "recent-activity" && <RecentActivity />}
      {activeTab === "draft" && <Draft />}
    </>
  );
};

export default page;
