import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

const StepOne = () => {
  const router = useRouter();
  const [previewImage, setPreviewImage] = useState("");

  const {
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    const savedPhoto = getValues("photo");

    if (savedPhoto instanceof File) {
      const imageURL = URL.createObjectURL(savedPhoto);
      setPreviewImage(imageURL);
      return () => URL.revokeObjectURL(imageURL);
    } else if (typeof savedPhoto === "string" && savedPhoto !== "") {
      setPreviewImage(savedPhoto);
    }
  }, [getValues]);
  return (
    <section className="dashboard_card">
      {/* Section Title */}
      <h3 className="text-dark-blue text-[19px] md:text-xl lg:text-2xl xl:text-[26px] 2xl:text-3xl 3xl:text-4xl font-semibold leading-[132%] tracking-[-0.319px] mb-3 md:mb-5 2xl:mb-7">
        Resume Complication
      </h3>

      {/* Profile Image Upload */}
      <div className="relative w-fit mb-5">
        <label htmlFor="profile-upload">
          <div className="lg:w-[100px] w-[70px] lg:h-[100px] h-[70px] rounded-full bg-[#E5E7EB] flex items-center justify-center cursor-pointer overflow-hidden border-2 border-dashed border-gray-400 hover:border-gray-600 transition-all duration-200">
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
            validate: value =>
              value instanceof File || previewImage
                ? true
                : "Photo is required",
          })}
          onChange={e => {
            const file = e.target.files?.[0];
            if (file) {
              const imageURL = URL.createObjectURL(file);
              setPreviewImage(imageURL);
              setValue("photo", file, { shouldValidate: true });
            }
          }}
        />
        {errors.photo && (
          <p className="text-sm text-red-500 mt-1">
            {errors.photo.message as string}
          </p>
        )}
      </div>

      {/* Title */}
      <h4 className="section_sub_title">Personal Summaries</h4>

      {/* Description */}
      <p className="section_sub_description !mb-5 !max-w-full">
        This information will be displayed publicity so be careful what you
        share
      </p>

      <div className="grid grid-cols-2 gap-4.5 md:gap-5 2xl:gap-7">
        {/* Name */}
        <div className="col-span-2 md:col-span-1">
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
              {errors.name.message as string}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="col-span-2 md:col-span-1">
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
              {errors.email.message as string}
            </p>
          )}
        </div>

        {/* Address */}
        <div className="col-span-2 md:col-span-1">
          <label htmlFor="address" className="resume_label">
            Address*
          </label>
          <input
            type="text"
            placeholder="Dhaka, Bangladesh"
            id="address"
            className="resume_input"
            {...register("address", { required: "Address is required" })}
          />
          {errors.address && (
            <p className="text-sm text-red-500 mt-1.5">
              {errors.address.message as string}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div className="col-span-2 md:col-span-1">
          <label htmlFor="phone" className="resume_label">
            Phone Number*
          </label>
          <input
            type="number"
            placeholder="+88013104035"
            id="phone"
            className="resume_input"
            {...register("phone", {
              required: "Phone Number is required",
            })}
          />
          {errors.phone && (
            <p className="text-sm text-red-500 mt-1.5">
              {errors.phone.message as string}
            </p>
          )}
        </div>

        {/* Professional Title */}
        <div className="col-span-2 md:col-span-1">
          <label htmlFor="professional_title" className="resume_label">
            Professional Title*
          </label>
          <input
            type="text"
            placeholder="Enter Your Professional Title"
            id="professional_title"
            className="resume_input"
            {...register("professional_title", {
              required: "Professional Title Number is required",
            })}
          />
          {errors.professional_title && (
            <p className="text-sm text-red-500 mt-1.5">
              {errors.professional_title.message as string}
            </p>
          )}
        </div>

        {/* Whatsapp Number */}
        <div className="col-span-2 md:col-span-1">
          <label htmlFor="wp" className="resume_label">
            Whatsapp Number*
          </label>
          <input
            type="number"
            placeholder="+88014604035"
            id="wp"
            className="resume_input"
            {...register("wp", {
              required: "Whatsapp Number is required",
            })}
          />
          {errors.wp && (
            <p className="text-sm text-red-500 mt-1.5">
              {errors.wp.message as string}
            </p>
          )}
        </div>

        {/* Linkedin */}
        <div className="col-span-2">
          <label htmlFor="linkedin" className="resume_label">
            Linkedin*
          </label>
          <input
            type="url"
            placeholder="https://linkedin.com/in/username"
            id="linkedin"
            className="resume_input"
            {...register("linkedin", {
              required: "A valid link is required",
              pattern: {
                value: /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[\w-./?%&=]*)?$/,
                message: "Please enter a valid URL",
              },
            })}
          />
          {errors.linkedin && (
            <p className="text-sm text-red-500 mt-1.5">
              {errors.linkedin.message as string}
            </p>
          )}
        </div>

        {/* Portfolio (Optional) */}
        <div className="col-span-2">
          <label htmlFor="portfolio" className="resume_label">
            Portfolio (Optional)
          </label>
          <input
            type="url"
            placeholder="https://yourportfolio.com"
            id="portfolio"
            className="resume_input"
            {...register("portfolio")}
          />
        </div>

        {/* Career Objective */}
        <div className="col-span-2">
          <label htmlFor="career_objective" className="resume_label">
            Career Objective*
          </label>
          <textarea
            rows={5}
            placeholder="Write  brief about your career objective.... "
            id="career_objective"
            className="resume_input"
            {...register("career_objective", {
              required: "Career Objective is required",
            })}
          ></textarea>
          {errors.career_objective && (
            <p className="text-sm text-red-500 mt-1.5">
              {errors.career_objective.message as string}
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-end gap-3.5 2xl:gap-5 items-center mt-5 md:mt-7">
        {/* Cancel btn */}
        <button
          onClick={e => {
            e.preventDefault();
            router.back();
          }}
          className="secondary-btn md:!px-7"
        >
          Cancel
        </button>

        {/* Next btn */}
        <button type="submit" className="primary-btn">
          Next
        </button>
      </div>
    </section>
  );
};

export default StepOne;
