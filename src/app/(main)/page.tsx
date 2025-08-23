"use client";
import ServiceContainer from "@/Components/Pages/mainPages/ServiceContainer";
import HeroSection from "../../Components/Pages/mainPages/HeroSection";
import PricingSection from "@/Components/Pages/mainPages/PricingSection";
import FAQSection from "@/Components/Pages/mainPages/FAQSection";
import { useFaqData, useHeroData } from "@/Hooks/cms_api";

export default function Home() {
  const { data: heroData, isLoading: heroDataLoading } = useHeroData();
  const { data: faqData, isLoading: faqDataLoading } = useFaqData();

  return (
    <section className="bg-[#F6F6F8] pb-16 md:pb-20 2xl:pb-[120px] z-0">
      <HeroSection data={heroData?.data?.hero_section} />
      <ServiceContainer />
      <PricingSection />
      <FAQSection data={faqData?.data} />
    </section>
  );
}
