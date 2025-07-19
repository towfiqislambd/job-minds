"use client";
import Container from "@/Components/Common/Container";
import {
  Notification,
  SiteLogo,
  WhiteDot,
  WhiteGlobe,
} from "@/Components/SvgContainer/SvgContainer";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const router = useRouter();
  const [isTransparent, setIsTransparent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsTransparent(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  type publicRouteSchema = {
    label: string;
    id: string;
  };

  const publicRoutes: publicRouteSchema[] = [
    {
      label: "Home",
      id: "banner",
    },
    {
      label: "AI tool",
      id: "ai-tool",
    },
    {
      label: "Pricing",
      id: "pricing",
    },
  ];

  const [activeSection, setactiveSection] = useState<string | null>(
    publicRoutes[0].id
  );

  return (
    <nav className="bg-[#071431] sticky top-0 z-100 w-full">
      <Container>
        <div className="py-4 3xl:py-5 flex justify-between items-center">
          {/* Left */}
          <div className="flex cursor-pointer gap-32 2xl:gap-52 3xl:gap-80 4xl:gap-[470px] items-center ">
            {/* Logo */}
            <div
              className="w-[70px] 2xl:w-20 3xl:w-22 h-[70px] 2xl:h-20 3xl:h-22 rounded-full"
              onClick={() => {
                router.push("/");
              }}
            >
              <SiteLogo />
            </div>

            {/* Section Links */}
            <div className="relative z-10 flex gap-2 2xl:gap-4 3xl:gap-6 h-auto w-auto p-3 2xl:p-[15px] rounded-[70px] bg-[#293B61]/60 backdrop-blur-[100px]">
              {publicRoutes.map((item, idx) => (
                <Link
                  to={item.id}
                  smooth={true}
                  duration={700}
                  onClick={() => {
                    setactiveSection(item.id);
                  }}
                  key={idx}
                  className={`flex flex-row gap-x-2 cursor-pointer px-4 py-1.5 2xl:py-2 border-[1px] items-center rounded-[50px] ${
                    item.id === activeSection
                      ? "border-white"
                      : "border-transparent"
                  }`}
                >
                  <WhiteDot />
                  <p className="text-lg 3xl:text-xl text-white font-medium leading-[150%]">
                    {item.label}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex gap-4 2xl:gap-4.5 items-center ">
            {/* Language */}
            <div className="w-auto h-auto py-2 px-4 flex flex-row items-center rounded-[50px] gap-5 2xl:gap-8 3xl:gap-12 border-[1px] border-solid border-white ">
              <div className="flex cursor-pointer flex-row items-center rounded-[50px] gap-2">
                <WhiteGlobe />
                <p className="text-lg 3xl:text-xl text-white font-medium leading-[150%]">
                  Eng
                </p>
              </div>
              <div className="flex cursor-pointer flex-row items-center h-auto w-auto border-[1px] border-solid border-white p-2 rounded-full  ">
                <Notification />
              </div>
            </div>

            {/* login btn */}
            <button
              onClick={() => {
                router.push("/auth/login");
              }}
              className="primary-btn !py-2.5 2xl:!py-3 3xl:!py-3.5 !text-lg"
            >
              Log In
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
