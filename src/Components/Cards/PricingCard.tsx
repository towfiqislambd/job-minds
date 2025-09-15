"use client";
import React from "react";
import toast from "react-hot-toast";
import useAuth from "@/Hooks/useAuth";
import { useRouter } from "next/navigation";
import { TickMark } from "../SvgContainer/SvgContainer";
import { number } from "framer-motion";
import { useCancelSubscription } from "@/Hooks/api/dashboard_api";
import { CgSpinnerTwo } from "react-icons/cg";

interface PricingCardProps {
  package_name: string;
  price: string;
  interval: string;
  features: any[];
  idx: number;
  id: number;
  type?: string;
  has_border?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  id,
  package_name,
  price,
  interval,
  features,
  idx,
  type,
  has_border = true,
}) => {
  const router = useRouter();
  const { user } = useAuth();
  const { mutate: cancelSubscriptionMutation, isPending } =
    useCancelSubscription();

  const handleGetStarted = (id: number) => {
    if (!user) {
      toast.error("Please login first");
      router.push("/auth/login");
      return;
    } else {
      router.push(`/dashboard/accounts?package_id=${id}`);
    }
  };

  const handleCancel = (id: number) => {
    cancelSubscriptionMutation({ subscription_plan_id: id });
  };

  return (
    <div
      className={`w-full  bg-white border-[4px] border-transparent  ease-in-out duration-300 hover:border-solid hover:border-primary-blue gap-7 md:gap-y-[54px] rounded-xl md:rounded-[18px] p-5 md:p-6 3xl:p-[30px] flex flex-col justify-between ${
        (has_border && idx) === 1 && "!border-primary-blue"
      }`}
    >
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-2">
          <div className="flex gap-3 items-center">
            <h3 className="text-xl lg:text-2xl font-bold leading-[132%] tracking-[-0.24px] text-primary-blue capitalize">
              {package_name}
            </h3>

            {user?.subscription?.subscription_type === type && (
              <p className="px-3 py-1.5 rounded-full bg-green-600 text-white text-sm">
                Purchased
              </p>
            )}
          </div>

          <div className="flex flex-col gap-y-5">
            <h5 className="text-2xl md:text-3xl lg:text-5xl 3xl:text-[64px] font-bold leading-[132%] tracking-[-0.24px] text-dark-blue">
              €{price}
              <span className="text-lg text-dark-blue leading-[164%] font-[600] capitalize">
                / {interval}
              </span>
            </h5>
          </div>
        </div>

        <div className="flex flex-col gap-y-2 md:gap-y-4">
          {features?.map((item, idx) => {
            return (
              <div key={idx} className="flex flex-row gap-2 lg:gap-x-2.5 ">
                <TickMark />
                <p className="text-sm md:text-base 3xl:text-lg font-normal leading-[164%] text-dark-blue max-w-[337px]">
                  {item?.feature_name}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={() =>
          user?.subscription?.subscription_type === type
            ? handleCancel(id)
            : handleGetStarted(id)
        }
        className={`primary-btn !text-base md:!text-lg 3xl:!text-xl !w-full ${
          user?.subscription?.subscription_type === type &&
          "!bg-none !bg-green-700"
        }`}
      >
        {user?.subscription?.subscription_type === type ? (
          isPending ? (
            <div className="flex gap-2 items-center justify-center">
              <CgSpinnerTwo className="animate-spin text-lg lg:text-xl xl:2xl:" />
              <span>Cancelling Subscription...</span>
            </div>
          ) : (
            "Cancel Subscription"
          )
        ) : (
          " Get Started"
        )}
      </button>
    </div>
  );
};

export default PricingCard;
