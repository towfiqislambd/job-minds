import {
  getFaqData,
  getHeroData,
  getPricingData,
} from "@/Hooks/api/server_side_api";
import HeroSection from "@/Components/Pages/mainPages/HeroSection";
import PricingSection from "@/Components/Pages/mainPages/PricingSection";
import FAQSection from "@/Components/Pages/mainPages/FAQSection";
import ServiceContainer from "@/Components/Pages/mainPages/ServiceContainer";

export default async function Home() {
  const [heroData, faqData, pricingData] = await Promise.all([
    getHeroData(),
    getFaqData(),
    getPricingData(),
  ]);

  return (
    <section className="bg-[#F6F6F8] pb-16 md:pb-20 2xl:pb-[120px] z-0">
      <HeroSection data={heroData?.data?.hero_section} />
      <ServiceContainer />
      <PricingSection data={pricingData?.data} />
      <FAQSection data={faqData?.data} />
    </section>
  );
}
