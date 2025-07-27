import ServiceContainer from "@/Components/Pages/Home/ServiceContainer";
import HeroSection from "../../Components/Pages/Home/HeroSection";
import PricingSection from "@/Components/Pages/Home/PricingSection";
import FAQSection from "@/Components/Pages/Home/FAQSection";

const data = [
  {
    question: "What is this site about?",
    answer: "It's a portfolio site for showcasing projects and skills.",
  },
  {
    question: "How can I contact you?",
    answer:
      "You can fill out the contact form or email me at example@example.com.",
  },
  {
    question: "What technologies have you used to build this site?",
    answer:
      "This site is built with React, Next.js, TailwindCSS, and Node.js for the backend.",
  },
  {
    question: "Can I download your resume?",
    answer:
      "Yes! You can find a downloadable link in the 'About' or 'Contact' section of the site.",
  },
  {
    question: "Are you open to freelance or full‑time opportunities?",
    answer:
      "Absolutely! I'm open to both freelance and full‑time roles. Feel free to get in touch",
  },
];

export default function Home() {
  return (
    <section className="bg-[#F6F6F8] pb-16 md:pb-20 2xl:pb-[120px] z-0">
      <HeroSection />
      <ServiceContainer />
      <PricingSection />
      <FAQSection data={data} />
    </section>
  );
}
