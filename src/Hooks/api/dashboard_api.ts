import useApi from "@/Hooks/api/useApi";

// All Resume Template
export const useAllResumeTemplate = () => {
  return useApi({
    method: "get",
    key: "all-resume-template",
    endpoint: "/api/resume-templates",
  });
};

// Single Resume Template
export const useSingleResumeTemplate = (id: any) => {
  return useApi({
    method: "get",
    enabled: !!id,
    key: `single-resume-template-${id}`,
    endpoint: `/api/resume-template/${id}`,
  });
};
