import React from "react";
import { PiWarningCircleLight } from "react-icons/pi";

const DeleteAccountModal = () => {
  return (
    <div className="flex flex-col items-center gap-5 text-center">
      <PiWarningCircleLight className="text-[100px] text-[#f8bb86]" />
      <h2 className="text-3xl font-medium text-dark-blue">Are you sure?</h2>
      <p className="text-primary-gray">You won't be able to revert this!</p>

      <div className="flex gap-4 items-center">
        <button className="px-5 py-2 lg:py-2.5 rounded-[50px] bg-red-600 font-medium text-white cursor-pointer">
          Delete Account
        </button>
        <button className="px-5 py-2 lg:py-2.5 rounded-[50px] bg-blue-500 font-medium text-white cursor-pointer">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteAccountModal;
