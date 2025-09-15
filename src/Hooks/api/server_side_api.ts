import { useServerApi } from "@/Hooks/useServerApi";

export async function getHeroData() {
  return useServerApi("/api/cms/home-page", 3600);
}

export async function getPricingData() {
  return useServerApi("/api/subscription-plans", 3600);
}

export async function getFaqData() {
  return useServerApi("/api/faq/all", 3600);
}

export async function getSiteSettings() {
  return useServerApi("/api/site-settings", 3600);
}
