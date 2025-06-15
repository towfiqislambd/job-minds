"use client";
import Heading from "@/Components/Tags/Heading/Heading";
import notFound from "../assets/not-found.avif";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "@/Components/Tags/Button/Button";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";

const page = () => {
  const router = useRouter();
  return (
    <section className="py-[63px] lg:px-5 3xl:px-0">
      <div className="flex flex-col container items-center justify-center gap-y-8">
        <figure className="w-full md:w-[500px] xl:w-[582px] h-auto md:h-[300px] xl:h-[354px]">
          <Image
            src={notFound}
            width={582}
            height={354}
            alt="not found"
            className="!w-full !h-full !object-cover"
          />
        </figure>
        <div className="flex flex-col gap-y-6 items-center">
          <Button
            onClick={() => {
              router.push("/");
            }}
            Txt={"Back to Home"}
            className="primary-btn"
          />
        </div>
      </div>
    </section>
  );
};

export default page;
