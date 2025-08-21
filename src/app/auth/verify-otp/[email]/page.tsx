"use client";
import { useResendOTP, useVerifyOTP } from "@/Hooks/auth_api";
import { Controller, useForm } from "react-hook-form";
import { CgSpinnerTwo } from "react-icons/cg";
import OTPInput from "react-otp-input";

type formData = {
  otp: string;
};

const page = ({ params }: any) => {
  const { email } = params;
  const { mutateAsync: verifyOtpMutation, isPending } = useVerifyOTP();
  const { mutate: resendOtpMutation, isPending: isSending } = useResendOTP();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();

  const onSubmit = async (data: formData) => {
    const payload = { email: decodeURIComponent(email), ...data };
    await verifyOtpMutation(payload);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full min-h-screen flex items-center justify-center"
    >
      <div className="my-10 w-[calc(100%-30px)] md:w-[calc(100%-50px)] max-w-[700px] mx-auto px-5 md:px-10 py-5 md:py-12 lg:px-24 lg:py-14 bg-primary-off-blue rounded-3xl md:rounded-[50px] flex flex-col gap-y-5 md:gap-y-7 3xl:gap-y-10">
        <h2 className="auth-heading">Verify your otp</h2>

        {/* OTP Input */}
        <div>
          <Controller
            name="otp"
            control={control}
            rules={{
              required: "OTP is required",
              minLength: { value: 4, message: "OTP must be 4 digits" },
            }}
            render={({ field }) => (
              <OTPInput
                {...field}
                value={field.value || ""}
                onChange={field.onChange}
                numInputs={4}
                renderInput={props => <input {...props} />}
                containerStyle={"flex items-center justify-center gap-6"}
                inputStyle={`!w-[50px] md:!w-[90px] mx-auto xl:!w-[110px] !h-[50px] md:!h-[70px] xl:!h-[90px] border border-[#0184FF] md:rounded-[30px] !bg-plan-card rounded-[8px] text-lg md:text-xl lg:text-3xl font-medium text-[#071431] bg-[linear-gradient(90deg,_rgba(33,72,159,0.15)_0%,_rgba(1,132,255,0.15)_100%)]`}
              />
            )}
          />
          {errors.otp && (
            <p className="text-red-500 text-center text-sm md:text-base mt-2 lg:mt-3">
              {errors.otp.message}
            </p>
          )}
        </div>

        {/* Resend Code */}
        <div className="flex justify-center text-sm md:text-lg text-center gap-2">
          <p className="text-[#666565] leading-[164%]">Don’t get the code?</p>
          <button
            onClick={e => {
              e.preventDefault();
              resendOtpMutation({ email: decodeURIComponent(email) });
            }}
            className="text-primary-blue cursor-pointer"
          >
            {isSending ? "Sending...." : "Resend"}
          </button>
        </div>

        {/* verify otp */}
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
            "Verify OTP"
          )}
        </button>
      </div>
    </form>
  );
};

export default page;
