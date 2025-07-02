"use client";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

const page = () => {
  const [previewImage, setPreviewImage] = useState("");

  type formData = {
    photo: string;
    name: string;
    email: string;
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
    <section className="p-7 bg-white shadow-box rounded-lg">
      {/* Section Title */}
      <h3 className="text-dark-blue text-4xl font-semibold leading-[132%] tracking-[-0.319px] mb-7">
        Resume Complication
      </h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Profile Image Upload */}
        <div className="relative w-fit mb-5">
          <label htmlFor="profile-upload">
            <div className="lg:w-[100px] w-16 lg:h-[100px] h-16 rounded-full bg-[#E5E7EB] flex items-center justify-center cursor-pointer overflow-hidden border-2 border-dashed border-gray-400 hover:border-gray-600 transition-all duration-200">
              {previewImage ? (
                <Image
                  width={100}
                  height={100}
                  src={previewImage}
                  alt="Profile Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-4xl text-gray-600 font-medium">+</span>
              )}
            </div>
          </label>
          <input
            id="profile-upload"
            type="file"
            accept="image/*"
            className="hidden"
            {...register("photo", {
              required: "Photo is required",
              onChange: e => {
                const file = e.target.files[0];
                if (file) {
                  const imageURL = URL.createObjectURL(file);
                  setPreviewImage(imageURL);
                }
              },
            })}
          />
          {errors.photo && (
            <p className="text-sm text-red-500 mt-1">{errors.photo.message}</p>
          )}
        </div>

        {/* Title */}
        <h4 className="text-dark-blue text-2xl font-semibold leading-[132%] tracking-[-0.319px] mb-2">
          Personal Summaries
        </h4>

        {/* Description */}
        <p className="text-light-gray leading-[164%] mb-5">
          This information will be displayed publicity so be careful what you
          share
        </p>

        <div className="grid grid-cols-2 gap-5">
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

          {/* Email */}
          <div>
            <label htmlFor="email" className="resume_label">
              Email*
            </label>
            <input
              type="email"
              placeholder="info@gmail.com"
              id="email"
              className="resume_input"
              {...register("email", {
                required: "Email is required",
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
        </div>

        <button>Submit</button>
      </form>
    </section>
  );
};

export default page;
