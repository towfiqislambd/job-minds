import {
  EmailSvg,
  NotificationSvg,
} from "@/Components/SvgContainer/SvgContainer";
import {
  useApplicationDeadline,
  useEmailNotification,
  useExpiringSubscription,
  useNormalNotification,
} from "@/Hooks/api/dashboard_api";
import useAuth from "@/Hooks/useAuth";
import React from "react";

const Notification = () => {
  const { user } = useAuth();
  const { mutate: emailNotificationMutation, isPending } =
    useEmailNotification();
  const { mutate: normalNotificationMutation, isPending: isWorking } =
    useNormalNotification();
  const { mutate: expiringSubscriptionMutation, isPending: isExpiring } =
    useExpiringSubscription();
  const { mutate: applicationDeadlineMutation, isPending: isApplying } =
    useApplicationDeadline();

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
      <div
        className={`border border-gray-200 rounded-lg p-3.5 text-sm lg:text-base lg:p-5 flex justify-between items-center ${
          isPending && "bg-gray-50"
        }`}
      >
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
            checked={user?.is_email_notification}
            onChange={() => emailNotificationMutation()}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-300 peer-checked:bg-blue-600 rounded-full transition-all duration-300" />
          <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 transform peer-checked:translate-x-5" />
        </label>
      </div>

      {/* Notification */}
      <div
        className={`mt-3 lg:mt-6  border border-gray-200 rounded-lg p-3.5 text-sm lg:text-base lg:p-5 flex justify-between items-center ${
          isWorking && "bg-gray-50"
        }`}
      >
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
            checked={user?.is_notification}
            onChange={() => normalNotificationMutation()}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-300 peer-checked:bg-blue-600 rounded-full transition-all duration-300" />
          <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 transform peer-checked:translate-x-5" />
        </label>
      </div>

      <p className="text-light-gray py-4 lg:py-7">Reminders</p>

      {/* Application deadlines */}
      <div
        className={`border border-gray-200 rounded-lg p-3.5 text-sm lg:text-base lg:p-5 flex justify-between items-center ${
          isApplying && "bg-gray-50"
        }`}
      >
        <p className="text-dark-blue font-semibold capitalize">
          Application deadlines
        </p>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={user?.is_application_deadline}
            onChange={() => applicationDeadlineMutation()}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-300 peer-checked:bg-blue-600 rounded-full transition-all duration-300" />
          <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 transform peer-checked:translate-x-5" />
        </label>
      </div>

      {/* Expiring subscriptions */}
      <div
        className={`mt-3 lg:mt-6 border border-gray-200 rounded-lg p-3.5 text-sm lg:text-base lg:p-5 flex justify-between items-center ${
          isExpiring && "bg-gray-50"
        }`}
      >
        <p className="text-dark-blue font-semibold capitalize">
          Expiring subscriptions
        </p>

        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={user?.is_expiring_subscription}
            onChange={() => expiringSubscriptionMutation()}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-300 peer-checked:bg-blue-600 rounded-full transition-all duration-300" />
          <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 transform peer-checked:translate-x-5" />
        </label>
      </div>
    </section>
  );
};

export default Notification;
