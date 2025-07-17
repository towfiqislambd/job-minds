"use client";
import AllDocuments from "@/Components/DocumentPage/AllDocuments";
import RecentActivity from "@/Components/DocumentPage/RecentActivity";
import { useState } from "react";

const page = () => {
  const [activeTab, setActiveTab] = useState<string>("recent-activity");

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
        {/* Recent Activity */}
        <button
          onClick={() => setActiveTab("recent-activity")}
          className={`w-full md:w-fit block md:inline px-5 py-2.5 rounded-full cursor-pointer shadow ${
            activeTab === "recent-activity"
              ? "text-white bg-secondary-blue"
              : "text-dark bg-white"
          }`}
        >
          Recent Activity
        </button>

        {/* All Documents */}
        <button
          onClick={() => setActiveTab("all-documents")}
          className={`w-full md:w-fit block md:inline px-5 py-2.5 rounded-full cursor-pointer shadow ${
            activeTab === "all-documents"
              ? "text-white bg-secondary-blue"
              : "text-dark bg-white"
          }`}
        >
          All Documents
        </button>
      </div>

      {/* Content */}
      {activeTab === "recent-activity" && <RecentActivity />}
      {activeTab === "all-documents" && <AllDocuments />}
    </>
  );
};

export default page;
