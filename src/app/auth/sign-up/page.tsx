"use client";
import { useRegister } from "@/Hooks/api/auth_api";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { CgSpinnerTwo } from "react-icons/cg";

type formData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  agree_to_terms: number;
};

const Page = () => {
  // Mutation
  const { mutateAsync: registerMutation, isPending } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<formData>();

  const onSubmit = async (data: formData) => {
    await registerMutation(data);
  };

  const password = watch("password");

  return (
    <form
      className="w-full min-h-screen flex items-center justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="my-10 w-[calc(100%-30px)] md:w-[calc(100%-50px)] max-w-[700px] mx-auto px-5 md:px-10 py-5 md:py-12 lg:px-24 lg:py-14 bg-primary-off-blue rounded-3xl md:rounded-[50px] flex flex-col gap-y-5 md:gap-y-7 3xl:gap-y-10">
        <h2 className="auth-heading">Sign Up</h2>

        <div className="flex flex-col gap-y-4 md:gap-y-5 3xl:gap-y-7">
          {/* Name */}
          <div>
            <input
              placeholder="Enter your Name"
              type="text"
              {...register("name", { required: "Name is required" })}
              className="auth-input"
            />
            {errors.name && (
              <span className="form-error">{errors.name.message}</span>
            )}
          </div>

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
          <div>
            <input
              placeholder="Enter your Password"
              type="password"
              {...register("password", { required: "Password is required" })}
              className="auth-input"
            />
            {errors.password && (
              <span className="form-error">{errors.password.message}</span>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <input
              placeholder="Confirm your Password"
              type="password"
              {...register("password_confirmation", {
                required: "Please confirm your password",
                validate: value =>
                  value === password || "Passwords do not match",
              })}
              className="auth-input"
            />
            {errors.password_confirmation && (
              <span className="form-error">
                {errors.password_confirmation.message}
              </span>
            )}
          </div>

          {/* Terms and Condition */}
          <div>
            <p className="flex gap-2 items-center">
              <input
                id="agree"
                type="checkbox"
                className="scale-110"
                value="1"
                {...register("agree_to_terms", {
                  required: "You must agree to the terms",
                  setValueAs: v => (v ? 1 : 0),
                })}
              />
              <label
                htmlFor="agree"
                className="text-light-gray text-sm md:text-base"
              >
                I have read and agree to the Terms and Conditions.
              </label>
            </p>
            {errors.agree_to_terms && (
              <span className="form-error">
                {errors.agree_to_terms.message}
              </span>
            )}
          </div>

          {/* Submit btn */}
          <button
            disabled={isPending}
            type="submit"
            className={`auth-btn ${isPending && "!cursor-not-allowed"}`}
          >
            {isPending ? (
              <div className="flex gap-2 items-center">
                <CgSpinnerTwo className="animate-spin text-xl" />
                <span>Signing up...</span>
              </div>
            ) : (
              " Sign Up"
            )}
          </button>

          {/* Already have an account */}
          <div className="flex justify-center text-center text-sm md:text-base lg:text-lg gap-2">
            <p className="text-[#666565] leading-[164%] capitalize">
              Already Have an account?
            </p>
            <Link
              href="/auth/login"
              className="text-primary-blue cursor-pointer"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Page;
