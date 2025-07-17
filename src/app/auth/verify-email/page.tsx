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
