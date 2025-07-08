import React from "react";
const data = [
  {
    id: 1,
    title: "What We Offer",
    description:
      "Job Minds provides tools to build resumes, write cover letters, improve LinkedIn profiles, prep for interviews, and match job listings.",
  },
  {
    id: 2,
    title: "Accounts",
    description:
      "Keep yo ur login secure. Don’t misuse the app or upload harmful content.",
  },
  {
    id: 3,
    title: "Plans & Payments",
    description:
      "Free plan includes 1 resume & 1 cover letter. Paid plans offer more access. Payments via Stripe or PayPal",
  },
  {
    id: 4,
    title: "Termination",
    description:
      "We may suspend accounts for violations. You can delete your account anytime.",
  },
  {
    id: 5,
    title: "Content Rights",
    description:
      "JYou own what you upload. We own our templates and tools. We use your data only to improve the service.",
  },
  {
    id: 6,
    title: "Privacy",
    description: "We protect your data. See our Privacy Policy for details.",
  },
  {
    id: 6,
    title: "No Guarantees",
    description:
      "We don’t promise job offers. The service is provided “as is.”",
  },
];

const TermsOfService = () => {
  return (
    <section className="p-7 bg-white shadow-box rounded-lg">
      <h4 className="section_sub_title">Terms of Service</h4>
      <p className="section_sub_description !mb-10">
        Welcome to Job Minds, your AI-powered resume and job assistant. By using
        our mobile app or website, you agree to the following terms:
      </p>

      {/* Map */}
      {data?.map(({ id, title, description }) => (
        <div key={id}>
          <h4 className="section_sub_title !text-lg">{title}</h4>
          <p className="section_sub_description">{description}</p>
        </div>
      ))}
    </section>
  );
};

export default TermsOfService;
