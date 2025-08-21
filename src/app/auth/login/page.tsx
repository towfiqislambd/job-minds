"use client";
import { useLogin } from "@/Hooks/auth_api";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { CgSpinnerTwo } from "react-icons/cg";

type formData = {
  email: string;
  password: string;
};

const page = () => {
  const { mutateAsync: loginMutation, isPending } = useLogin();

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
      <div className="my-10 w-[calc(100%-30px)] md:w-[calc(100%-50px)] max-w-[700px] mx-auto px-5 md:px-10 py-5 md:py-12 lg:px-24 lg:py-14 bg-primary-off-blue rounded-3xl md:rounded-[50px] flex flex-col gap-y-5 md:gap-y-7 3xl:gap-y-10">
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
              <span className="text-red-500 text-sm block mt-1 lg:mt-3 ps-2 lg:ps-5">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              placeholder="Enter your Password"
              type="password"
              {...register("password", { required: "Password is required" })}
              className="auth-input"
            />
            {errors.password && (
              <span className="text-red-500 text-sm block mt-1 lg:mt-3 ps-2 lg:ps-5">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Forget Pass */}
          <Link
            href={"/auth/verify-email"}
            className="text-end font-normal text-sm md:text-base leading-[164%] text-primary-blue"
          >
            Forget Password?
          </Link>

          {/* Sign in btn */}
          <button
            disabled={isPending}
            type="submit"
            className={`auth-btn ${isPending && "!cursor-not-allowed"}`}
          >
            {isPending ? (
              <div className="flex gap-3 items-center">
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
        </div>
      </div>
    </form>
  );
};

export default page;
