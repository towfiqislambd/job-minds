import Button from "@/Components/Tags/Button/Button";
import Heading from "@/Components/Tags/Heading/Heading";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
import curve from "../../../assets/curve.svg";
import webFrame from "../../../assets/web-frame.png";
import mobileFrame from "../../../assets/mobile-frame.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className=" w-full h-[1312px] bg-no-repeat bg-cover "
      style={{ backgroundImage: `url(${curve.src})` }}
    >
      <div className="flex flex-col items-center justify-center pt-[165px]  gap-y-20 w-full container">
        <div className="flex flex-col items-center  gap-y-[60px] z-10">
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
        <div className="flex w-[1070px] h-[741px] relative ">
          <div>
            <Image
              src={webFrame.src}
              alt="not found"
              width={1070}
              height={741}
              className={" object-contain "}
            />
            <Image
              src={mobileFrame.src}
              alt="not found"
              width={317}
              height={687}
              className={
                "w-[317px] h-[687px] object-contain absolute bottom-0 right-0 mb-[-80px] "
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
