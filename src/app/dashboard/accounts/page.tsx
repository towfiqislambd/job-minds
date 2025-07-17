"use client";
import { useState } from "react";
import EditProfile from "@/Components/AccountPage/EditProfile";
import Notification from "@/Components/AccountPage/Notification";
import Subscription from "@/Components/AccountPage/Subscription";
import TermsOfService from "@/Components/AccountPage/TermsOfService";

const page = () => {
  const [activeTab, setActiveTab] = useState<string>("edit-profile");
  const activeClass =
    "border-blue-700 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-400";

  return (
    <section className="space-y-8">
      {/* Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 2xl:gap-10">
        <button
          onClick={() => setActiveTab("edit-profile")}
          className={`text-sm md:text-[15px] 2xl:text-base text-light-gray pb-3 2xl:pb-5 border-b font-medium cursor-pointer ${
            activeTab === "edit-profile" ? activeClass : "border-gray-200"
          }`}
        >
          Edit profile
        </button>
        <button
          onClick={() => setActiveTab("notification")}
          className={`text-sm md:text-[15px] 2xl:text-base text-light-gray pb-3 2xl:pb-5 border-b font-medium cursor-pointer ${
            activeTab === "notification" ? activeClass : "border-gray-200"
          }`}
        >
          Notification Settings
        </button>
        <button
          onClick={() => setActiveTab("subscription")}
          className={`text-sm md:text-[15px] 2xl:text-base text-light-gray pb-3 2xl:pb-5 border-b font-medium cursor-pointer ${
            activeTab === "subscription" ? activeClass : "border-gray-200"
          }`}
        >
          Subscription
        </button>
        <button
          onClick={() => setActiveTab("terms-of-service")}
          className={`text-sm md:text-[15px] 2xl:text-base text-light-gray pb-3 2xl:pb-5 border-b font-medium cursor-pointer ${
            activeTab === "terms-of-service" ? activeClass : "border-gray-200"
          }`}
        >
          Terms of Service
        </button>
      </div>

      {/* Content */}
      {activeTab === "edit-profile" && <EditProfile />}
      {activeTab === "notification" && <Notification />}
      {activeTab === "subscription" && <Subscription />}
      {activeTab === "terms-of-service" && <TermsOfService />}
    </section>
  );
};

export default page;
