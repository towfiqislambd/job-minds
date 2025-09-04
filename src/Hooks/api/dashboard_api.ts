import useApi from "@/Hooks/api/useApi";
import { useQueryClient } from "@tanstack/react-query";
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

// Save Resume Template
export const useSaveResumeTemplate = () => {
  const queryClient = useQueryClient();
  return useApi({
    method: "post",
    key: "save-resume-template",
    isPrivate: true,
    endpoint: "/api/save-resume",
    onSuccess: (data: any) => {
      if (data?.status) {
        toast.success(data?.message);
        queryClient.invalidateQueries("all-documents" as any);
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// AI Interviewer
export const useAiInterviewer = () => {
  const queryClient = useQueryClient();
  return useApi({
    method: "post",
    key: "ai-interviewer",
    isPrivate: true,
    endpoint: "/api/ai-interviewer",
    onSuccess: () => {
      queryClient.invalidateQueries("ai-chat-history" as any);
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// AI Chat History
export const useAiChatHistory = () => {
  return useApi({
    method: "get",
    key: "ai-chat-history",
    isPrivate: true,
    endpoint: "/api/chat-history",
  });
};

// Interview Assistant
export const useInterviewAssistant = () => {
  return useApi({
    method: "post",
    key: "interview-assistant",
    isPrivate: true,
    endpoint: "/api/interview-preparation-assistant",
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Draft Interview Question
export const useDraftInterviewQuestions = () => {
  return useApi({
    method: "post",
    key: "draft-interview-questions",
    isPrivate: true,
    endpoint: "/api/interview-question-draft",
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

// Remove From Draft
export const useRemoveFromDraft = (draft_id: string | null) => {
  return useApi({
    method: "post",
    key: "remove-from-draft",
    isPrivate: true,
    endpoint: `/api/delete-draft/${draft_id}`,
    enabled: !!draft_id,
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

// All Recent Activities
export const useAllRecentActivities = (page?: number) => {
  return useApi({
    method: "get",
    key: "all-recent-activity",
    isPrivate: true,
    endpoint: "/api/all-recent-activities",
    params: { page },
  });
};

// All Documents
export const useAllDocuments = (
  search?: string,
  document_type?: string,
  status?: string,
  page?: number
) => {
  return useApi({
    method: "get",
    key: "all-documents",
    isPrivate: true,
    endpoint: "/api/all-documents",
    params: {
      search,
      document_type,
      status,
      page,
    },
    options: {
      retry: false,
    },
  });
};

// All Drafts
export const useAllDrafts = (search?: string) => {
  return useApi({
    method: "get",
    key: "all-drafts",
    isPrivate: true,
    endpoint: "/api/all-drafts",
    params: { search },
    options: {
      retry: false,
    },
  });
};

// Delete Document
export const useDeleteDocument = (document_id: number | null) => {
  return useApi({
    method: "post",
    key: "delete-document",
    isPrivate: true,
    endpoint: `/api/delete-document/${document_id}`,
    enabled: !!document_id,
    onSuccess: (data: any) => {
      const queryClient = useQueryClient();
      queryClient.invalidateQueries("all-documents" as any);
      if (data?.status) {
        toast.success(data?.message);
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Export Document
export const useExportDocument = (document_id: number | null) => {
  return useApi({
    method: "post",
    key: "export-document",
    isPrivate: true,
    endpoint: `/api/export-document/${document_id}`,
    enabled: !!document_id,
    onSuccess: (data: any) => {
      const queryClient = useQueryClient();
      queryClient.invalidateQueries("all-documents" as any);
      if (data?.status) {
        toast.success(data?.message);
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Export pdf
export const useExportPdf = () => {
  return useApi({
    method: "post",
    key: "export-pdf",
    isPrivate: true,
    endpoint: "api/export-resume/pdf",
    config: {
      responseType: "blob",
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
    config: {
      responseType: "blob",
    },
  });
};

// All Job Roles
export const useInitialJobRoles = () => {
  return useApi({
    method: "get",
    key: "all-job-roles",
    isPrivate: true,
    endpoint: "/api/all-job-roles",
  });
};
