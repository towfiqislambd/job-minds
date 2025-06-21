import PriciningCard from '@/Components/Cards/PriciningCard';
import Heading from '@/Components/Tags/Heading/Heading';


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
    <section className="flex flex-col pb-[120px]  gap-y-[44px] items-center ">
      <Heading
        Txt={"Pricing"}
        className="text-[64px] font-[600] leading-[164%] capitalize text-primary-blue "
      />
      <div className='flex flex-row gap-x-6 ' >
        {pricingArr.map((item, idx) => {
          return (
            <PriciningCard
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
    </section>
  );
}

export default PricingSection