import Button from "@/Components/Tags/Button/Button";
import Heading from "@/Components/Tags/Heading/Heading";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
import curve from "../../../assets/curve.svg";
import webFrame from "../../../assets/web-frame.png";
import mobileFrame from "../../../assets/mobile-frame.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="banner" className="relative w-full z-50 pb-[120px] h-auto overflow-hidden">
      {/* Background Image */}
      <Image
        src={curve.src}
        alt="Background curve"
        fill
        priority
        className="object-contain h-[1320px] w-full object-top -z-10"
      />

      <div className="flex flex-col items-center justify-center pt-[165px] pb-[60px] gap-y-20 w-full container">
        {/* Top Heading + Paragraph + Button */}
        <div className="flex flex-col items-center gap-y-[60px] z-10">
          <div className="flex flex-col items-center gap-y-2.5">
            <Heading
              className="hero-heading max-w-[942px]"
              Txt={
                <>
                  Empower Your Career Journey{" "}
                  <span className="gradient-heading">with AI</span>
                </>
              }
            />
            <Paragraph
              Txt="As a busy parent, finding time for myself was hard. Now I feel supported daily without feeling overwhelmed."
              className="text-2xl font-normal leading-[164%] text-glass-gray max-w-[740px] text-center"
            />
          </div>
          <Button className="primary-btn capitalize" Txt="Start for free" />
        </div>

        {/* Frames and Slogan */}
        <div className="flex flex-col items-center gap-y-[111.24px]">
          <div className="relative w-[1070px] h-[741px]">
            <Image
              src={webFrame}
              alt="Web Frame"
              width={1070}
              height={741}
              className="object-contain"
            />
            <Image
              src={mobileFrame}
              alt="Mobile Frame"
              width={317}
              height={687}
              className="absolute bottom-0 right-0 translate-y-[80px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
