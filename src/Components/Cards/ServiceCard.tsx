import React from "react";
import Link from "next/link";
import Image from "next/image";
import Heading from "../Tags/Heading/Heading";
import Paragraph from "../Tags/Paragraph/Paragraph";

interface ServiceCardProps {
  title: string;
  description: string;
  btnTxt: string;
  btnUrl: string;
  bgImg: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  btnTxt,
  btnUrl,
  bgImg,
}) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center gap-5 2xl:gap-10 p-5 md:p-6 xl:p-12 rounded-2xl xl:rounded-[40px] bg-white">
      {/* Left */}
      <div className="lg:flex-1 flex flex-col gap-y-3 lg:gap-y-5 xl:gap-y-8 max-w-[633px]">
        <Heading
          className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl font-[600] leading-[150%] 3xl:leading-[132%] text-text-blue "
          Txt={title}
        />

        <Paragraph
          className="xl:text-xl 3xl:text-2xl font-normal leading-[164%] text-light-gray "
          Txt={description}
        />

        <Link className="secondary-btn !w-fit" href={btnUrl}>
          {btnTxt}
        </Link>
      </div>

      {/* Right */}
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="relative w-full rounded-lg h-[200px] md:h-[300px] lg:flex-1 lg:aspect-[4/3] 3xl:h-[500px]"
      >
        <Image
          src={bgImg}
          alt="Background curve"
          fill
          className="object-cover md:object-contain rounded-lg h-full"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
