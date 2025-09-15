import useClientApi from "@/Hooks/useClientApi";

// Dynamic Pages
export const useDynamicPages = () => {
  return useClientApi({
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
  return useClientApi({
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
  return useClientApi({
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
