"use client";
import resumeImage from "@/assets/images/dashboard/resume.png";
import resumeImage2 from "@/assets/images/dashboard/resume2.png";
import Button from "@/Components/Tags/Button/Button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ResumeItem = {
  id: number;
  resume_image: any;
  resume_template_name: string;
  resume_short_description: string;
};

const data: ResumeItem[] = [
  {
    id: 1,
    resume_image: resumeImage,
    resume_template_name: "Auroa",
    resume_short_description: "Minmalist",
  },
  {
    id: 2,
    resume_image: resumeImage2,
    resume_template_name: "Borealis",
    resume_short_description: "Minmalist",
  },
  {
    id: 3,
    resume_image: resumeImage,
    resume_template_name: "Modern",
    resume_short_description: "Minmalist",
  },
  {
    id: 4,
    resume_image: resumeImage,
    resume_template_name: "Modern",
    resume_short_description: "Minmalist",
  },
  {
    id: 5,
    resume_image: resumeImage,
    resume_template_name: "Modern",
    resume_short_description: "Minmalist",
  },
  {
    id: 6,
    resume_image: resumeImage,
    resume_template_name: "Modern",
    resume_short_description: "Minmalist",
  },
];

const Page = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [previewResume, setPreviewResume] = useState<ResumeItem | null>(null);

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
      <div className="mt-8 grid grid-cols-2 2xl:grid-cols-3 4xl:grid-cols-4 gap-6 3xl:gap-x-6 3xl:gap-y-10">
        {data.map(item => (
          <div
            key={item.id}
            className="relative group rounded-2xl border-2 border-transparent p-6 bg-white hover:bg-transparent hover:border-primary-blue transition-all duration-300 pb-[80px] shadow-[-2px_4px_58px_rgba(244,250,255,0.11)]"
          >
            {/* Resume Image */}
            <figure className="w-full rounded-xl h-[230px] mx-auto shadow-xl mb-5 overflow-hidden">
              <Image
                src={item.resume_image}
                alt="resume image"
                className="w-full rounded-2xl h-fit"
              />
            </figure>
            {/* Resume Name */}
            <h3 className="text-secondary-blue text-center text-3xl 2xl:text-4xl 3xl:text-5xl leading-[132%] font-semibold capitalize">
              {item.resume_template_name}
            </h3>
            {/* Resume Short Description */}
            <p className="text-[#A3A3A3] text-center text-xl 3xl:text-[22px] leading-[164%]">
              {item.resume_short_description}
            </p>
            {/* Buttons */}
            <div className="absolute left-1/2 -translate-x-1/2 translate-y-5 group-hover:translate-y-1 opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-3 3xl:justify-between items-center">
              {/* View btn */}
              <Button
                Txt="View Template"
                onClick={() => {
                  setOpen(true);
                  setPreviewResume(item);
                }}
                animation={false}
                className="px-4 3xl:px-6 py-2.5 3xl:py-3.5 text-xs rounded-[50px] bg-transparent text-primary-blue border border-primary-blue cursor-pointer text-nowrap"
              />
              {/* Link */}
              <Link
                className="px-4 3xl:px-6 py-2.5 3xl:py-3.5 text-xs rounded-[50px] bg-[linear-gradient(90deg,_#21489F_0%,_#0184FF_100%)] text-white cursor-pointer text-nowrap"
                href="/dashboard/resume-builder/collect-personal-info"
              >
                Use This Template
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {open && previewResume && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-[1px]">
          <div
            className="absolute inset-0"
            onClick={() => setOpen(false)}
          ></div>

          <div className="relative z-10 w-full max-w-2xl xl:max-w-3xl h-[calc(100vh-50px)] overflow-y-auto bg-white rounded-lg shadow-lg">
            <Image
              src={previewResume.resume_image}
              alt="preview resume"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
