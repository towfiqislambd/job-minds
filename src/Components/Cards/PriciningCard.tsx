import { type } from "os";
import React from "react";
import Button from "../Tags/Button/Button";
import Heading from "../Tags/Heading/Heading";
import { TickMark } from "../SvgContainer/SvgContainer";
import Paragraph from "../Tags/Paragraph/Paragraph";

interface PriciningCardProps {
  title: string;
  pricePerMonth: string;
  features: string[];
  btnTxt: string;
  yearlyPrice?: string;
  discount?: string;
}

const PriciningCard: React.FC<PriciningCardProps> = ({
  title,
  pricePerMonth,
  features,
  btnTxt,
  yearlyPrice,
  discount,
}) => {
  return (
    <div className="h-auto w-auto bg-white border-[4px] border-transparent cursor-pointer  ease-in-out duration-300 hover:border-solid hover:border-primary-blue  gap-y-[54px]  rounded-[18px] p-[30px] flex flex-col justify-between   ">
      <div className="flex flex-col gap-y-[54px] ">
        <div className="flex flex-col gap-y-2">
          <Heading Variant="h4" Txt={title} className="pricing-card-heading" />
          <div className="flex flex-col gap-y-6 ">
            <Heading
              Variant="h5"
              className="pricing-sub-title"
              Txt={
                <>
                  €{pricePerMonth}{" "}
                  <span className="pricing-month-sub-title">/ Month</span>{" "}
                </>
              }
            />

            {yearlyPrice && discount && (
              <div className="flex flex-row items-center gap-x-3">
                <Heading
                  className="pricing-month-sub-title"
                  Variant="h5"
                  Txt={<>€{yearlyPrice}/year</>}
                />
                <Button
                  Txt={`save ${discount}%`}
                  className=" px-2.5 bg-secondary-blue text-lg rounded-[18px] text-white h-auto w-auto py-2 font-[600] leading-[132%] "
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-y-4  ">
          {features.map((item, idx) => {
            return (
              <div key={idx} className="flex flex-row gap-x-2.5 ">
                <div data-aos="fade-up" data-aos-delay="100">
                  <TickMark />
                </div>
                <Paragraph Txt={item} className="feataures-text" />
              </div>
            );
          })}
        </div>
      </div>
      <Button
        Txt={btnTxt}
        className="primary-btn !text-xl !w-full !px-[84px] "
      />
    </div>
  );
};

export default PriciningCard;
