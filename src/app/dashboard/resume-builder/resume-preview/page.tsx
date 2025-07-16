"use client";
import Image from "next/image";
import resumeImage from "@/assets/images/dashboard/preview.png";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  return (
    <div>
      {/* Title */}
      <h4 className="text-dark-blue text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl font-semibold leading-[132%] tracking-[-0.319px] mb-5 3xl:mb-7">
        Check out your <span className="text-blue-500">resume</span>.
      </h4>

      <div className="bg-white shadow-box rounded-lg mb-5">
        {/* Image */}
        <Image
          src={resumeImage}
          alt="resume preview"
          className="w-full h-fit"
        />
      </div>

      <div className="flex flex-col md:flex-row md:justify-between items-center gap-3 md:gap-0 dashboard_card">
        {/* Back btn */}
        <button
          onClick={e => {
            e.preventDefault();
            router.back();
          }}
          className="secondary-btn"
        >
          Back
        </button>

        <div className="flex justify-end gap-3 xl:gap-5 items-center">
          {/* Save btn */}
          <button className="secondary-btn">Save</button>

          {/* pdf btn */}
          <button className="primary-btn">Export as pdf</button>
        </div>
      </div>
    </div>
  );
};

export default page;
