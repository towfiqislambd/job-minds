import React from "react";
import Heading from "../Tags/Heading/Heading";
import Paragraph from "../Tags/Paragraph/Paragraph";
import Button from "../Tags/Button/Button";
import Image from "next/image";
import defaultFrame from "../../assets/images/home/default-service.png";

interface ServiceCardProps {
  title: string;
  descreption: string;
  btnTxt: string;
  bgImg: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  descreption,
  btnTxt,
  bgImg,
}) => {
  return (
    <div className="flex flex-row h-auto items-center justify-between w-auto p-12 rounded-[40px] bg-white  ">
      <div className="flex flex-col gap-y-8 max-w-[633px] ">
        <Heading
          className="text-[36px] font-[600] leading-[132%] text-text-blue "
          Txt={title}
        />
        <Paragraph
          className="text-2xl font-normal leading-[164%] text-light-gray "
          Txt={descreption}
        />
        <Button Txt={btnTxt} className="secondary-btn" />
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="relative h-[679px] w-[817px]"
      >
        <Image
          src={bgImg}
          alt="Background curve"
          fill
          priority
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
