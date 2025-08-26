import useApi from "@/Hooks/api/useApi";
import toast from "react-hot-toast";

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

// Create Resume Template
export const useCreateResume = (id: any) => {
  return useApi({
    method: "post",
    isPrivate: true,
    key: "create-resume-template",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    endpoint: `/api/generate/${id}/pdf`,
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Generate Cover Letter
export const useGenerateCoverLetter = () => {
  return useApi({
    method: "post",
    key: "generate-cover-letter",
    isPrivate: true,
    endpoint: "/api/generate-cover-letter",
    onSuccess: (data: any) => {
      if (data?.status) {
        toast.success(data?.message);
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Save Cover Letter
export const useSaveCoverLetter = () => {
  return useApi({
    method: "post",
    key: "save-cover-letter",
    isPrivate: true,
    endpoint: "/api/saved-cover-letters",
    onSuccess: (data: any) => {
      if (data?.status) {
        toast.success(data?.message);
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Download Cover Letter
export const useDownloadCoverLetter = () => {
  return useApi({
    method: "post",
    key: "download-cover-letter",
    isPrivate: true,
    endpoint: "/api/download-cover-letter",
    onSuccess: (data: any) => {
      if (data?.status) {
        toast.success(data?.message);
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// AI Interviewer
export const useAiInterviewer = () => {
  return useApi({
    method: "post",
    key: "ai-interviewer",
    isPrivate: true,
    endpoint: "/api/ai-interviewer",
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};
