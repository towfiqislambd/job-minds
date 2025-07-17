"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

type formData = {
  email: string;
  password: string;
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
    router.push("/dashboard/resume-builder");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full pt-36 pb-10 flex items-center justify-center"
    >
      <div className="w-[700px] mx-auto px-24 h-auto py-14 bg-primary-off-blue rounded-[50px] flex flex-col gap-y-10">
        <h2 className="auth-heading">Log In</h2>

        <div className="flex flex-col gap-y-7">
          {/* Email */}
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

          {/* Password */}
          <div>
            <input
              placeholder="Enter your Password"
              type="password"
              {...register("password", { required: "Password is required" })}
              className="auth-input"
            />
            {errors.password && (
              <span className="text-red-500 text-sm block mt-3 ps-5">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Forget Pass */}
          <Link
            href={"/auth/verify-email"}
            className="text-end font-normal leading-[164%] text-primary-blue"
          >
            Forget Password?
          </Link>

          {/* Sign up btn */}
          <button type="submit" className="auth-btn">
            Log In
          </button>

          {/* Don't have an account */}
          <div className="flex justify-center text-lg text-center gap-2">
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
