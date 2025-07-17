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
              <span className="text-red-500 text-sm block mt-1 lg:mt-3 ps-2 lg:ps-5">
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
              <span className="text-red-500 text-sm block mt-1 lg:mt-3 ps-2 lg:ps-5">
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
