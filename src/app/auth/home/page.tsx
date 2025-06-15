"use client";
import {
  AppleLogo,
  Globe,
  GoogleLogo,
} from "@/Components/SvgContainer/SvgContainer";
import Button from "@/Components/Tags/Button/Button";
import Heading from "@/Components/Tags/Heading/Heading";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
import Link from "next/link";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <form className="w-full min-h-screen flex items-center justify-center">
      <div className="w-auto px-[130px] h-auto py-[80px] bg-prmiray-off-blue rounded-[50px] flex flex-col gap-y-15  ">
        <Heading
          Txt={
            <>
              Get Hired Faster with{" "}
              <span className="bg-[linear-gradient(90deg,#21489f_0%,#0184ff_100%)] bg-clip-text text-transparent">
                Jobminds
              </span>{" "}
            </>
          }
          Variant="h2"
          className="auth-heading"
        />
        <div className="flex flex-col gap-y-[30px] ">
          <div className="flex flex-col gap-y-[30px] ">
            <div className="h-auto w-auto px-[250px] py-4.5 bg-white rounded-[50px] cursor-pointer border-[1px] border-solid border-[#eee] flex flex-row gap-x-3  items-center   ">
              <GoogleLogo />
              <Paragraph Txt="Continue with Google" />
            </div>
            <div className="h-auto w-auto px-[250px] py-4.5 bg-white rounded-[50px] cursor-pointer border-[1px] border-solid border-[#eee] flex flex-row gap-x-3 items-center   ">
              <AppleLogo />
              <Paragraph Txt="Continue with Apple" />
            </div>
          </div>
          <div className="flex flex-col gap-y-[30px] items-center w-full relative ">
            <div className="flex flex-row gap-x-[28px] items-center ">
              <div className="h-[1px] w-[237px] bg-[#A3A3A3]" />
              <Paragraph Txt={"Or"} className="auth-sub-heading" />
              <div className="h-[1px] w-[237px] bg-[#A3A3A3]" />
            </div>
            <Button
              onClick={e => {
                e.preventDefault();
                router.push("/auth/login");
              }}
              className="primary-btn"
              Txt="Log In With password"
            />
          </div>
          <div className="flex flex-col gap-y-[30px] items-center ">
            <Paragraph
              className="text-[#666565] text-xl font-normal leading-[164%] capitalize "
              Txt={
                <>
                  Don’ have an account?{" "}
                  <Link
                    href={"/auth/sign-up"}
                    className="text-primary-blue cursor-pointer "
                  >
                    sign up
                  </Link>
                </>
              }
            />
            <div className="w-auto cursor-pointer h-auto py-2.5 px-[27px] flex flex-row items-center gap-x-2 bg-transparent border-[1px] border-solid border-primary-blue rounded-[50px]  ">
              <Globe />
              <Paragraph
                className="text-primary-blue text-xl font-normal leading-[164%] capitalize "
                Txt="Eng"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default page;
