import React from "react";
import Container from "@/Components/Common/Container";
import { getSingleDynamicPage } from "@/Hooks/api/cms_api";

const page = async ({ params }: any) => {
  const { slug } = params;
  const pageData = await getSingleDynamicPage(slug);

  return (
    <section className="my-10">
      <Container>
        {/* Page Title */}
        <h2 className="text-2xl font-semibold text-secondary-black mb-5">
          {pageData?.data?.page_title}
        </h2>

        {/* Page Content */}
        <div
          dangerouslySetInnerHTML={{
            __html: pageData?.data?.page_content,
          }}
          className="text-secondary-gray leading-8  max-w-[900px] [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:pl-5 [&_ol]:list-decimal"
        />
      </Container>
    </section>
  );
};

export default page;
