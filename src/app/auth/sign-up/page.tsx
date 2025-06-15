"use client";

import Link from "next/link";
import Paragraph from "./../../../Components/Tags/Paragraph/Paragraph";
import Heading from "./../../../Components/Tags/Heading/Heading";
import Button from "./../../../Components/Tags/Button/Button";
import { useRouter } from "next/navigation";


const page = () => {
  const router = useRouter()
  return (
    <form className="w-full min-h-screen  flex items-center justify-center">
      <div className="w-auto px-[130px] h-auto py-[80px] bg-prmiray-off-blue rounded-[50px] flex flex-col gap-y-15  ">
        <Heading
          Txt={
            <>
              <span className="bg-[linear-gradient(90deg,#21489f_0%,#0184ff_100%)] bg-clip-text text-transparent">
                Sign up
              </span>{" "}
            </>
          }
          Variant="h2"
          className="auth-heading"
        />
        <div className="flex flex-col items-center gap-y-[30px] ">
          <div className="flex flex-col gap-y-[30px]">
            <input
              placeholder="Enter your Name"
              type="text"
              className="auth-input"
            />
            <input
              placeholder="Enter your email address"
              type="email"
              className="auth-input"
            />
            <input
              placeholder="Enter your Password"
              type="password"
              className="auth-input"
            />
            <div className="flex flex-col gap-y-[30px] items-start ">
              <input
                placeholder="Confirm your Password"
                type="password"
                className="auth-input "
              />
              <div className="flex flex-row gap-x-2  ">
                <input type="checkbox" />
                <span className="text-sm leading-[150%] tracking-[-0.24px] ">
                  I have read an agree to SalesSync Terms and Privacy Policy
                </span>
              </div>
            </div>
          </div>
          <Button
            onClick={() => {
              router.push("/auth/login");
            }}
            className="primary-btn"
            Txt={"Sign up "}
          />
          <div className="flex flex-col gap-y-[30px] items-center ">
            <Paragraph
              className="text-[#666565] text-xl font-normal leading-[164%] capitalize "
              Txt={
                <>
                  Already Have an account?{" "}
                  <Link
                    href={"/auth/login"}
                    className="text-primary-blue cursor-pointer "
                  >
                    Log in
                  </Link>
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
