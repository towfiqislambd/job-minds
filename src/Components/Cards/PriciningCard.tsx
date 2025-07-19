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
  idx: number;
}

const PriciningCard: React.FC<PriciningCardProps> = ({
  title,
  pricePerMonth,
  features,
  btnTxt,
  yearlyPrice,
  discount,
  idx,
}) => {
  return (
    <div
      className={`w-full  bg-white border-[4px] border-transparent cursor-pointer  ease-in-out duration-300 hover:border-solid hover:border-primary-blue gap-7 md:gap-y-[54px] rounded-xl md:rounded-[18px] p-5 md:p-6 3xl:p-[30px] flex flex-col justify-between ${
        idx === 1 && "!border-primary-blue"
      }`}
    >
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-2">
          <Heading
            Variant="h4"
            Txt={title}
            className="text-xl lg:text-2xl font-bold leading-[132%] tracking-[-0.24px] text-primary-blue"
          />
          <div className="flex flex-col gap-y-5">
            <Heading
              Variant="h5"
              className="text-2xl md:text-3xl lg:text-5xl 3xl:text-[64px] font-bold leading-[132%] tracking-[-0.24px] text-dark-blue"
              Txt={
                <>
                  €{pricePerMonth}{" "}
                  <span className="text-lg text-dark-blue leading-[164%] font-[600]">
                    / Month
                  </span>{" "}
                </>
              }
            />

            {yearlyPrice && discount && (
              <div className="flex items-center gap-x-3">
                <Heading
                  className="text-lg text-dark-blue leading-[164%] font-[600]"
                  Variant="h5"
                  Txt={<>€{yearlyPrice}/year</>}
                />
                <Button
                  Txt={`save ${discount}%`}
                  className="px-2.5 bg-secondary-blue 3xl:text-lg rounded-[18px] text-white h-auto w-auto py-1 text-sm 3xl:py-2 font-medium 3xl:font-[600] leading-[132%] "
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-y-2 md:gap-y-4">
          {features.map((item, idx) => {
            return (
              <div key={idx} className="flex flex-row gap-2 lg:gap-x-2.5 ">
                <div data-aos="fade-up" data-aos-delay="100">
                  <TickMark />
                </div>
                <Paragraph
                  Txt={item}
                  className="text-sm md:text-base lg:text-lg font-normal leading-[164%] text-dark-blue max-w-[337px]"
                />
              </div>
            );
          })}
        </div>
      </div>
      <Button
        Txt={btnTxt}
        className="primary-btn !text-base md:!text-lg 3xl:!text-xl !w-full "
      />
    </div>
  );
};

export default PriciningCard;
