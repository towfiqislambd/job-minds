"use client";
import React from "react";
import profileImg from "@/assets/images/dashboard/profile.jpg";
import Image from "next/image";
import ChangePassword from "./ChangePassword";
import BasicInformation from "./BasicInformation";

const EditProfile = () => {
  return (
    <section className="space-y-5 2xl:space-y-7">
      {/* Premium Access */}
      <div className="p-7 bg-white shadow-box rounded-lg">
        <Image
          src={profileImg}
          alt="profile image"
          className="w-28 h-28 rounded-full mx-auto"
        />
        <h4 className="text-center text-dark-blue text-lg mt-3 font-semibold leading-[132%] tracking-[-0.319px]">
          Antonio Renders
        </h4>
        <p className="text-center text-light-gray text-sm leading-[164%] mb-5">
          R@renders.antonio
        </p>
        <div className="border py-2 px-4 rounded-xl flex items-center justify-between border-gray-200">
          <div className="space-y-2">
            <h4 className="text-center text-secondary-blue text-lg mt-3 font-semibold leading-[132%] tracking-[-0.319px]">
              Antonio Renders
            </h4>
            <p className="text-dark-blue font-semibold">€9.9/Month</p>
          </div>
          <button className="px-3 py-1 text-sm rounded-full bg-secondary-blue text-white">
            Upgrade
          </button>
        </div>
      </div>

      {/* Basic Information */}
      <BasicInformation />

      {/* Change Password */}
      <ChangePassword />

      {/* Logout / Delete*/}
      <div className="p-7 bg-white shadow-box rounded-lg">
        <h4 className="section_sub_title">Log Out OR Delete Account </h4>
        <p className="section_sub_description max-w-[644px]">
          Hey there! If you want to say goodbye to your account, just head over
          to the Account Settings and hit the Delete Account option. It's super
          easy!
        </p>
        <p className="flex gap-2 items-center mb-10">
          <input id="agree" type="checkbox" className="scale-110" />
          <label htmlFor="agree" className="text-light-gray text-sm">
            I have read and agree to the Terms and Conditions.
          </label>
        </p>
        <div className="flex justify-end gap-5 2xl:gap-6">
          {/* Delete btn */}
          <button className="secondary-btn !border-red-500 !text-red-500">
            Delete Account
          </button>

          {/* Logout btn */}
          <button className="px-12 py-2.5 rounded-[50px] !bg-red-600 font-medium text-white cursor-pointer">
            Log Out
          </button>
        </div>
      </div>
    </section>
  );
};

export default EditProfile;
