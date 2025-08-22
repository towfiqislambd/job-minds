"use client";
import { Link } from "react-scroll";
import {
  Notification,
  SiteLogo,
  WhiteDot,
  WhiteGlobe,
} from "@/Components/SvgContainer/SvgContainer";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import Container from "@/Components/Common/Container";

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);

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

  const [activeSection, setActiveSection] = useState<string | null>(
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
              className="w-12 md:w-14 xl:w-[70px] 2xl:w-20 3xl:w-22 h-12 md:h-14 xl:h-[70px] 2xl:h-20 3xl:h-22 rounded-full"
              onClick={() => {
                router.push("/");
              }}
            >
              <SiteLogo />
            </div>

            {/* Section Links */}
            <div className="relative z-10 hidden xl:flex gap-2 2xl:gap-4 3xl:gap-6 h-auto w-auto p-3 2xl:p-[15px] rounded-[70px] bg-[#293B61]/60 backdrop-blur-[100px]">
              {publicRoutes.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.id}
                  smooth={true}
                  duration={700}
                  onClick={() => {
                    setActiveSection(item.id);
                  }}
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
            <div className="hidden w-auto h-auto py-2 px-4 xl:flex flex-row items-center rounded-[50px] gap-5 2xl:gap-8 3xl:gap-12 border-[1px] border-solid border-white ">
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
                router.push("/auth/home");
              }}
              className="hidden xl:block primary-btn !py-2.5 2xl:!py-3 3xl:!py-3.5 !text-lg"
            >
              Log In
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="xl:hidden w-9 md:w-10 h-8.5 md:h-9.5 cursor-pointer grid place-items-center rounded text-white bg-secondary-blue"
            >
              <FaBars className="text-xl md:text-2xl" />
            </button>
          </div>
        </div>
      </Container>

      {/* Blur Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/30 backdrop-blur-[3px] transition-opacity duration-300 xl:hidden z-50 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile Sidebar */}
      <div
        className={`${
          open ? "translate-x-0" : "-translate-x-full"
        } duration-500 transition-transform fixed top-0 z-[999] left-0 bg-[#071431] p-5 lg:p-7 shadow-lg overflow-y-auto border-r max-h-screen min-h-screen w-[250px] lg:w-[270px] xl:hidden`}
      >
        {/* Logo */}
        <div
          className="w-20 h-20 mx-auto rounded-full cursor-pointer"
          onClick={() => {
            setOpen(false);
            router.push("/");
          }}
        >
          <SiteLogo />
        </div>

        {/* Section Links */}
        <div className="flex flex-col mt-10 gap-5">
          {publicRoutes.map((item, idx) => (
            <Link
              to={item.id}
              smooth={true}
              duration={700}
              onClick={() => {
                setActiveSection(item.id);
                setOpen(false);
              }}
              key={idx}
              className={`flex flex-row gap-x-2 cursor-pointer px-4 py-1.5 2xl:py-2 border-[1px] items-center justify-center text-center rounded-[50px] ${
                item.id === activeSection ? "border-white" : "border-gray-700"
              }`}
            >
              <WhiteDot />
              <p className="lg:text-lg text-white font-medium leading-[150%]">
                {item.label}
              </p>
            </Link>
          ))}
        </div>

        {/* Language */}
        <div className="w-auto mt-5 mb-10 h-auto py-2 px-4 flex flex-row items-center justify-between rounded-[50px] gap-5 2xl:gap-8 3xl:gap-12 border-[1px] border-solid border-white ">
          <div className="flex cursor-pointer flex-row items-center rounded-[50px] gap-2">
            <WhiteGlobe />
            <p className="lg:text-lg text-white font-medium leading-[150%]">
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
            router.push("/auth/home");
          }}
          className="primary-btn mt-5 !py-2.5 block w-full"
        >
          Log In
        </button>

        {/* Cancel btn */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3"
        >
          <RxCross2 className="text-xl text-white cursor-pointer" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
