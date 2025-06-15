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
              <span className="bg-[linear-gradient(90deg,#21489f_0%,#0184ff_100%)] bg-clip-text text-transparent">
                Verify email address
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
              className="auth-input"
            />
          </div>
          <Button
            onClick={() => {
              router.push("/auth/verify-otp");
            }}
            className="primary-btn"
            Txt={"Get otp "}
          />
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
          </div>
        </div>
      </div>
    </form>
  );
};

export default page;
