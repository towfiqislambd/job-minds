import useApi from "@/Hooks/api/useApi";

// Hero Section
export const useHeroData = () => {
  return useApi({
    method: "get",
    key: ["hero-section"],
    endpoint: "/api/cms/home-page",
    queryOptions: {
      staleTime: 5 * 60 * 1000,
    },
  });
};

// FAQ Section
export const useFaqData = () => {
  return useApi({
    method: "get",
    key: ["faq-data"],
    endpoint: "/api/faq/all",
    queryOptions: {
      staleTime: 5 * 60 * 1000,
    },
  });
};

// Dynamic Pages
export const useDynamicPages = () => {
  return useApi({
    method: "get",
    key: ["dynamic-pages"],
    endpoint: "/api/dynamic-pages",
    queryOptions: {
      staleTime: 5 * 60 * 1000,
    },
  });
};

// Single Dynamic Page
export const useSingleDynamicPage = (slug: any) => {
  return useApi({
    method: "get",
    enabled: !!slug,
    key: ["single-dynamic-page", slug],
    endpoint: `/api/dynamic-pages/single/${slug}`,
    queryOptions: {
      staleTime: 5 * 60 * 1000,
    },
  });
};

// Get Pricing
export const useGetPricing = () => {
  return useApi({
    method: "get",
    key: ["get-pricing"],
    endpoint: "/api/subscription-plans",
    queryOptions: {
      staleTime: 5 * 60 * 1000,
    },
  });
};

// Detail Pricing
export const useDetailPricing = (plan_id: number) => {
  return useApi({
    method: "get",
    enabled: !!plan_id,
    key: ["detail-pricing", plan_id],
    endpoint: `/api/subscription-plan/${plan_id}`,
    queryOptions: {
      staleTime: 5 * 60 * 1000,
    },
  });
};
