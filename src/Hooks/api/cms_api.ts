import useApi from "@/Hooks/api/useApi";

// Hero Section
export const useHeroData = () => {
  return useApi({
    method: "get",
    key: ["hero-section"],
    endpoint: "/api/cms/home-page",
  });
};

// FAQ Section
export const useFaqData = () => {
  return useApi({
    method: "get",
    key: ["faq-data"],
    endpoint: "/api/faq/all",
  });
};

// Dynamic Pages
export const useDynamicPages = () => {
  return useApi({
    method: "get",
    key: ["dynamic-pages"],
    endpoint: "/api/dynamic-pages",
  });
};

// Single Dynamic Page
export const useSingleDynamicPage = (slug: any) => {
  return useApi({
    method: "get",
    enabled: !!slug,
    key: ["single-dynamic-page", slug],
    endpoint: `/api/dynamic-pages/single/${slug}`,
  });
};

// Get Pricing
export const useGetPricing = () => {
  return useApi({
    method: "get",
    key: ["get-pricing"],
    endpoint: "/api/subscription-plans",
  });
};

// Detail Pricing
export const useDetailPricing = (plan_id: number) => {
  return useApi({
    method: "get",
    enabled: !!plan_id,
    key: ["detail-pricing", plan_id],
    endpoint: `/api/subscription-plan/${plan_id}`,
  });
};
