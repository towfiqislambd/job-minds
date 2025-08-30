"use client";
import { Loader } from "@/Components/Loader/Loader";
import AllDocuments from "@/Components/Pages/dashboardPages/DocumentPageComponents/AllDocuments";
import Draft from "@/Components/Pages/dashboardPages/DocumentPageComponents/Draft";
import RecentActivity from "@/Components/Pages/dashboardPages/DocumentPageComponents/RecentActivity";
import {
  useAllDocuments,
  useAllRecentActivities,
} from "@/Hooks/api/dashboard_api";
import { useEffect, useState } from "react";
const tabData = [
  { id: 1, label: "All Documents", path: "all-documents" },
  { id: 2, label: "Recent Activity", path: "recent-activity" },
  { id: 3, label: "Draft", path: "draft" },
];

const page = () => {
  const [activeTab, setActiveTab] = useState<string>("all-documents");
  const { data: allRecentActivities, isLoading: recentDataLoading } =
    useAllRecentActivities();
  const { data: allDocuments, isLoading: documentDataLoading } =
    useAllDocuments();

  const isLoading = recentDataLoading || documentDataLoading;

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
      {activeTab === "recent-activity" && (
        <RecentActivity data={allRecentActivities?.data} />
      )}
      {activeTab === "all-documents" && (
        <AllDocuments data={allDocuments?.data} />
      )}
      {activeTab === "draft" && <Draft />}
    </>
  );
};

export default page;
