"use client";
import { Loader } from "@/Components/Loader/Loader";
import { useSingleDynamicPage } from "@/Hooks/api/cms_api";
import React, { useEffect } from "react";

const TermsOfService = () => {
  const { data: termsData, isLoading } = useSingleDynamicPage(
    "terms-and-conditions"
  );

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

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
    <section className="dashboard_card">
      <div
        dangerouslySetInnerHTML={{
          __html: termsData?.data?.page_content,
        }}
        className="[&_ul]:list-disc [&_ul]:pl-5 [&_ol]:pl-5 [&_ol]:list-decimal"
      />
    </section>
  );
};

export default TermsOfService;
