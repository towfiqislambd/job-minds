"use client";
import { useVerifyEmail } from "@/Hooks/auth_api";
import { useForm } from "react-hook-form";
import { CgSpinnerTwo } from "react-icons/cg";

type formData = {
  email: string;
};

const page = () => {
  const { mutateAsync: verifyEmailMutation, isPending } = useVerifyEmail();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();

  const onSubmit = async (data: formData) => {
    await verifyEmailMutation(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full min-h-screen flex items-center justify-center"
    >
      <div className="my-10 w-[calc(100%-30px)] md:w-[calc(100%-50px)] max-w-[700px] mx-auto px-5 md:px-10 py-5 md:py-12 lg:px-24 lg:py-14 bg-primary-off-blue rounded-3xl md:rounded-[50px] flex flex-col gap-y-5 md:gap-y-7 3xl:gap-y-10">
        <h2 className="auth-heading">Verify email address</h2>

        {/* Email Address */}
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

        {/* verify email */}
        <button
          disabled={isPending}
          type="submit"
          className={`auth-btn ${isPending && "!cursor-not-allowed"}`}
        >
          {isPending ? (
            <div className="flex gap-3 items-center">
              <CgSpinnerTwo className="animate-spin text-xl" />
              <span>Verifying...</span>
            </div>
          ) : (
            "Get OTP"
          )}
        </button>
      </div>
    </form>
  );
};

export default page;
