"use client";
import {
  Notification,
  SiteLogo,
  WhiteDot,
  WhiteGlobe,
} from "@/Components/SvgContainer/SvgContainer";
import Button from "@/Components/Tags/Button/Button";
import Heading from "@/Components/Tags/Heading/Heading";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();

  type publicRouteSchema = {
    label: string;
    redirectLink: string;
  };

  const publicRoutes: publicRouteSchema[] = [
    {
      label: "Home",
      redirectLink: "/",
    },
    {
      label: "AI tool",
      redirectLink: "/ai-tool",
    },
    {
      label: "Pricing",
      redirectLink: "/pricing",
    },
  ];

  return (
    <nav className="h-auto bg-transparent absolute w-full px-[100px]  py-10 flex flex-row justify-between items-center  ">
      <div className="flex flex-row  gap-x-[470px] items-center ">
        <Link href="/" ><SiteLogo /></Link>

        <div className="relative z-10 flex gap-x-6 h-auto w-auto p-[15px] rounded-[70px] bg-[#293B61]/60 backdrop-blur-[100px]">
          {publicRoutes.map((item, idx) => (
            <div
              onClick={() => {
                router.push(item.redirectLink);
              }}
              key={idx}
              className={`flex flex-row gap-x-2 cursor-pointer px-6 py-3 border-[1px] items-center rounded-[50px] ${
                item.redirectLink === pathName
                  ? "border-white"
                  : "border-transparent"
              }`}
            >
              <WhiteDot />
              <Heading
                Txt={item.label}
                className="text-xl text-white font-medium leading-[150%] "
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row gap-x-4.5 items-center ">
        <div className="w-auto h-auto py-2.5 px-4 flex flex-row items-center rounded-[50px] gap-x-12 border-[1px] border-solid border-white ">
          <div className="flex cursor-pointer flex-row items-center rounded-[50px] gap-x-2.5">
            <WhiteGlobe />
            <Paragraph
              Txt={"Eng"}
              className="text-xl text-white font-medium leading-[150%] "
            />
          </div>
          <div className="flex cursor-pointer flex-row items-center h-auto w-auto border-[1px] border-solid border-white p-3 rounded-full  ">
            <Notification />
          </div>
        </div>
        <Button onClick={() => {
          router.push("/auth/login")
        }} className="primary-btn" Txt={"Log in"} />
      </div>
    </nav>
  );
};

export default Navbar;
