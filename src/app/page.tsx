import ServiceContainer from "@/Components/Pages/Home/ServiceContainer";
import HeroSection from "./../Components/Pages/Home/HeroSection";

export default function Home() {
  return (
    <section className="bg-[#F6F6F8] z-0">
      <HeroSection />
      <ServiceContainer />
    </section>
  );
}
