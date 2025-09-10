"use client";
import Link from "next/link";
import Image from "next/image";
import notFound from "../assets/not-found.avif";
import Container from "@/Components/Common/Container";

const page = () => {
  return (
    <section className="w-full min-h-screen flex justify-center items-center">
      <Container>
        <div className="my-10 flex flex-col items-center justify-center gap-y-8">
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
            <Link href="/" className="primary-btn">
              Back to Home
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default page;
