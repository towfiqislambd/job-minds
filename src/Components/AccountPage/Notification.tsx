import React, { useState } from "react";
import { EmailSvg, NotificationSvg } from "../SvgContainer/SvgContainer";

const Notification = () => {
  const [mailEnabled, setMailEnabled] = useState(false);
  const [notificationEnabled, setNotificationEnabled] = useState(false);
  const [applicationEnabled, setApplicationEnabled] = useState(false);
  const [interviewEnabled, setInterviewEnabled] = useState(false);
  const [subscriptionEnabled, setSubscriptionEnabled] = useState(false);

  return (
    <section className="dashboard_card">
      {/* Title */}
      <h4 className="section_sub_title">Notifications & Reminders</h4>

      {/* Desc */}
      <p className="section_sub_description">
        This information will be displayed publicity so be careful what you
        share
      </p>

      {/* Email Notification */}
      <div className="border border-gray-200 rounded-lg p-3.5 text-sm lg:text-base lg:p-5 flex justify-between items-center">
        {/* Left */}
        <div className="flex gap-3 items-center">
          <EmailSvg />
          <p className="text-dark-blue font-semibold capitalize">
            Email Notifications
          </p>
        </div>

        {/* Right */}
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={mailEnabled}
            onChange={() => setMailEnabled(!mailEnabled)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-300 peer-checked:bg-blue-600 rounded-full transition-all duration-300"></div>
          <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 transform peer-checked:translate-x-5"></div>
        </label>
      </div>

      {/* Notification */}
      <div className="mt-3 lg:mt-6 border border-gray-200 rounded-lg p-3.5 text-sm lg:text-base lg:p-5 flex justify-between items-center">
        {/* Left */}
        <div className="flex gap-3 items-center">
          <NotificationSvg />
          <p className="text-dark-blue font-semibold capitalize">
            Notifications
          </p>
        </div>

        {/* Right */}
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={notificationEnabled}
            onChange={() => setNotificationEnabled(!notificationEnabled)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-300 peer-checked:bg-blue-600 rounded-full transition-all duration-300"></div>
          <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 transform peer-checked:translate-x-5"></div>
        </label>
      </div>

      <p className="text-light-gray py-4 lg:py-7">Reminders</p>

      {/* Application deadlines */}
      <div className="border border-gray-200 rounded-lg p-3.5 text-sm lg:text-base lg:p-5 flex justify-between items-center">
        <p className="text-dark-blue font-semibold capitalize">
          Application deadlines
        </p>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={applicationEnabled}
            onChange={() => setApplicationEnabled(!applicationEnabled)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-300 peer-checked:bg-blue-600 rounded-full transition-all duration-300"></div>
          <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 transform peer-checked:translate-x-5"></div>
        </label>
      </div>

      {/* Interview preparation */}
      <div className="mt-3 lg:mt-6 border border-gray-200 rounded-lg p-3.5 text-sm lg:text-base lg:p-5 flex justify-between items-center">
        <p className="text-dark-blue font-semibold capitalize">
          Interview preparation
        </p>

        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={interviewEnabled}
            onChange={() => setInterviewEnabled(!interviewEnabled)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-300 peer-checked:bg-blue-600 rounded-full transition-all duration-300"></div>
          <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 transform peer-checked:translate-x-5"></div>
        </label>
      </div>

      {/* Expiring subscriptions */}
      <div className="mt-3 lg:mt-6 border border-gray-200 rounded-lg p-3.5 text-sm lg:text-base lg:p-5 flex justify-between items-center">
        <p className="text-dark-blue font-semibold capitalize">
          Expiring subscriptions
        </p>

        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={subscriptionEnabled}
            onChange={() => setSubscriptionEnabled(!subscriptionEnabled)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-300 peer-checked:bg-blue-600 rounded-full transition-all duration-300"></div>
          <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 transform peer-checked:translate-x-5"></div>
        </label>
      </div>
    </section>
  );
};

export default Notification;
