"use client";
import {
  AppleLogo,
  Globe,
  GoogleLogo,
} from "@/Components/SvgContainer/SvgContainer";
import Button from "@/Components/Tags/Button/Button";
import Heading from "@/Components/Tags/Heading/Heading";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";

const page = () => {
  return (
    <form className="w-full min-h-screen flex items-center justify-center">
      <div className="w-auto px-[130px] h-auto py-[80px] bg-prmiray-off-blue rounded-[50px] flex flex-col gap-y-15  ">
        <Heading
          Txt={
            <>
              <span className="bg-[linear-gradient(90deg,#21489f_0%,#0184ff_100%)] bg-clip-text text-transparent">
                Login
              </span>{" "}
            </>
          }
          Variant="h2"
          className="auth-heading"
        />
        <div className="flex flex-col items-center gap-y-[30px] ">
          <div className="flex flex-col gap-y-[30px]">
            <input
              placeholder="Enter your email address"
              type="email"
              className="rounded-[50px] border-[1px] border-solid w-[405px] py-5 px-10 "
            />
            <div className="flex flex-col gap-y-[30px] items-end " >
            <input
              placeholder="Enter your Password"
              type="password"
              className="rounded-[50px] border-[1px] border-solid w-[405px] py-5 px-10 "
              />
              <span className="text-base font-normal leading-[164%] text-center text-primary-blue" >
              
              Forget Password?
              </span>
            </div>
          </div>
          <Button className="primary-btn" Txt={"Log In "} />
          <div className="flex flex-col gap-y-[30px] items-center ">
            <Paragraph
              className="text-[#666565] text-xl font-normal leading-[164%] capitalize "
              Txt={
                <>
                  Don’ have an account?{" "}
                  <span className="text-primary-blue">sign up</span>
                </>
              }
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default page;
