"use client";
import {
  AppleLogo,
  Globe,
  GoogleLogo,
} from "@/Components/SvgContainer/SvgContainer";
import Button from "@/Components/Tags/Button/Button";
import Heading from "@/Components/Tags/Heading/Heading";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
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
                Reset password
              </span>{" "}
            </>
          }
          Variant="h2"
          className="auth-heading"
        />
        <div className="flex flex-col items-center gap-y-[30px] ">
          <div className="flex flex-col gap-y-[30px]">
            <input
              placeholder="Create new password"
              type="password"
              className="auth-input"
            />
            <input
              placeholder="Confirm password"
              type="password"
              className="auth-input"
            />
          </div>
          <Button
            onClick={() => {
              router.push("/auth/login");
            }}
            className="primary-btn"
            Txt={"Reset password "}
          />
        </div>
      </div>
    </form>
  );
};

export default page;
