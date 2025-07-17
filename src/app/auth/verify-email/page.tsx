"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

type formData = {
  email: string;
};

const page = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();

  const onSubmit = (data: formData) => {
    console.log(data);
    router.push("/auth/verify-otp");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full pt-36 pb-10 flex items-center justify-center"
    >
      <div className="w-[700px] mx-auto px-24 h-auto py-14 bg-primary-off-blue rounded-[50px] flex flex-col gap-y-10">
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
            <span className="text-red-500 text-sm block mt-3 ps-5">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Sign up btn */}
        <button type="submit" className="auth-btn">
          Get OTP
        </button>
      </div>
    </form>
  );
};

export default page;
