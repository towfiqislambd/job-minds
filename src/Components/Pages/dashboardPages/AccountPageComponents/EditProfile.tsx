"use client";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import Image from "next/image";
import ChangePassword from "./ChangePassword";
import BasicInformation from "./BasicInformation";
import { useLogout } from "@/Hooks/api/auth_api";
import { CgSpinnerTwo } from "react-icons/cg";
import useAuth from "@/Hooks/useAuth";
import DeleteAccountModal from "@/Components/Modals/DeleteAccountModal";
import Modal from "@/Components/Common/Modal";

const EditProfile = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { user } = useAuth();
  const { mutate: logoutMutation, isPending } = useLogout();

  return (
    <section className="space-y-5 2xl:space-y-7">
      {/* Premium Access */}
      <div className="dashboard_card">
        {/* Info */}
        <figure className="relative size-28 mx-auto border border-gray-50 rounded-full text-center bg-gray-200 grid place-items-center">
          {user?.avatar ? (
            <Image
              src={`${process.env.NEXT_PUBLIC_SITE_URL}/${user?.avatar}`}
              fill
              alt="profile image"
              className="size-full rounded-full"
            />
          ) : (
            <FaUser className="text-4xl" />
          )}
        </figure>

        <h4 className="text-center text-dark-blue text-lg mt-3 font-semibold leading-[132%] tracking-[-0.319px]">
          {user?.name}
        </h4>

        <p className="text-center text-light-gray text-sm leading-[164%] mb-5">
          {user?.email}
        </p>

        {/* Upgrade */}
        {user?.is_subscribed && (
          <div className="border py-2 px-3 md:px-4 rounded-xl flex items-center justify-between border-gray-200">
            <div className="space-y-2">
              <h4 className="text-secondary-blue text-lg font-semibold leading-[132%] tracking-[-0.319px] capitalize">
                {user?.subscription?.subscription_type}
              </h4>
              <p className="text-dark-blue font-semibold capitalize">
                €{user?.subscription?.price}/{user?.subscription?.type}
              </p>
            </div>
            <button className="px-3 py-1 text-sm rounded-full bg-secondary-blue text-white">
              Active
            </button>
          </div>
        )}
      </div>

      {/* Basic Information */}
      <BasicInformation />

      {/* Change Password */}
      <ChangePassword />

      {/* Logout / Delete*/}
      <div className="dashboard_card">
        <h4 className="section_sub_title">Log Out OR Delete Account </h4>
        <p className="section_sub_description max-w-[644px]">
          Hey there! If you want to say goodbye to your account, just head over
          to the Account Settings and hit the Delete Account option. It's super
          easy!
        </p>
        <p className="flex gap-2 items-center mb-5 md:mb-10">
          <input id="agree" type="checkbox" className="scale-110" />
          <label htmlFor="agree" className="text-light-gray text-sm">
            I have read and agree to the Terms and Conditions.
          </label>
        </p>
        <div className="flex flex-col md:flex-row md:justify-end gap-3 lg:gap-5 2xl:gap-6">
          {/* Delete btn */}
          <button
            onClick={() => setOpen(true)}
            className={`secondary-btn !border-red-500 !text-red-500`}
          >
            Delete Account
          </button>

          {/* Logout btn */}
          <button
            onClick={() => logoutMutation()}
            disabled={isPending}
            className={`px-6 lg:px-8 py-2 lg:py-2.5 rounded-[50px] !bg-red-600 font-medium text-white cursor-pointer ${
              isPending && "!cursor-not-allowed"
            }`}
          >
            {isPending ? (
              <div className="flex gap-2 items-center">
                <CgSpinnerTwo className="animate-spin text-xl" />
                <span>Logging out...</span>
              </div>
            ) : (
              "Log Out"
            )}
          </button>
        </div>
      </div>

      {/* Modals */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <DeleteAccountModal setOpen={setOpen} />
      </Modal>
    </section>
  );
};

export default EditProfile;
