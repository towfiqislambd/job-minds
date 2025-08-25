import useApi from "@/Hooks/api/useApi";

// Hero Section
export const useHeroData = () => {
  return useApi({
    method: "get",
    key: "hero-section",
    endpoint: "/api/cms/home-page",
  });
};

// FAQ Section
export const useFaqData = () => {
  return useApi({
    method: "get",
    key: "faq-data",
    endpoint: "/api/faq/all",
  });
};

// Dynamic Pages
export const useDynamicPages = () => {
  return useApi({
    method: "get",
    key: "dynamic-pages",
    endpoint: "/api/dynamic-pages",
  });
};

// Single Dynamic Page
export const useSingleDynamicPage = (slug: any) => {
  return useApi({
    method: "get",
    enabled: !!slug,
    key: `single-dynamic-page-${slug}`,
    endpoint: `/api/dynamic-pages/single/${slug}`,
  });
};
