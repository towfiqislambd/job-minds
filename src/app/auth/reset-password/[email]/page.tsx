"use client";
import { useResetPassword } from "@/Hooks/api/auth_api";
import { useForm } from "react-hook-form";
import { CgSpinnerTwo } from "react-icons/cg";

type formData = {
  password: string;
  password_confirmation: string;
};

const page = ({ params }: any) => {
  const { email } = params;
  const { mutateAsync: verifyOtpMutation, isPending } = useResetPassword();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<formData>();

  const onSubmit = async (data: formData) => {
    const payload = { email: decodeURIComponent(email), ...data };
    await verifyOtpMutation(payload);
  };

  const password = watch("password");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full min-h-screen flex items-center justify-center"
    >
      <div className="my-10 w-[calc(100%-30px)] md:w-[calc(100%-50px)] max-w-[700px] mx-auto px-5 md:px-10 py-5 md:py-12 lg:px-24 lg:py-14 bg-primary-off-blue rounded-3xl md:rounded-[50px] flex flex-col gap-y-5 md:gap-y-7 3xl:gap-y-10">
        <h2 className="auth-heading">Reset password</h2>

        <div className="flex flex-col gap-y-5 3xl:gap-y-7">
          {/* New Password */}
          <div>
            <input
              placeholder="Create New Password"
              type="password"
              {...register("password", {
                required: "New Password is required",
              })}
              className="auth-input"
            />
            {errors.password && (
              <span className="form-error">{errors.password.message}</span>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <input
              placeholder="Confirm New Password"
              type="password"
              {...register("password_confirmation", {
                required: "Confirm Password is required",
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

          {/* Submit btn */}
          <button
            disabled={isPending}
            type="submit"
            className={`auth-btn ${isPending && "!cursor-not-allowed"}`}
          >
            {isPending ? (
              <div className="flex gap-2 items-center">
                <CgSpinnerTwo className="animate-spin text-xl" />
                <span>Changing...</span>
              </div>
            ) : (
              "Reset Password"
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default page;
