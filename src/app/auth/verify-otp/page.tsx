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
import { useState } from "react";
import OTPInput from "react-otp-input";

const page = () => {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  return (
    <form className="w-full min-h-screen flex items-center justify-center">
      <div className="w-auto px-[130px] h-auto py-[80px] bg-prmiray-off-blue rounded-[50px] flex flex-col gap-y-15  ">
        <Heading
          Txt={
            <>
              <span className="bg-[linear-gradient(90deg,#21489f_0%,#0184ff_100%)] bg-clip-text text-transparent">
                Verify your otp
              </span>{" "}
            </>
          }
          Variant="h2"
          className="auth-heading"
        />
        <div className="flex flex-col items-center gap-y-[30px] ">
          <div className="flex flex-col gap-y-[30px]">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span style={{ margin: "0 10px" }}>-</span>}
              renderInput={props => (
                <input
                  {...props}
                  style={{
                    width: "112px",
                    borderRadius: "50px",
                    border: "1px solid var(--Colour, #0184FF)",
                    background:
                      "linear-gradient(90deg, rgba(33, 72, 159, 0.15) 0%, rgba(1, 132, 255, 0.15) 100%)",
                    display: "flex",
                    height: "74px",
                    padding: "10px 20px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    alignSelf: "stretch",
                    color: "#071431",
                    textAlign: "center",
                    fontFamily: "Poppins",
                    fontSize: "36px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "132%",
                    letterSpacing: "-0.72px",
                  }}
                />
              )}
            />
          </div>
          <div className="flex flex-col gap-y-[30px] items-center ">
            <Paragraph
              className="text-[#666565] text-xl font-normal leading-[164%] capitalize "
              Txt={
                <>
                  Don’t get the code?{" "}
                  <span className="text-primary-blue">Resend.</span>
                </>
                
              }
            />
          </div>
          <Button
            onClick={() => {
              router.push("/auth/reset-password");
            }}
            className="primary-btn"
            Txt={"Verify otp"}
          />
          
        </div>
      </div>
    </form>
  );
};

export default page;
