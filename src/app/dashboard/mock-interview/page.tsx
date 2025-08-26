"use client";
import Image from "next/image";
import React, { useState } from "react";
import Profile from "@/assets/images/dashboard/profile.svg";
import { BiSend } from "react-icons/bi";
import { useAiInterviewer } from "@/Hooks/api/dashboard_api";
import toast from "react-hot-toast";
import { CgSpinnerTwo } from "react-icons/cg";

const page = () => {
  const [search, setSearch] = useState<string>("");
  const [messages, setMessages] = useState<string>("");
  const { mutate: aiInterviewMutation, isPending } = useAiInterviewer();

  const handleSend = (e: any) => {
    e.preventDefault();
    if (!search) {
      return toast.error("Please write something");
    }
    aiInterviewMutation(
      { user_input: search },
      {
        onSuccess: (data: any) => {
          setMessages(data?.data);
        },
      }
    );
    e.target.reset();
  };

  return (
    <>
      <h2 className="section_title">Interview Preparation Assistant</h2>

      <p className="section_description">
        Step up your interview skills with cool AI tips and tricks!
      </p>

      <div className="my-7 2xl:my-10 dashboard_card">
        <h3 className="section_sub_title">Mock Interview Session</h3>

        <div className="mt-5 border border-[#EAEAEA] rounded-[8px]">
          {/* Upper Part */}
          <div className="border-b border-[#EAEAEA]">
            <div className="py-4 lg:py-6 px-4 flex gap-3 md:gap-0 flex-col md:flex-row md:justify-between items-center">
              <div className="flex gap-3 lg:gap-5 items-center">
                <div className="bg-[#C6DFF6] h-12 md:h-[60px] w-12 md:w-[60px] rounded-full flex justify-center items-center">
                  <Image
                    src={Profile}
                    alt="profile-img"
                    height={32}
                    width={32}
                  />
                </div>
                <h3 className="text-lg lg:text-[20px] font-poppins text-[#071431] font-semibold lg:font-bold">
                  Ai Interviewer
                </h3>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="my-3 md:my-6 lg:mt-10 lg:mb-14 px-3 md:px-5 lg:px-7 ">
            {Array.from({ length: 5 }).map((item, idx) => (
              <div
                key={idx}
                className={`flex gap-3 ${
                  idx % 2 === 0 ? "justify-end" : "justify-start"
                }`}
              >
                {/* Left */}
                <figure className="bg-[#C6DFF6] h-11 md:h-[60px] w-11 md:w-[60px] rounded-full flex justify-center items-center shrink-0">
                  <Image
                    src={Profile}
                    alt="profile-img"
                    height={32}
                    width={32}
                  />
                </figure>

                {/* Right */}
                <p className="bg-[#F3F4F6] p-3 rounded-[8px] max-w-[530px] text-[14px] font-poppins text-[#071431] w-full">
                  {messages}
                </p>
              </div>
            ))}
          </div>

          {/* Form */}
          <form
            onSubmit={handleSend}
            className="border-t border-[#EAEAEA] px-3 md:px-6 py-2 md:py-3 flex items-center gap-3 md:gap-5"
          >
            <input
              type="text"
              placeholder="Type your message"
              onChange={e => setSearch(e.target.value)}
              className="py-3 md:pl-[30px] rounded-[8px] border-none text-[14px] font-poppins text-[#071431] font-normal outline-0 w-full"
            />

            <button
              disabled={isPending}
              type="submit"
              className={`primary-btn shrink-0 flex gap-1 items-center ${
                isPending && "!cursor-not-allowed"
              }`}
            >
              {isPending ? (
                <div className="flex gap-2 items-center">
                  <CgSpinnerTwo className="animate-spin text-xl" />
                  <span>Sending...</span>
                </div>
              ) : (
                <p className="flex gap-1 items-center">
                  Send <BiSend />
                </p>
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
