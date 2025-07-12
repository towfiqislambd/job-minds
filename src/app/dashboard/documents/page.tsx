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
      <div className="inline-flex gap-3 items-center mt-8 mb-10 p-2 border rounded-full border-gray-200 shadow">
        {/* Recent Activity */}
        <button
          onClick={() => setActiveTab("recent-activity")}
          className={`px-5 py-2.5 rounded-full cursor-pointer shadow ${
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
          className={`px-5 py-2.5 rounded-full cursor-pointer shadow ${
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
