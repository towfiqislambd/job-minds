"use client";
import React from "react";
import Heading from "@/Components/Tags/Heading/Heading";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
import { TickMark } from "../SvgContainer/SvgContainer";
import useAuth from "@/Hooks/useAuth";
import { useRouter } from "next/navigation";

interface PricingCardProps {
  package_name: string;
  price: string;
  interval: string;
  features: any[];
  idx: number;
  id: number;
}

const PricingCard: React.FC<PricingCardProps> = ({
  id,
  package_name,
  price,
  interval,
  features,
  idx,
}) => {
  const router = useRouter();
  const { user } = useAuth();

  const handleGetStarted = (id: number) => {
    if (!user) {
      return router.push("/auth/login");
    }
  };

  return (
    <div
      className={`w-full  bg-white border-[4px] border-transparent  ease-in-out duration-300 hover:border-solid hover:border-primary-blue gap-7 md:gap-y-[54px] rounded-xl md:rounded-[18px] p-5 md:p-6 3xl:p-[30px] flex flex-col justify-between ${
        idx === 1 && "!border-primary-blue"
      }`}
    >
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-2">
          <Heading
            Variant="h3"
            Txt={package_name}
            className="text-xl lg:text-2xl font-bold leading-[132%] tracking-[-0.24px] text-primary-blue capitalize"
          />
          <div className="flex flex-col gap-y-5">
            <Heading
              Variant="h5"
              className="text-2xl md:text-3xl lg:text-5xl 3xl:text-[64px] font-bold leading-[132%] tracking-[-0.24px] text-dark-blue"
              Txt={
                <>
                  €{price}
                  <span className="text-lg text-dark-blue leading-[164%] font-[600] capitalize">
                    / {interval}
                  </span>
                </>
              }
            />
          </div>
        </div>

        <div className="flex flex-col gap-y-2 md:gap-y-4">
          {features?.map((item, idx) => {
            return (
              <div key={idx} className="flex flex-row gap-2 lg:gap-x-2.5 ">
                <div data-aos="fade-up" data-aos-delay="100">
                  <TickMark />
                </div>
                <Paragraph
                  Txt={item?.feature_name}
                  className="text-sm md:text-base lg:text-lg font-normal leading-[164%] text-dark-blue max-w-[337px]"
                />
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={() => handleGetStarted(id)}
        className="primary-btn !text-base md:!text-lg 3xl:!text-xl !w-full "
      >
        Get Started
      </button>
    </div>
  );
};

export default PricingCard;
