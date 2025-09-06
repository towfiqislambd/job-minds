import PricingCard from "@/Components/Cards/PricingCard";
import Container from "@/Components/Common/Container";
import Heading from "@/Components/Tags/Heading/Heading";

type featherItem = {
  feature_name: string;
};

type pricingItem = {
  id: number;
  name: string;
  type: string;
  description: string;
  price: string;
  interval: string;
  features: featherItem[];
};

interface pricingData {
  data: pricingItem[];
}

const PricingSection = ({ data }: pricingData) => {
  return (
    <section id="pricing" className="pb-8 md:pb-12 xl:pb-20 3xl:pb-[120px]">
      <Container>
        <div className="flex flex-col 2xl:items-center gap-y-3 md:gap-y-5 2xl:gap-y-10">
          <Heading
            Txt={"Pricing"}
            className="text-2xl md:text-4xl xl:text-5xl 3xl:text-[64px] text-center font-[600] leading-[164%] capitalize text-primary-blue"
          />

          <div className="grid xl:grid-cols-2 2xl:grid-cols-3 gap-6">
            {data?.map((item, idx) => {
              return (
                <PricingCard
                  idx={idx}
                  id={item?.id}
                  key={item?.id}
                  package_name={item?.name}
                  price={item?.price}
                  interval={item?.interval}
                  features={item?.features}
                  type={item?.type}
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
