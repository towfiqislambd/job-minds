"use client";
import { useDeleteAccount } from "@/Hooks/api/auth_api";
import React from "react";
import { CgSpinnerTwo } from "react-icons/cg";
import { PiWarningCircleLight } from "react-icons/pi";

const DeleteAccountModal = ({ setOpen }: any) => {
  const { mutate: deleteAccountMutation, isPending } = useDeleteAccount();

  return (
    <div className="flex flex-col items-center gap-5 text-center">
      <PiWarningCircleLight className="text-[100px] text-[#f8bb86]" />
      <h2 className="text-3xl font-medium text-dark-blue">Are you sure?</h2>
      <p className="text-primary-gray">
        You want to delete the account permanently?
      </p>

      <div className="flex gap-4 items-center">
        <button
          onClick={() => deleteAccountMutation()}
          disabled={isPending}
          className={`px-5 py-2 lg:py-2.5 rounded-full bg-red-600 text-[15px] font-medium text-white cursor-pointer ${
            isPending && "cursor-not-allowed"
          }`}
        >
          {isPending ? (
            <div className="flex gap-2 items-center">
              <CgSpinnerTwo className="animate-spin text-white text-xl" />
              <span>Please wait...</span>
            </div>
          ) : (
            "Delete Permanently"
          )}
        </button>
        <button
          onClick={() => setOpen(false)}
          className="px-5 py-2 lg:py-2.5 text-[15px] rounded-[50px] bg-blue-500 font-medium text-white cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteAccountModal;
