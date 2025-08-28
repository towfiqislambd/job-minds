"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
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
  // Hooks
  const { user } = useAuth();
  const chatContainerRef = useRef<HTMLDivElement>(null);

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

  // Auto-scroll when new messages arrive
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [allChats?.data]);

  return (
    <div className="dashboard_card">
      <h3 className="section_sub_title">Mock Interview Session</h3>

      <div className="mt-5 border border-[#EAEAEA] rounded-[8px] h-[calc(100vh-250px)] flex flex-col justify-between">
        {/* Upper Part */}
        <div className="border-b border-[#EAEAEA] sticky top-0 z-50 bg-white py-3.5 px-4 flex gap-3 lg:gap-5 items-center rounded-t-[8px]">
          <figure className="bg-[#C6DFF6] size-14 rounded-full flex justify-center items-center">
            <Image src={Profile} alt="profile-img" height={32} width={32} />
          </figure>

          <h3 className="text-lg lg:text-[20px] font-poppins text-[#071431] font-semibold lg:font-bold">
            Ai Interviewer
          </h3>
        </div>

        {/* All Messages */}
        <div
          ref={chatContainerRef}
          className="my-4 px-3 md:px-5 lg:px-7 grow overflow-y-auto"
        >
          {isLoading ? (
            Array.from({ length: 9 }).map((_, idx) => (
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
            <div className="space-y-5 flex flex-col h-full">
              {allChats?.data.length === 0 ? (
                <div className="flex-1 flex flex-col gap-3 justify-center items-center">
                  <LuBotMessageSquare className="text-6xl text-gray-500" />
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

        {/* Form */}
        <form
          onSubmit={handleSend}
          className="border-t border-[#EAEAEA] px-3 md:px-6 py-2 md:py-3 flex items-center gap-3 md:gap-5 sticky bottom-0 z-50 bg-white rounded-b-[8px]"
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
  );
};

export default page;
