"use client";
import { useEffect, useState } from "react";
import EditProfile from "@/Components/Pages/dashboardPages/AccountPageComponents/EditProfile";
import Subscription from "@/Components/Pages/dashboardPages/AccountPageComponents/Subscription";
import TermsOfService from "@/Components/Pages/dashboardPages/AccountPageComponents/TermsOfService";
import Notification from "@/Components/Pages/dashboardPages/AccountPageComponents/Notification";
import { useSearchParams } from "next/navigation";
const tabData = [
  { id: 1, label: "Edit profile", path: "edit-profile" },
  { id: 2, label: "Notification Settings", path: "notification" },
  { id: 3, label: "Subscription", path: "subscription" },
  { id: 4, label: "Terms of Service", path: "terms-of-service" },
];

const page = () => {
  const searchParams = useSearchParams();
  const package_id = searchParams.get("package_id");
  const [activeTab, setActiveTab] = useState<string>("edit-profile");

  useEffect(() => {
    if (package_id) {
      setActiveTab("subscription");
    }
  }, [package_id]);

  return (
    <section className="space-y-8">
      {/* Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 2xl:gap-10">
        {tabData?.map(({ id, label, path }) => (
          <button
            key={id}
            onClick={() => setActiveTab(path)}
            className={`text-sm md:text-[15px] 2xl:text-base text-light-gray pb-3 2xl:pb-5 border-b font-medium cursor-pointer ${
              activeTab === path
                ? "border-blue-700 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-400"
                : "border-gray-200"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === "edit-profile" && <EditProfile />}
      {activeTab === "notification" && <Notification />}
      {activeTab === "subscription" && <Subscription package_id={package_id} />}
      {activeTab === "terms-of-service" && <TermsOfService />}
    </section>
  );
};

export default page;
