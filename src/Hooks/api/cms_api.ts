import useClientApi from "@/Hooks/useClientApi";
import { useServerApi } from "@/Hooks/useServerApi";

// =======================================================
//  CSR (Client Side Rendering)
// =======================================================

// Detail Pricing
export const useDetailPricing = (plan_id: number) => {
  return useClientApi({
    method: "get",
    enabled: !!plan_id,
    key: ["detail-pricing", plan_id],
    endpoint: `/api/subscription-plan/${plan_id}`,
    queryOptions: {
      staleTime: 5 * 60 * 1000,
    },
  });
};

// =======================================================
//  SSR (Server Side Rendering)
// =======================================================

// Hero Data
export async function getHeroData() {
  return useServerApi("/api/cms/home-page", 3600);
}

// Pricing Data
export async function getPricingData() {
  return useServerApi("/api/subscription-plans", 3600);
}

// FAQ Data
export async function getFaqData() {
  return useServerApi("/api/faq/all", 3600);
}

// Site Settings
export async function getSiteSettings() {
  return useServerApi("/api/site-settings", 3600);
}

// Dynamic Pages
export async function getDynamicPages() {
  return useServerApi("/api/dynamic-pages", 3600);
}

// Details Dynamic page
export async function getSingleDynamicPage(slug: string) {
  return useServerApi(`/api/dynamic-pages/single/${slug}`, 3600);
}
