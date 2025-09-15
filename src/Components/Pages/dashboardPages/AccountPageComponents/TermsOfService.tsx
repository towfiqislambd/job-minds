"use client";

export default function TermsOfService({ data }: any) {
  return (
    <section className="dashboard_card">
      <div
        dangerouslySetInnerHTML={{ __html: data?.page_content }}
        className="[&_ul]:list-disc [&_ul]:pl-5 [&_ol]:pl-5 [&_ol]:list-decimal"
      />
    </section>
  );
}
