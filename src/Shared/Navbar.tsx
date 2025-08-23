"use client";
import { SiteLogo, WhiteDot } from "@/Components/SvgContainer/SvgContainer";
import { Link } from "react-scroll";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import Container from "@/Components/Common/Container";
import { useSiteSettings } from "@/Hooks/auth_api";
import Image from "next/image";
import { Loader } from "@/Components/Loader/Loader";
import { useTranslation } from "@/Provider/TranslationProvider/TranslationContext";
import ReactFlagsSelect from "react-flags-select";

const Navbar = () => {
  const [selectedCountry, setSelectedCountry] = useState("US");
  const { changeLanguage } = useTranslation();
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const { data: siteSettings, isLoading } = useSiteSettings();

  const publicRoutes = [
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

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <nav className="bg-[#071431] sticky top-0 z-100 w-full">
      <Container>
        <div className="py-4 3xl:py-5 flex justify-between items-center">
          {/* Left */}
          <div className="flex cursor-pointer gap-32 2xl:gap-52 3xl:gap-80 4xl:gap-[470px] items-center ">
            {/* Logo */}
            <figure
              className="size-12 md:size-14 xl:size-16 2xl:size-20 3xl:size-22 rounded-full relative"
              onClick={() => {
                router.push("/");
              }}
            >
              {siteSettings?.data?.logo ? (
                <Image
                  src={`${process.env.NEXT_PUBLIC_SITE_URL}/${siteSettings?.data?.logo}`}
                  alt="logo"
                  width={100}
                  height={100}
                  className="size-full rounded-full object-cover"
                />
              ) : (
                <SiteLogo />
              )}
            </figure>

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
            <div className="hidden xl:block">
              <ReactFlagsSelect
                selected={selectedCountry}
                onSelect={countryCode => {
                  const languageMap: Record<string, string> = {
                    US: "en",
                    GB: "en",
                    FR: "fr",
                    DE: "de",
                    IT: "it",
                    BD: "bn",
                    IN: "hi",
                  };

                  const langCode = languageMap[countryCode] || "en";
                  changeLanguage(langCode);
                  setSelectedCountry(countryCode);
                }}
                countries={["US", "GB", "FR", "DE", "IT", "BD", "IN"]}
                customLabels={{
                  US: "English",
                  GB: "English (UK)",
                  FR: "Français",
                  DE: "Deutsch",
                  IT: "Italiano",
                  BD: "বাংলা",
                  IN: "हिन्दी",
                }}
                placeholder="Select Language"
                searchable
                searchPlaceholder="Search..."
                selectedSize={16}
                optionsSize={14}
                className="inline-block"
                selectButtonClassName="p-2 border bg-[#0F1E3A] text-white !border-gray-700"
              />
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
        <figure
          className="w-20 h-20 mx-auto rounded-full cursor-pointer"
          onClick={() => {
            setOpen(false);
            router.push("/");
          }}
        >
          {siteSettings?.data?.logo ? (
            <Image
              src={`${process.env.NEXT_PUBLIC_SITE_URL}/${siteSettings?.data?.logo}`}
              alt="logo"
              width={100}
              height={100}
              className="size-full rounded-full object-cover"
            />
          ) : (
            <SiteLogo />
          )}
        </figure>

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
          {/* Language */}
          <ReactFlagsSelect
            selected={selectedCountry}
            onSelect={countryCode => {
              const languageMap: Record<string, string> = {
                US: "en",
                GB: "en",
                FR: "fr",
                DE: "de",
                IT: "it",
                BD: "bn",
                IN: "hi",
              };

              const langCode = languageMap[countryCode] || "en";
              changeLanguage(langCode);
              setSelectedCountry(countryCode);
            }}
            countries={["US", "GB", "FR", "DE", "IT", "BD", "IN"]}
            customLabels={{
              US: "English",
              GB: "English (UK)",
              FR: "Français",
              DE: "Deutsch",
              IT: "Italiano",
              BD: "বাংলা",
              IN: "हिन्दी",
            }}
            placeholder="Select Language"
            searchable
            searchPlaceholder="Search..."
            selectedSize={16}
            optionsSize={14}
            className="!w-full !block"
            selectButtonClassName="p-2 border bg-[#0F1E3A] text-white !border-gray-700 "
          />
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
