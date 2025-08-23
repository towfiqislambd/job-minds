import Link from "next/link";
import Image from "next/image";
import curve from "@/assets/curve.svg";
import webFrame from "@/assets/web-frame.png";
import mobileFrame from "@/assets/mobile-frame.png";
import Heading from "@/Components/Tags/Heading/Heading";
import Container from "@/Components/Common/Container";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";

type heroDataProps = {
  data: {
    title: string;
    sub_title: string;
    button_text: string;
    background_image: string;
  };
};

const HeroSection = ({ data }: heroDataProps) => {
  return (
    <section className="relative h-[480px] md:h-[550px] xl:h-[850px] 2xl:h-[1050px] 3xl:h-[1250px]  lg:mb-5 xl:mb-72 3xl:mb-60 4xl:!mb-72">
      <div
        id="banner"
        style={{ backgroundImage: `url(${curve.src})` }}
        className="h-full bg-no-repeat bg-center bg-cover w-full z-50 overflow-hidden"
      >
        <Container>
          <div className="flex flex-col items-center justify-center pt-10 md:pt-16 xl:pt-24 2xl:pt-36 3xl:pt-[165px] gap-y-20 w-full">
            <div className="flex flex-col items-center gap-10 2xl:gap-y-[60px] z-10">
              <div className="flex flex-col items-center gap-y-3">
                {/* Title */}

                <Heading
                  className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-[80px] not-italic font-semibold xl:font-bold leading-[150%] md:leading-[132%] tracking-[-0.8px] text-center !text-white max-w-[942px]"
                  Txt={data?.title}
                />

                {/* Description */}
                <Paragraph
                  Txt={data?.sub_title}
                  className="md:text-lg lg:text-xl 2xl:text-2xl font-normal leading-[164%] text-glass-gray max-w-[740px] text-center"
                />
              </div>

              {/* Button */}
              <Link
                href="#pricing"
                className="primary-btn !py-2 lg:!py-3 2xl:!py-4 md:!px-8 2xl:!px-12 lg:!text-lg"
              >
                {data?.button_text}
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Frames */}
      <div className="hidden xl:block">
        <Container>
          <div className="absolute -translate-x-1/2 left-1/2 -bottom-60 2xl:-bottom-72 3xl:-bottom-56 z-50 flex justify-center items-center w-[750px] 2xl:w-[900px] 3xl:w-[1000px] mx-auto">
            <Image
              src={webFrame}
              alt="Web Frame"
              width={1070}
              height={741}
              className="shrink-0"
            />
            <Image
              src={mobileFrame}
              alt="Mobile Frame"
              width={317}
              height={687}
              className="-ms-40 shrink-0"
            />
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HeroSection;
