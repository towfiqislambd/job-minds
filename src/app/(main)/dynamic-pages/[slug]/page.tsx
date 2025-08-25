"use client";
import React, { useEffect } from "react";
import Container from "@/Components/Common/Container";
import { useSingleDynamicPage } from "@/Hooks/api/cms_api";
import { Loader } from "@/Components/Loader/Loader";

const page = ({ params }: any) => {
  const { slug } = params;
  const { data: singleDynamicData, isLoading } = useSingleDynamicPage(slug);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="h-[70vh] flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <section className="my-10">
      <Container>
        {/* Page Title */}
        <h2 className="text-2xl font-semibold text-secondary-black mb-5">
          {singleDynamicData?.data?.page_title}
        </h2>

        {/* Page Content */}
        <div
          dangerouslySetInnerHTML={{
            __html: singleDynamicData?.data?.page_content,
          }}
          className="text-secondary-gray leading-8  max-w-[900px] [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:pl-5 [&_ol]:list-decimal"
        />
      </Container>
    </section>
  );
};

export default page;
