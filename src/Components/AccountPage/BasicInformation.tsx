import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import profileImg from "@/assets/images/dashboard/profile.jpg";

const BasicInformation = () => {
  const [previewImage, setPreviewImage] = useState("");

  type formData = {
    name: string;
    email: string;
    phone: number;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();

  const onSubmit = async (data: formData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="dashboard_card">
      <h4 className="section_sub_title">Basic Information</h4>
      <p className="section_sub_description !mb-6 2xl:!mb-10">
        This information will be displayed publicity so be careful what you
        share
      </p>
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
        <div className="flex-shrink-0 w-[150px]">
          <div className="relative w-fit mb-5">
            <div className="lg:w-[100px] w-16 lg:h-[100px] h-16 rounded-full bg-[#E5E7EB] flex items-center justify-center overflow-hidden">
              {previewImage ? (
                <Image
                  width={100}
                  height={100}
                  src={previewImage}
                  alt="Profile Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  width={100}
                  height={100}
                  src={profileImg}
                  alt="Profile Preview"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
          <label htmlFor="profile-upload">
            <div className="cursor-pointer text-secondary-blue">
              Change Photo
            </div>
            <input
              id="profile-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e: any) => {
                const file = e.target.files[0];
                if (file) {
                  const imageURL = URL.createObjectURL(file);
                  setPreviewImage(imageURL);
                }
              }}
            />
          </label>
        </div>
        <div className="flex-grow">
          <div className="space-y-7">
            {/* Name */}
            <div>
              <label htmlFor="name" className="resume_label">
                Name*
              </label>
              <input
                type="text"
                placeholder="Jon Done"
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

            <div className="flex gap-5 2xl:gap-7">
              {/* Email Address */}
              <div className="flex-1">
                <label htmlFor="email" className="resume_label">
                  Email Address*
                </label>
                <input
                  type="email"
                  placeholder="info@gmail.com"
                  id="email"
                  className="resume_input"
                  {...register("email", {
                    required: "Email address is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1.5">
                    {errors.email.message}
                  </p>
                )}
              </div>
              {/* Phone Number */}
              <div className="flex-1">
                <label htmlFor="phone" className="resume_label">
                  Phone Number*
                </label>
                <input
                  type="number"
                  placeholder="+88013435435"
                  id="phone"
                  className="resume_input"
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                />
                {errors.phone && (
                  <p className="text-sm text-red-500 mt-1.5">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-7 2xl:my-10 border py-2 px-4 rounded-xl flex items-center justify-between border-gray-200">
        <div className="space-y-2">
          <h4 className="text-center text-secondary-blue text-lg mt-3 font-semibold leading-[132%] tracking-[-0.319px]">
            Antonio Renders
          </h4>
          <p className="text-dark-blue font-semibold">€9.9/Month</p>
        </div>
        <button className="px-3 py-1 text-sm rounded-full bg-secondary-blue text-white">
          Upgrade
        </button>
      </div>

      <div className="flex justify-end">
        {/* Apply btn */}
        <button className="primary-btn">Apply Changes</button>
      </div>
    </form>
  );
};

export default BasicInformation;
