import React from "react";
import { FeatherSvg } from "../SvgContainer/SvgContainer";
import { useForm } from "react-hook-form";

const Subscription = () => {
  type formData = {
    first_name: string;
    sur_name: string;
    email: string;
    phone: number;
    country: string;
    city: string;
    state: string;
    zip_code: number;
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
    <section className="flex gap-7 items-start flex-col 3xl:flex-row">
      {/* Left */}
      <div className="w-full 3xl:flex-1 dashboard_card">
        <h4 className="section_sub_title">Subscription Plan Details</h4>
        <p className="section_sub_description !mb-1 lg:text-lg">
          Premium Access
        </p>
        <p className="section_sub_description lg:text-lg">9.99 EUR / Monthly</p>

        <h4 className="section_sub_title">Included Features</h4>
        <ul className="mt-4 mb-5 lg:mb-7 space-y-3 lg:space-y-4 text-[15px] lg:text-base">
          <li className="flex gap-2 lg:gap-3 items-center">
            <FeatherSvg />
            <span>AI-Generated Resume or Cover Letter</span>
          </li>
          <li className="flex gap-2 lg:gap-3 items-center">
            <FeatherSvg />
            <span>Unlimited Resume & Cover Letter Creation</span>
          </li>
          <li className="flex gap-2 lg:gap-3 items-center">
            <FeatherSvg />
            <span>AI Interview Assistant</span>
          </li>
        </ul>

        <h4 className="section_sub_title">Purchase Summary</h4>
        <p className="flex justify-between items-center">
          <span className="section_sub_description !mb-0 font-medium">
            Total Due
          </span>
          <span className="font-semibold">9.99 EUR</span>
        </p>
      </div>

      {/* Right */}
      <div className="w-full 3xl:flex-1 dashboard_card">
        <h4 className="section_sub_title">Subscription</h4>
        <p className="section_sub_description">
          Remember, this info will be public, so choose your subscriptions
          wisely.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-5">
            {/* First Name */}
            <div className="flex-1">
              <label htmlFor="first_name" className="resume_label">
                First Name*
              </label>
              <input
                type="text"
                placeholder="Enter Your First Name"
                id="first_name"
                className="resume_input"
                {...register("first_name", {
                  required: "First Name is required",
                })}
              />
              {errors.first_name && (
                <p className="text-sm text-red-500 mt-1.5">
                  {errors.first_name.message}
                </p>
              )}
            </div>

            {/* Surname */}
            <div className="flex-1">
              <label htmlFor="sur_name" className="resume_label">
                Surname*
              </label>
              <input
                type="text"
                placeholder="Enter Your Surname"
                id="sur_name"
                className="resume_input"
                {...register("sur_name", {
                  required: "Surname is required",
                })}
              />
              {errors.sur_name && (
                <p className="text-sm text-red-500 mt-1.5">
                  {errors.sur_name.message}
                </p>
              )}
            </div>
          </div>

          {/* Email Address */}
          <div className="flex-1">
            <label htmlFor="sur_name" className="resume_label">
              Email Address*
            </label>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              id="email"
              className="resume_input"
              {...register("email", {
                required: "Email Address is required",
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
              placeholder="Enter Your Phone Number"
              id="phone"
              className="resume_input"
              {...register("phone", {
                required: "Phone Number is required",
              })}
            />
            {errors.phone && (
              <p className="text-sm text-red-500 mt-1.5">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Country */}
          <div className="flex-1">
            <label htmlFor="country" className="resume_label">
              Country*
            </label>
            <input
              type="text"
              placeholder="Enter Your Country"
              id="country"
              className="resume_input"
              {...register("country", {
                required: "Country is required",
              })}
            />
            {errors.country && (
              <p className="text-sm text-red-500 mt-1.5">
                {errors.country.message}
              </p>
            )}
          </div>

          <div className="flex flex-col md:flex-row gap-5">
            {/* City */}
            <div className="flex-1">
              <label htmlFor="city" className="resume_label">
                City*
              </label>
              <input
                type="text"
                placeholder="Enter City"
                id="city"
                className="resume_input"
                {...register("city", {
                  required: "City is required",
                })}
              />
              {errors.city && (
                <p className="text-sm text-red-500 mt-1.5">
                  {errors.city.message}
                </p>
              )}
            </div>

            {/* State */}
            <div className="flex-1">
              <label htmlFor="sur_name" className="resume_label">
                State*
              </label>
              <input
                type="text"
                placeholder="Enter State"
                id="state"
                className="resume_input"
                {...register("state", {
                  required: "State is required",
                })}
              />
              {errors.state && (
                <p className="text-sm text-red-500 mt-1.5">
                  {errors.state.message}
                </p>
              )}
            </div>

            {/* ZIP Code */}
            <div className="flex-1">
              <label htmlFor="zip_code" className="resume_label">
                ZIP Code*
              </label>
              <input
                type="number"
                placeholder="Enter ZIP Code"
                id="zip_code"
                className="resume_input"
                {...register("zip_code", {
                  required: "ZIP Code is required",
                })}
              />
              {errors.zip_code && (
                <p className="text-sm text-red-500 mt-1.5">
                  {errors.zip_code.message}
                </p>
              )}
            </div>
          </div>

          {/* Terms and condition */}
          <p className="flex gap-2 items-center">
            <input id="agree" type="checkbox" className="scale-110" />
            <label htmlFor="agree" className="text-light-gray text-sm">
              I have read and agree to the Terms and Conditions.
            </label>
          </p>

          {/* Submit btn */}
          <button type="submit" className="primary-btn">
            Stripe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscription;
