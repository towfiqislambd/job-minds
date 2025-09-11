"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { LuEye } from "react-icons/lu";
import { useForm } from "react-hook-form";
import { CgSpinnerTwo } from "react-icons/cg";
import { useLogin } from "@/Hooks/api/auth_api";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useGoogleLogin } from "@react-oauth/google";
import { useGoogleLoginFunc } from "@/Hooks/api/auth_api";
import { GoogleLogo } from "@/Components/SvgContainer/SvgContainer";

type formData = {
  email: string;
  password: string;
};

const page = () => {
  // State
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // Mutation
  const { mutateAsync: loginMutation, isPending } = useLogin();
  const { mutateAsync: googleLoginMutation } = useGoogleLoginFunc();

  // Form Data
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();

  const onSubmit = async (data: formData) => {
    await loginMutation(data);
  };

  // Google Login
  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async tokenResponse => {
      const token = tokenResponse.access_token;
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_GOOGLE_URL}/oauth2/v2/userinfo`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const updatedData = {
        token,
        provider: "google",
        username: data?.name,
        email: data?.email,
        avatar: data?.picture,
      };

      await googleLoginMutation(updatedData);
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full min-h-screen flex items-center justify-center"
    >
      <div className="auth_box">
        <h2 className="auth-heading">Log In</h2>

        <div className="flex flex-col gap-y-4 md:gap-y-5 3xl:gap-y-6">
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
            className={`auth-btn !w-full !block ${
              isPending && "!cursor-not-allowed"
            }`}
          >
            {isPending ? (
              <div className="flex gap-2 items-center justify-center">
                <CgSpinnerTwo className="animate-spin text-xl" />
                <span>Logging in...</span>
              </div>
            ) : (
              "Log In"
            )}
          </button>

          <hr className="text-gray-300" />

          {/* Google Login */}
          <button
            type="button"
            onClick={() => handleGoogleLogin()}
            className="py-2.5 md:py-4.5 bg-white rounded-[50px] cursor-pointer border border-[#eee] flex gap-3 items-center justify-center"
          >
            <GoogleLogo />
            <p className="leading-[140%] font-medium text-black-gray text-sm md:text-base">
              Continue with Google
            </p>
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
