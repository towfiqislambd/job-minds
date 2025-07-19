import React from "react";
import Heading from "../Tags/Heading/Heading";
import Paragraph from "../Tags/Paragraph/Paragraph";
import Button from "../Tags/Button/Button";
import Image from "next/image";

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
    <div className="flex items-center gap-5 2xl:gap-10 p-12 rounded-[40px] bg-white">
      {/* Left */}
      <div className="flex-1 flex flex-col gap-y-8 max-w-[633px]">
        <Heading
          className="text-2xl 2xl:text-3xl 3xl:text-4xl font-[600] leading-[150%] 3xl:leading-[132%] text-text-blue "
          Txt={title}
        />
        <Paragraph
          className="text-xl 3xl:text-2xl font-normal leading-[164%] text-light-gray "
          Txt={descreption}
        />
        <Button Txt={btnTxt} className="secondary-btn" />
      </div>

      {/* Right */}
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="flex-1 aspect-[4/3]"
      >
        <Image
          src={bgImg}
          alt="Background curve"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
