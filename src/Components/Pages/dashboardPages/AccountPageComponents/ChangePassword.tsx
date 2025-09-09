"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { LuEye } from "react-icons/lu";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useChangePassword } from "@/Hooks/api/auth_api";
import { CgSpinnerTwo } from "react-icons/cg";

type FormData = {
  current_password: string;
  password: string;
  password_confirmation: string;
};

const ChangePassword = () => {
  // Mutations
  const { mutateAsync: passwordChangeMutation, isPending } =
    useChangePassword();

  // States
  const [showCurrentPassword, setShowCurrentPassword] =
    useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await passwordChangeMutation(data);
    reset();
  };

  const password = watch("password");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="dashboard_card">
      <h4 className="section_sub_title">Change Password</h4>
      <p className="section_sub_description !mb-5 2xl:!mb-10">
        Remember, your password and security details can be seen by others, so
        be cautious when sharing sensitive info.
      </p>

      <div className="space-y-5 2xl:space-y-7">
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
            className="absolute top-2.5 md:top-3 right-2 md:right-3 cursor-pointer"
            onClick={e => {
              e.preventDefault();
              setShowCurrentPassword(!showCurrentPassword);
            }}
          >
            {showCurrentPassword ? (
              <LuEye className="text-lg lg:text-2xl text-gray-500" />
            ) : (
              <FaRegEyeSlash className="text-lg lg:text-2xl text-gray-500" />
            )}
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-5 2xl:gap-7">
          {/* New Password */}
          <div className="flex-1 relative">
            <input
              type={showNewPassword ? "text" : "password"}
              placeholder="Enter New Password"
              className="resume_input !pr-12"
              {...register("password", {
                required: "New Password is required",
              })}
            />
            {errors.password && (
              <p className="text-sm text-red-500 mt-1.5">
                {errors.password.message}
              </p>
            )}
            <button
              className="absolute top-2.5 md:top-3 right-2 md:right-3 cursor-pointer"
              onClick={e => {
                e.preventDefault();
                setShowNewPassword(!showNewPassword);
              }}
            >
              {showNewPassword ? (
                <LuEye className="text-lg lg:text-2xl text-gray-500" />
              ) : (
                <FaRegEyeSlash className="text-lg lg:text-2xl text-gray-500" />
              )}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="flex-1 relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="resume_input !pr-12"
              {...register("password_confirmation", {
                required: "Confirm password is required",
                validate: value =>
                  value === password || "Passwords do not match",
              })}
            />
            {errors.password_confirmation && (
              <p className="text-sm text-red-500 mt-1.5">
                {errors.password_confirmation.message}
              </p>
            )}
            <button
              className="absolute top-2.5 md:top-3 right-2 md:right-3 cursor-pointer"
              onClick={e => {
                e.preventDefault();
                setShowConfirmPassword(!showConfirmPassword);
              }}
            >
              {showConfirmPassword ? (
                <LuEye className="text-lg lg:text-2xl text-gray-500" />
              ) : (
                <FaRegEyeSlash className="text-lg lg:text-2xl text-gray-500" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Submit btn */}
      <div className="flex justify-end mt-5 md:mt-8">
        <button
          disabled={isPending}
          type="submit"
          className={`primary-btn ${isPending && "!cursor-not-allowed"}`}
        >
          {isPending ? (
            <div className="flex gap-2 items-center">
              <CgSpinnerTwo className="animate-spin text-xl" />
              <span>Changing...</span>
            </div>
          ) : (
            "Apply Changes"
          )}
        </button>
      </div>
    </form>
  );
};

export default ChangePassword;
