"use client";
import Image from "next/image";
import React, { useState } from "react";
import Profile from "@/assets/images/dashboard/profile.svg";
import { BiSend } from "react-icons/bi";
import { useAiChatHistory, useAiInterviewer } from "@/Hooks/api/dashboard_api";
import toast from "react-hot-toast";
import { CgSpinnerTwo } from "react-icons/cg";
import useAuth from "@/Hooks/useAuth";
import { FaUser } from "react-icons/fa";
import { AiSvg } from "@/Components/SvgContainer/SvgContainer";
import { LuBotMessageSquare } from "react-icons/lu";

const page = () => {
  // Hook
  const { user } = useAuth();

  // State
  const [search, setSearch] = useState<string>("");

  // Mutations
  const { data: allChats, isLoading } = useAiChatHistory();
  const { mutate: aiInterviewMutation, isPending } = useAiInterviewer();

  // Func for send message
  const handleSend = (e: any) => {
    e.preventDefault();
    if (!search) {
      return toast.error("Please write something");
    }
    aiInterviewMutation({ user_input: search });
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
          {/* All Messages */}
          <div className="my-3 md:my-6 lg:mt-10 lg:mb-14 px-3 md:px-5 lg:px-7">
            {isLoading ? (
              Array.from({ length: 6 }).map((_, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    idx % 2 === 0 ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex gap-5 animate-pulse ${
                      idx % 2 === 0 ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    <div className="size-12 rounded-full bg-gray-200 shrink-0" />
                    <div className="flex flex-col gap-2">
                      <div
                        className={`h-4 w-32 bg-gray-200 rounded-md ${
                          idx % 2 === 0 ? "self-end" : "self-start"
                        }`}
                      />
                      <div className="h-4 w-48 bg-gray-200 rounded-md" />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="space-y-5">
                {allChats?.data.length === 0 ? (
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <LuBotMessageSquare className="text-5xl text-gray-500" />
                    <p className="font-medium text-primary-gray">
                      Start Chatting With AI Interviewer
                    </p>
                  </div>
                ) : (
                  allChats?.data?.map(({ id, sender, message }: any) => (
                    <div
                      key={id}
                      className={`flex ${
                        sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`flex gap-3 items-start ${
                          sender === "user" ? "flex-row-reverse" : "flex-row"
                        }`}
                      >
                        {/* Author Image */}
                        <figure
                          className={`${
                            sender === "user" ? "bg-gray-200" : "bg-[#C6DFF6]"
                          } size-12 rounded-full flex justify-center items-center shrink-0 relative`}
                        >
                          {sender === "user" ? (
                            user?.avatar ? (
                              <Image
                                src={`${process.env.NEXT_PUBLIC_SITE_URL}/${user?.avatar}`}
                                alt="profile-img"
                                fill
                                className="rounded-full size-full object-cover"
                              />
                            ) : (
                              <FaUser className="text-lg text-gray-500" />
                            )
                          ) : (
                            <AiSvg />
                          )}
                        </figure>

                        {/* Chats */}
                        <p
                          className={`bg-[#F3F4F6] px-3 py-2.5 rounded-[8px] text-sm text-gray-700 leading-[164%] w-fit max-w-[500px]`}
                        >
                          {message}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
          {/* EEF5FF */}
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
