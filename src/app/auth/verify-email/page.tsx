"use client";
import { useVerifyEmail } from "@/Hooks/api/auth_api";
import { useForm } from "react-hook-form";
import { CgSpinnerTwo } from "react-icons/cg";

type formData = {
  email: string;
};

const page = () => {
  // Mutation
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
      <div className="auth_box">
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
            <span className="form-error">{errors.email.message}</span>
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
