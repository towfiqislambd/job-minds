import { getPricingData, getSingleDynamicPage } from "@/Hooks/api/cms_api";
import AccountTabs from "@/Components/Pages/dashboardPages/AccountPageComponents/AccountTabs";

export default async function AccountPage({ searchParams }: any) {
  const params = await searchParams;
  const package_id = params?.package_id;
  const termsData = await getSingleDynamicPage("terms-and-conditions");
  const pricingData = await getPricingData();

  return (
    <AccountTabs
      package_id={package_id}
      termsData={termsData}
      pricingData={pricingData}
    />
  );
}
