"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

type formData = {
  password: string;
  new_password: string;
};

const page = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<formData>();

  const onSubmit = (data: formData) => {
    console.log(data);
    router.push("/");
  };

  const password = watch("password");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full pt-36 pb-10 flex items-center justify-center"
    >
      <div className="w-[700px] mx-auto px-24 h-auto py-14 bg-primary-off-blue rounded-[50px] flex flex-col gap-y-10">
        <h2 className="auth-heading">Reset password</h2>

        <div className="flex flex-col gap-y-7">
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
              <span className="text-red-500 text-sm block mt-3 ps-5">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <input
              placeholder="Confirm New Password"
              type="password"
              {...register("new_password", {
                required: "Confirm Password is required",
                validate: value =>
                  value === password || "Passwords do not match",
              })}
              className="auth-input"
            />
            {errors.new_password && (
              <span className="text-red-500 text-sm block mt-3 ps-5">
                {errors.new_password.message}
              </span>
            )}
          </div>

          {/* Sign up btn */}
          <button type="submit" className="auth-btn">
            Reset Password
          </button>
        </div>
      </div>
    </form>
  );
};

export default page;
