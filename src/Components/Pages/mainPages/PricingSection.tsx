import PriciningCard from "@/Components/Cards/PriciningCard";
import Container from "@/Components/Common/Container";
import Heading from "@/Components/Tags/Heading/Heading";
const pricingArr = [
  {
    title: "Free",
    pricePerMonth: "00",
    features: ["1 Free Cover Letter", "1 Free Resume"],
    btnTxt: "Get Started for Free",
  },
  {
    title: "Premium Access",
    pricePerMonth: "9.99",
    features: [
      "AI-Generated Resume or Cover Letter",
      "Unlimited Resume & Cover Letter Creation",
      "AI Interview Assistant",
    ],
    btnTxt: "Upgrade to Premium",
    yearlyPrice: "99",
    discount: "19",
  },
  {
    title: "Pay As You Go",
    pricePerMonth: "2.99",
    features: [
      " AI-Generated Resume or Cover Letter",
      "Instant Download (PDF/DOCX)",
    ],
    btnTxt: "Get Started for Free",
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="pb-8 md:pb-12 xl:pb-20 3xl:pb-[120px]">
      <Container>
        <div className="flex flex-col 2xl:items-center gap-y-3 md:gap-y-5 2xl:gap-y-10">
          <Heading
            Txt={"Pricing"}
            className="text-2xl md:text-4xl xl:text-5xl 3xl:text-[64px] text-center font-[600] leading-[164%] capitalize text-primary-blue"
          />

          <div className="grid xl:grid-cols-2 2xl:grid-cols-3 gap-6">
            {pricingArr.map((item, idx) => {
              return (
                <PriciningCard
                  idx={idx}
                  key={idx}
                  title={item.title}
                  pricePerMonth={item.pricePerMonth}
                  yearlyPrice={item.yearlyPrice}
                  features={item.features}
                  discount={item.discount}
                  btnTxt={item.btnTxt}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PricingSection;
