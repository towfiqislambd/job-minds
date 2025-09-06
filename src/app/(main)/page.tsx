"use client";
import ServiceContainer from "@/Components/Pages/mainPages/ServiceContainer";
import HeroSection from "../../Components/Pages/mainPages/HeroSection";
import PricingSection from "@/Components/Pages/mainPages/PricingSection";
import FAQSection from "@/Components/Pages/mainPages/FAQSection";
import { useFaqData, useGetPricing, useHeroData } from "@/Hooks/api/cms_api";
import { Loader } from "@/Components/Loader/Loader";
import { useEffect } from "react";

export default function Home() {
  const { data: heroData, isLoading: heroDataLoading } = useHeroData();
  const { data: faqData, isLoading: faqDataLoading } = useFaqData();
  const { data: pricingData, isLoading: pricingDataLoading } = useGetPricing();
  const isLoading = heroDataLoading || faqDataLoading || pricingDataLoading;

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
      <div className="h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <section className="bg-[#F6F6F8] pb-16 md:pb-20 2xl:pb-[120px] z-0">
      <HeroSection data={heroData?.data?.hero_section} />
      <ServiceContainer />
      <PricingSection data={pricingData?.data} />
      <FAQSection data={faqData?.data} />
    </section>
  );
}
