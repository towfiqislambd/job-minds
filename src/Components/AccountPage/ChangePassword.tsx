"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { LuEye } from "react-icons/lu";
import { FaRegEyeSlash } from "react-icons/fa6";

type FormData = {
  current_password: string;
  new_password: string;
  confirm_password: string;
};

const ChangePassword = () => {
  const [showCurrentPassword, setShowCurrentPassword] =
    useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-7 bg-white shadow-box rounded-lg"
    >
      {/* Password & Security */}
      <h4 className="section_sub_title">Change Password</h4>
      <p className="section_sub_description !mb-10">
        Remember, your password and security details can be seen by others, so
        be cautious when sharing sensitive info.
      </p>

      <div className="space-y-7">
        {/* Current Password */}
        <div className="relative">
          <input
            type={showCurrentPassword ? "text" : "password"}
            placeholder="Enter Current Password"
            className="resume_input !pr-12"
            {...register("current_password", {
              required: "Current Password is required",
            })}
          />
          {errors.current_password && (
            <p className="text-sm text-red-500 mt-1.5">
              {errors.current_password.message}
            </p>
          )}

          <button
            className="absolute top-3 right-3 cursor-pointer"
            onClick={e => {
              e.preventDefault();
              setShowCurrentPassword(!showCurrentPassword);
            }}
          >
            {showCurrentPassword ? (
              <LuEye className="text-2xl text-gray-500" />
            ) : (
              <FaRegEyeSlash className="text-2xl text-gray-500" />
            )}
          </button>
        </div>

        <div className="flex gap-7">
          {/* New Password */}
          <div className="flex-1 relative">
            <input
              type={showNewPassword ? "text" : "password"}
              placeholder="Enter New Password"
              className="resume_input !pr-12"
              {...register("new_password", {
                required: "New Password is required",
              })}
            />
            {errors.new_password && (
              <p className="text-sm text-red-500 mt-1.5">
                {errors.new_password.message}
              </p>
            )}
            <button
              className="absolute top-3 right-3 cursor-pointer"
              onClick={e => {
                e.preventDefault();
                setShowNewPassword(!showNewPassword);
              }}
            >
              {showNewPassword ? (
                <LuEye className="text-2xl text-gray-500" />
              ) : (
                <FaRegEyeSlash className="text-2xl text-gray-500" />
              )}
            </button>
          </div>
          {/* Confirm Password */}
          <div className="flex-1 relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="resume_input !pr-12"
              {...register("confirm_password", {
                required: "Confirm Password is required",
              })}
            />
            {errors.confirm_password && (
              <p className="text-sm text-red-500 mt-1.5">
                {errors.confirm_password.message}
              </p>
            )}
            <button
              className="absolute top-3 right-3 cursor-pointer"
              onClick={e => {
                e.preventDefault();
                setShowConfirmPassword(!showConfirmPassword);
              }}
            >
              {showConfirmPassword ? (
                <LuEye className="text-2xl text-gray-500" />
              ) : (
                <FaRegEyeSlash className="text-2xl text-gray-500" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-8">
        {/* Apply btn */}
        <button
          type="submit"
          className="px-8 py-2.5 rounded-[50px] bg-gradient-to-r from-[#21489F] to-[#0184FF] text-white cursor-pointer"
        >
          Apply Changes
        </button>
      </div>
    </form>
  );
};

export default ChangePassword;
