"use client";
import { useState, useEffect } from "react";
import EditProfile from "./EditProfile";
import Notification from "./Notification";
import Subscription from "./Subscription";
import TermsOfService from "./TermsOfService";

const tabData = [
  { id: 1, label: "Edit profile", path: "edit-profile" },
  { id: 2, label: "Notification Settings", path: "notification" },
  { id: 3, label: "Subscription", path: "subscription" },
  { id: 4, label: "Terms of Service", path: "terms-of-service" },
];

export default function AccountTabs({
  package_id,
  termsData,
  pricingData,
}: any) {
  const [activeTab, setActiveTab] = useState("edit-profile");

  useEffect(() => {
    if (package_id) setActiveTab("subscription");
  }, [package_id]);

  return (
    <section className="space-y-8">
      {/* Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 2xl:gap-10">
        {tabData.map(({ id, label, path }) => (
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
      {activeTab === "subscription" && (
        <Subscription package_id={package_id} pricingData={pricingData} />
      )}
      {activeTab === "terms-of-service" && (
        <TermsOfService data={termsData?.data} />
      )}
    </section>
  );
}
