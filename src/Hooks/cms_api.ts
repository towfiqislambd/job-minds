import useApi from "./useApi";

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
