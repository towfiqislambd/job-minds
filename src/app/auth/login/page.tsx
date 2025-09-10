"use client";
import { useLogin } from "@/Hooks/api/auth_api";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CgSpinnerTwo } from "react-icons/cg";
import { LuEye } from "react-icons/lu";
import { FaRegEyeSlash } from "react-icons/fa6";

type formData = {
  email: string;
  password: string;
};

const page = () => {
  // Mutation
  const { mutateAsync: loginMutation, isPending } = useLogin();

  // State
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();

  const onSubmit = async (data: formData) => {
    await loginMutation(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full min-h-screen flex items-center justify-center"
    >
      <div className="auth_box">
        <h2 className="auth-heading">Log In</h2>

        <div className="flex flex-col gap-y-4 md:gap-y-5 3xl:gap-y-7">
          {/* Email */}
          <div>
            <input
              placeholder="Enter your email address"
              type="email"
              {...register("email", { required: "Email is required" })}
              className="auth-input"
            />
            {errors.email && (
              <span className="form-error">{errors.email.message}</span>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <input
              placeholder="Enter your Password"
              type={showPassword ? "text" : "password"}
              {...register("password", { required: "Password is required" })}
              className="auth-input !pr-8 md:!pr-10 lg:!pr-14"
            />
            {errors.password && (
              <span className="form-error">{errors.password.message}</span>
            )}
            <button
              className="absolute top-2.5 md:top-3.5 lg:top-5 right-2 md:right-3 lg:right-5 cursor-pointer"
              onClick={e => {
                e.preventDefault();
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? (
                <LuEye className="text-lg lg:text-2xl text-gray-500" />
              ) : (
                <FaRegEyeSlash className="text-lg lg:text-2xl text-gray-500" />
              )}
            </button>
          </div>

          {/* Forget Pass */}
          <Link
            href={"/auth/verify-email"}
            className="text-end font-normal text-sm md:text-base leading-[164%] text-primary-blue"
          >
            Forget Password?
          </Link>

          {/* Submit btn */}
          <button
            disabled={isPending}
            type="submit"
            className={`auth-btn ${isPending && "!cursor-not-allowed"}`}
          >
            {isPending ? (
              <div className="flex gap-2 items-center">
                <CgSpinnerTwo className="animate-spin text-xl" />
                <span>Logging in...</span>
              </div>
            ) : (
              "Log In"
            )}
          </button>

          {/* Don't have an account */}
          <div className="flex justify-center text-sm md:text-base lg:text-lg text-center gap-2">
            <p className="text-[#666565] leading-[164%]">
              Don't have an account?
            </p>
            <Link
              href="/auth/sign-up"
              className="text-primary-blue cursor-pointer"
            >
              Sign Up
            </Link>
          </div>

          {/* Back to home */}
          <div className="flex justify-center text-center -mt-2">
            <Link
              href="/"
              className="text-primary-blue cursor-pointer underline text-sm lg:text-base"
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default page;
