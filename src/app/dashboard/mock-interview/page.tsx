"use client";
import Image from "next/image";
import React, { useState } from "react";
import Profile from "@/assets/images/dashboard/profile.svg";
import Article from "@/assets/images/dashboard/Article.svg";
import { BiSend } from "react-icons/bi";

const page = () => {
  const [inputValue, setInputValue] = useState("");
  const [userMessages, setUserMessages] = useState<
    { text: string; time: string }[]
  >([]);

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const handleSend = () => {
    if (inputValue.trim() !== "") {
      const newMessage = {
        text: inputValue,
        time: getCurrentTime(),
      };
      setUserMessages(prev => [...prev, newMessage]);
      setInputValue("");
    }
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
              <h4 className="text-[14px] font-poppins font-normal text-[#696969]">
                Session Time : 12 :35
              </h4>
            </div>
          </div>
          <div className="my-3 md:my-6 lg:mt-10 lg:mb-14 px-3 md:px-5 lg:px-7">
            <div className="flex gap-3">
              <div className="bg-[#C6DFF6] h-11 md:h-[60px] w-11 md:w-[60px] rounded-full flex justify-center items-center shrink-0">
                <Image src={Profile} alt="profile-img" height={32} width={32} />
              </div>
              <div className="bg-[#F3F4F6] p-3 rounded-[8px] max-w-[530px] w-full">
                <p className="text-[14px] font-poppins text-[#071431] font-normal">
                  Hello! I'll be your AI interviewer today for the Software
                  Engineer position. Let's start with a common question: Can you
                  explain your experience with React.js and component lifecycle
                  management?
                </p>
                <h5 className="text-[14px] font-poppins font-normal text-[#696969] pt-2">
                  2:34 PM
                </h5>
              </div>
            </div>

            <div className="flex gap-x-3 my-6 justify-end items-start">
              <div className="bg-[#EEF5FF] p-3 rounded-[8px] max-w-[530px] w-full">
                <p className="text-[14px] font-poppins text-[#071431] font-normal">
                  Hello! I'll be your AI interviewer today for the Software
                  Engineer position. Let's start with a common question: Can you
                  explain your experience with React.js and component lifecycle
                  management?
                </p>
                <h5 className="text-[14px] font-poppins font-normal text-[#696969] pt-2">
                  2:34 PM
                </h5>
              </div>
              <Image src={Article} alt="profile-img" height={60} width={60} />
            </div>

            <div className="flex gap-3">
              <div className="bg-[#C6DFF6] h-11 md:h-[60px] w-11 md:w-[60px] rounded-full flex justify-center items-center shrink-0">
                <Image src={Profile} alt="profile-img" height={32} width={32} />
              </div>
              <div className="bg-[#F3F4F6] p-3 rounded-[8px] max-w-[530px] w-full">
                <p className="text-[14px] font-poppins text-[#071431] font-normal">
                  Hello! I'll be your AI interviewer today for the Software
                  Engineer position. Let's start with a common question: Can you
                  explain your experience with React.js and component lifecycle
                  management?
                </p>
                <h5 className="text-[14px] font-poppins font-normal text-[#696969] pt-2">
                  2:34 PM
                </h5>
              </div>
            </div>

            {userMessages.map((msg, idx) => (
              <div className="flex gap-3 my-6 justify-end" key={idx}>
                <div className="bg-[#EEF5FF] p-3 rounded-[8px] max-w-[530px] w-full">
                  <p className="text-[14px] font-poppins text-[#071431] font-normal">
                    {msg.text}
                  </p>
                  <h5 className="text-[14px] font-poppins font-normal text-[#696969] pt-2">
                    {msg.time}
                  </h5>
                </div>
                <Image src={Article} alt="profile-img" height={60} width={60} />
              </div>
            ))}
          </div>
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSend();
            }}
            className="border-t border-[#EAEAEA] px-3 md:px-6 py-2 md:py-3 flex items-center gap-3 md:gap-5"
          >
            <input
              type="search"
              placeholder="type your response"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              className="py-3 md:pl-[30px] rounded-[8px] border-none text-[14px] font-poppins text-[#071431] font-normal outline-0 w-full"
            />
            <button
              type="submit"
              className="primary-btn shrink-0 flex gap-1 items-center"
            >
              Send
              <BiSend />
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-end items-center gap-4">
        <button className="secondary-btn !block md:inline !w-full md:!w-fit">
          End Session
        </button>
        <button className="primary-btn !block md:inline !w-full md:!w-fit">
          Next Question
        </button>
      </div>
    </>
  );
};

export default page;
