"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Button from "@/Components/Tags/Button/Button";
import { useAllResumeTemplate } from "@/Hooks/api/dashboard_api";
import { Loader } from "@/Components/Loader/Loader";

type ResumeItem = {
  id: number;
  title: string;
  template_name: string;
  template_thumbnail_image: string;
  template_full_image: string;
};

const Page = () => {
  const { data: allResumeData, isLoading } = useAllResumeTemplate();
  const [open, setOpen] = useState<boolean>(false);
  const [previewResume, setPreviewResume] = useState<string>("");

  if (isLoading) {
    return (
      <div className="h-[80vh] flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <>
      {/* Title */}
      <h3 className="section_title">Build a Standout Resume in Minutes</h3>

      {/* Description */}
      <p className="section_description">
        Let AI craft your resume with smart suggestions, clean formatting, and
        ready-to-use templates — no design skills required.
      </p>

      {/* Mapped Data */}
      <div className="mt-8 grid lg:grid-cols-2 2xl:grid-cols-3 4xl:grid-cols-4 gap-6 3xl:gap-x-6 3xl:gap-y-10">
        {allResumeData?.data?.map(
          ({
            id,
            title,
            template_name,
            template_thumbnail_image,
            template_full_image,
          }: ResumeItem) => (
            <div
              key={id}
              className="relative group rounded-2xl border-2 border-transparent p-5 bg-white hover:bg-transparent hover:border-primary-blue transition-all duration-300 pb-[80px] shadow-[-2px_4px_58px_rgba(244,250,255,0.11)]"
            >
              {/* Template Image */}
              <figure className="w-full rounded-2xl h-[230px] mx-auto shadow-xl mb-5 overflow-hidden relative">
                <Image
                  src={`${process.env.NEXT_PUBLIC_SITE_URL}/${template_thumbnail_image}`}
                  alt="resume image"
                  fill
                  className="w-full rounded-2xl"
                />
              </figure>

              {/* Template Name */}
              <h3 className="text-secondary-blue text-center text-3xl 2xl:text-4xl 3xl:text-5xl leading-[132%] font-semibold capitalize">
                {template_name}
              </h3>

              {/* Title */}
              <p className="text-[#A3A3A3] text-center text-xl 3xl:text-[22px] leading-[164%]">
                {title}
              </p>

              {/* Buttons */}
              <div className="absolute left-1/2 -translate-x-1/2 translate-y-5 group-hover:translate-y-1 opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-3 3xl:justify-between items-center">
                {/* View btn */}
                <Button
                  Txt="View Template"
                  onClick={() => {
                    setOpen(true);
                    setPreviewResume(template_full_image);
                  }}
                  animation={false}
                  className="px-4 3xl:px-6 py-2.5 3xl:py-3.5 text-xs rounded-[50px] bg-transparent text-primary-blue border border-primary-blue cursor-pointer text-nowrap"
                />

                {/* Use Template btn */}
                <Link
                  href={`/dashboard/resume-builder/${id}`}
                  className="px-4 3xl:px-6 py-2.5 3xl:py-3.5 text-xs rounded-[50px] bg-[linear-gradient(90deg,_#21489F_0%,_#0184FF_100%)] text-white cursor-pointer text-nowrap"
                >
                  Use This Template
                </Link>
              </div>
            </div>
          )
        )}
      </div>

      {/* Resume Preview Modal */}
      {open && previewResume && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-[1px]">
          <div className="absolute inset-0" onClick={() => setOpen(false)} />

          <div className="relative z-10 w-[calc(100vw-30px)] lg:max-w-2xl xl:max-w-3xl max-h-[calc(100vh-50px)] overflow-y-auto bg-white rounded-lg shadow-lg">
            <Image
              src={`${process.env.NEXT_PUBLIC_SITE_URL}/${previewResume}`}
              alt="preview resume"
              width={500}
              height={500}
              className="w-full h-auto object-contain"
            />

            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 lg:top-3 right-2 lg:right-3 cursor-pointer hover:bg-gray-950 transition-all duration-300 w-8 lg:w-10 h-8 lg:h-10 rounded-full bg-gray-700 text-white grid place-items-center"
            >
              <RxCross2 className="text-lg lg:text-xl font-bold" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
