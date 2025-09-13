import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useUpdateUser } from "@/Hooks/api/auth_api";
import { CgSpinnerTwo } from "react-icons/cg";
import { ImSpinner9 } from "react-icons/im";
import useAuth from "@/Hooks/useAuth";
import { FaUser } from "react-icons/fa6";

const BasicInformation = () => {
  // Hook
  const { user } = useAuth();

  // State
  const [previewFile, setPreviewFile] = useState("");

  // Mutations
  const { mutateAsync: updateUserMutation, isPending } = useUpdateUser();
  const { mutateAsync: updateAvatarMutation, isPending: isChanging } =
    useUpdateUser();

  // Type
  type formData = {
    name: string;
    email: string;
  };

  // Form Data
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();

  const onSubmit = async (data: formData) => {
    await updateUserMutation(data);
  };

  useEffect(() => {
    if (previewFile) {
      const formData = new FormData();
      formData.append("avatar", previewFile);
      formData.append("name", user?.name);
      updateAvatarMutation(formData);
    }
  }, [previewFile]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="dashboard_card">
      <h4 className="section_sub_title">Basic Information</h4>
      <p className="section_sub_description !mb-6 2xl:!mb-10">
        This information will be displayed publicity so be careful what you
        share
      </p>
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
        <div className="flex-shrink-0 w-[150px]">
          <div className="relative w-fit mb-2.5 md:mb-5">
            <figure className="size-16 lg:size-28 rounded-full bg-[#E5E7EB] grid place-items-center relative">
              {isChanging ? (
                <ImSpinner9 className="animate-spin text-4xl text-primary-blue" />
              ) : user?.avatar ? (
                <Image
                  src={`${process.env.NEXT_PUBLIC_SITE_URL}/${user?.avatar}`}
                  fill
                  alt="profile image"
                  className="size-full rounded-full"
                />
              ) : (
                <FaUser className="text-4xl" />
              )}
            </figure>
          </div>

          <div>
            <label
              htmlFor="profile-upload"
              className="cursor-pointer text-secondary-blue text-sm md:text-base"
            >
              {!isChanging && "Change Photo"}
            </label>
            <input
              id="profile-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e: any) => {
                const file = e.target.files[0];
                setPreviewFile(file);
              }}
            />
          </div>
        </div>

        <div className="flex-grow">
          <div className="space-y-5 md:space-y-7">
            {/* Name */}
            <div>
              <label htmlFor="name" className="resume_label">
                Name*
              </label>
              <input
                type="text"
                defaultValue={user?.name}
                placeholder="Your Name"
                id="name"
                className="resume_input"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1.5">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="resume_label">
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                readOnly
                placeholder={user?.email}
                className="resume_input bg-gray-50"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Submit btn */}
      <div className="flex justify-end mt-8">
        <button
          type="submit"
          disabled={isPending}
          className={`primary-btn ${isPending && "!cursor-not-allowed"}`}
        >
          {isPending ? (
            <div className="flex gap-2 items-center">
              <CgSpinnerTwo className="animate-spin text-xl" />
              <span>Changing...</span>
            </div>
          ) : (
            "Apply Changes"
          )}
        </button>
      </div>
    </form>
  );
};

export default BasicInformation;
