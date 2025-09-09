import PricingCard from "@/Components/Cards/PricingCard";
import { Loader } from "@/Components/Loader/Loader";
import { FeatherSvg } from "@/Components/SvgContainer/SvgContainer";
import { useDetailPricing, useGetPricing } from "@/Hooks/api/cms_api";
import { usePurchasePlan } from "@/Hooks/api/dashboard_api";
import useAuth from "@/Hooks/useAuth";
import React from "react";
import { useForm } from "react-hook-form";
import { CgSpinnerTwo } from "react-icons/cg";

const Subscription = ({ package_id }: any) => {
  const { user } = useAuth();
  const { data: detailPricingData, isLoading } = useDetailPricing(package_id);
  const { mutateAsync: purchasePlanMutation, isPending } =
    usePurchasePlan(package_id);
  const { data: pricingData, isLoading: pricingDataLoading } = useGetPricing();

  type formData = {
    first_name: string;
    surname: string;
    email: string;
    is_terms_conditions: boolean;
    payment_method: string;
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formData>();

  const onSubmit = async (data: formData) => {
    const payload = {
      ...data,
      is_terms_conditions: data.is_terms_conditions ? 1 : 0,
      success_redirect_url: `${window.location.origin}/dashboard/resume-builder`,
      cancel_redirect_url: `${window.location.origin}/dashboard/accounts?package_id=${package_id}`,
    };
    await purchasePlanMutation(payload);
    reset();
  };

  if (pricingDataLoading) {
    return (
      <div className="h-[70vh] flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <>
      {package_id ? (
        <section className="flex gap-7 items-start flex-col 3xl:flex-row">
          {/* Left */}
          {isLoading ? (
            <div className="w-full 3xl:flex-1 dashboard_card animate-pulse">
              <div className="h-6 bg-gray-300 rounded w-1/3 mb-4" />
              <div className="h-4 bg-gray-300 rounded w-1/2 mb-2" />
              <div className="h-4 bg-gray-300 rounded w-1/4 mb-6" />
              <div className="h-6 bg-gray-300 rounded w-1/3 mb-4" />
              <ul className="mt-4 mb-5 lg:mb-7 space-y-3 lg:space-y-4">
                {[...Array(3)].map((_, i) => (
                  <li key={i} className="flex gap-2 lg:gap-3 items-center">
                    <div className="h-6 w-4 bg-gray-300 rounded" />
                    <div className="h-5 bg-gray-300 rounded w-2/3" />
                  </li>
                ))}
              </ul>
              <div className="h-6 bg-gray-300 rounded w-1/3 mb-4" />
              <p className="flex justify-between items-center">
                <span className="h-5 bg-gray-300 rounded w-1/4" />
                <span className="h-5 bg-gray-300 rounded w-1/6" />
              </p>
            </div>
          ) : (
            <div className="w-full 3xl:flex-1 dashboard_card">
              <h4 className="section_sub_title">Subscription Plan Details</h4>
              <p className="section_sub_description !mb-1 lg:text-lg">
                {detailPricingData?.data?.name}
              </p>
              <p className="section_sub_description lg:text-lg">
                {detailPricingData?.data?.price} EUR /
                {detailPricingData?.data?.interval}
              </p>

              <h4 className="section_sub_title">Included Features</h4>
              <ul className="mt-4 mb-5 lg:mb-7 space-y-3 lg:space-y-4 text-[15px] lg:text-base">
                {detailPricingData?.data?.features?.map((item: any) => (
                  <li
                    key={item?.id}
                    className="flex gap-2 lg:gap-3 items-center"
                  >
                    <FeatherSvg />
                    <span>{item?.feature_name}</span>
                  </li>
                ))}
              </ul>

              <h4 className="section_sub_title">Purchase Summary</h4>
              <p className="flex justify-between items-center">
                <span className="section_sub_description !mb-0 font-medium">
                  Total Due
                </span>
                <span className="font-semibold">
                  {detailPricingData?.data?.price} EUR
                </span>
              </p>
            </div>
          )}

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
                  <label htmlFor="surname" className="resume_label">
                    Surname*
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Surname"
                    id="surname"
                    className="resume_input"
                    {...register("surname", {
                      required: "Surname is required",
                    })}
                  />
                  {errors.surname && (
                    <p className="text-sm text-red-500 mt-1.5">
                      {errors.surname.message}
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
                  readOnly
                  value={user?.email}
                  className="resume_input bg-gray-50"
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

              {/* Payment Method */}
              <div className="flex flex-col">
                <h4 className="resume_label">Select Payment Method*</h4>
                <label className="flex gap-2 items-center mb-1.5 text-[15px] text-gray-700 font-medium">
                  <input
                    type="radio"
                    value="stripe"
                    className="scale-110"
                    {...register("payment_method", {
                      required: "Please select a payment method",
                    })}
                  />
                  Stripe
                </label>
                <label className="flex gap-2 items-center text-[15px] text-black-gray font-medium">
                  <input
                    type="radio"
                    value="paypal"
                    className="scale-110"
                    {...register("payment_method", {
                      required: "Please select a payment method",
                    })}
                  />
                  Paypal
                </label>
                {errors.payment_method && (
                  <p className="text-sm text-red-500 mt-1.5">
                    {errors.payment_method.message}
                  </p>
                )}
              </div>

              {/* Terms and Conditions */}
              <div>
                <div className="flex gap-2 items-center">
                  <input
                    id="is_terms_conditions"
                    type="checkbox"
                    className="scale-110"
                    {...register("is_terms_conditions", {
                      validate: value =>
                        value || "You must agree to the Terms and Conditions",
                    })}
                  />
                  <label
                    htmlFor="is_terms_conditions"
                    className="text-light-gray text-sm"
                  >
                    I have read and agree to the Terms and Conditions.
                  </label>
                </div>
                {errors.is_terms_conditions && (
                  <p className="text-sm text-red-500 mt-1.5">
                    {errors.is_terms_conditions.message}
                  </p>
                )}
              </div>

              {/* Submit btn */}
              <button
                type="submit"
                disabled={isPending}
                className={`primary-btn ${isPending && "!cursor-not-allowed"}`}
              >
                {isPending ? (
                  <div className="flex gap-2 items-center">
                    <CgSpinnerTwo className="animate-spin text-xl" />
                    <span>Confirming....</span>
                  </div>
                ) : (
                  "Confirm"
                )}
              </button>
            </form>
          </div>
        </section>
      ) : (
        <div className="grid xl:grid-cols-2 3xl:grid-cols-3 gap-5 2xl:gap-6">
          {pricingData?.data?.map((item: any, idx: number) => {
            return (
              <PricingCard
                idx={idx}
                id={item?.id}
                key={item?.id}
                package_name={item?.name}
                price={item?.price}
                interval={item?.interval}
                features={item?.features}
                type={item?.type}
                has_border={false}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Subscription;
