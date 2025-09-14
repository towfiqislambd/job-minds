import toast from "react-hot-toast";
import useApi from "@/Hooks/api/useApi";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

// All Resume Template
export const useAllResumeTemplate = () => {
  return useApi({
    method: "get",
    key: ["all-resume-template"],
    endpoint: "/api/resume-templates",
    queryOptions: {
      staleTime: 5 * 60 * 1000,
    },
  });
};

// Single Resume Template
export const useSingleResumeTemplate = (id: any) => {
  return useApi({
    method: "get",
    enabled: !!id,
    key: ["single-resume-template", id],
    endpoint: `/api/resume-template/${id}`,
    queryOptions: {
      staleTime: 5 * 60 * 1000,
    },
  });
};

// Create Resume Template
export const useCreateResume = (id: any) => {
  const queryClient = useQueryClient();
  return useApi({
    method: "post",
    isPrivate: true,
    key: ["create-resume-template"],
    headers: {
      "Content-Type": "multipart/form-data",
    },
    endpoint: `/api/generate/${id}/pdf`,
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("all-recent-activity" as any);
    },
  });
};

// Generate Cover Letter
export const useGenerateCoverLetter = () => {
  const queryClient = useQueryClient();
  return useApi({
    method: "post",
    key: ["generate-cover-letter"],
    isPrivate: true,
    endpoint: "/api/generate-cover-letter",
    onSuccess: (data: any) => {
      if (data?.status) {
        toast.success(data?.message);
        queryClient.invalidateQueries("all-recent-activity" as any);
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Save Cover Letter
export const useSaveCoverLetter = () => {
  const queryClient = useQueryClient();
  return useApi({
    method: "post",
    key: ["save-cover-letter"],
    isPrivate: true,
    endpoint: "/api/saved-cover-letters",
    onSuccess: (data: any) => {
      if (data?.status) {
        toast.success(data?.message);
        queryClient.invalidateQueries("all-documents" as any);
        queryClient.invalidateQueries("all-recent-activity" as any);
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
    key: ["save-resume-template"],
    isPrivate: true,
    endpoint: "/api/save-resume",
    onSuccess: (data: any) => {
      if (data?.status) {
        toast.success(data?.message);
        queryClient.invalidateQueries("all-documents" as any);
        queryClient.invalidateQueries("all-recent-activity" as any);
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
    key: ["ai-interviewer"],
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
    key: ["ai-chat-history"],
    isPrivate: true,
    endpoint: "/api/chat-history",
  });
};

// Interview Assistant
export const useInterviewAssistant = () => {
  return useApi({
    method: "post",
    key: ["interview-assistant"],
    isPrivate: true,
    endpoint: "/api/interview-preparation-assistant",
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Draft Interview Question
export const useDraftInterviewQuestions = () => {
  const queryClient = useQueryClient();
  return useApi({
    method: "post",
    key: ["draft-interview-questions"],
    isPrivate: true,
    endpoint: "/api/interview-question-draft",
    onSuccess: (data: any) => {
      if (data?.status) {
        toast.success(data?.message);
        queryClient.invalidateQueries("all-drafts" as any);
        queryClient.invalidateQueries("all-recent-activity" as any);
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Remove From Draft
export const useRemoveFromDraft = (draft_id: string | null) => {
  const queryClient = useQueryClient();
  return useApi({
    method: "post",
    key: ["remove-from-draft"],
    isPrivate: true,
    endpoint: `/api/delete-draft/${draft_id}`,
    enabled: !!draft_id,
    onSuccess: (data: any) => {
      if (data?.status) {
        toast.success(data?.message);
        queryClient.invalidateQueries("all-drafts" as any);
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
    key: ["all-recent-activity", page],
    isPrivate: true,
    endpoint: "/api/all-recent-activities",
    params: { page },
    queryOptions: {
      retry: false,
    },
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
    key: ["all-documents", search, document_type, status, page],
    isPrivate: true,
    endpoint: "/api/all-documents",
    params: {
      search,
      document_type,
      status,
      page,
    },
    queryOptions: {
      retry: false,
    },
  });
};

// All Drafts
export const useAllDrafts = (search?: string) => {
  return useApi({
    method: "get",
    key: ["all-drafts"],
    isPrivate: true,
    endpoint: "/api/all-drafts",
    params: { search },
    queryOptions: {
      retry: false,
    },
  });
};

// Delete Document
export const useDeleteDocument = (document_id: number | null) => {
  const queryClient = useQueryClient();
  return useApi({
    method: "post",
    key: ["delete-document"],
    isPrivate: true,
    endpoint: `/api/delete-document/${document_id}`,
    enabled: !!document_id,
    onSuccess: (data: any) => {
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
  const queryClient = useQueryClient();
  return useApi({
    method: "post",
    key: ["export-document"],
    isPrivate: true,
    enabled: !!document_id,
    endpoint: `/api/export-document/${document_id}`,
    axiosOptions: {
      responseType: "blob",
    },
    onSuccess: () => {
      queryClient.invalidateQueries("all-documents" as any);
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Export pdf
export const useExportPdf = () => {
  const queryClient = useQueryClient();
  return useApi({
    method: "post",
    key: ["export-pdf"],
    isPrivate: true,
    endpoint: "api/export-resume/pdf",
    axiosOptions: {
      responseType: "blob",
    },
    onSuccess: () => {
      queryClient.invalidateQueries("all-documents" as any);
      queryClient.invalidateQueries("all-recent-activity" as any);
    },
  });
};

// Download Cover Letter
export const useDownloadCoverLetter = () => {
  const queryClient = useQueryClient();
  return useApi({
    method: "post",
    key: ["download-cover-letter"],
    isPrivate: true,
    endpoint: "/api/download-cover-letter",
    axiosOptions: {
      responseType: "blob",
    },
    onSuccess: () => {
      queryClient.invalidateQueries("all-recent-activity" as any);
    },
  });
};

// All Job Roles
export const useInitialJobRoles = () => {
  return useApi({
    method: "get",
    key: ["all-job-roles"],
    isPrivate: true,
    endpoint: "/api/all-job-roles",
    queryOptions: {
      staleTime: 5 * 60 * 1000,
    },
  });
};

// Purchase Plan
export const usePurchasePlan = (plan_id: number) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useApi({
    method: "post",
    key: ["purchase-plan"],
    isPrivate: true,
    enabled: !!plan_id,
    endpoint: `/api/subscription-plan/${plan_id}/payment`,
    onSuccess: (data: any) => {
      if (data?.status) {
        toast.success(data?.message);
        window.location.href = data?.data?.url;
      } else {
        toast.success(data?.message);
        queryClient.invalidateQueries("get-pricing" as any);
        router.push("/dashboard/resume-builder");
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Normal Notification
export const useNormalNotification = () => {
  const queryClient = useQueryClient();
  return useApi({
    method: "post",
    key: ["normal-notification"],
    isPrivate: true,
    endpoint: "/api/update-notification",
    onSuccess: (data: any) => {
      if (data?.status) {
        queryClient.invalidateQueries("user" as any);
        toast.success(data?.message);
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Email Notification
export const useEmailNotification = () => {
  const queryClient = useQueryClient();
  return useApi({
    method: "post",
    key: ["email-notification"],
    isPrivate: true,
    endpoint: "/api/update-email-notification",
    onSuccess: (data: any) => {
      if (data?.status) {
        queryClient.invalidateQueries("user" as any);
        toast.success(data?.message);
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Application Deadline
export const useApplicationDeadline = () => {
  const queryClient = useQueryClient();
  return useApi({
    method: "post",
    key: ["application-deadline"],
    isPrivate: true,
    endpoint: "/api/update-application-deadline",
    onSuccess: (data: any) => {
      if (data?.status) {
        queryClient.invalidateQueries("user" as any);
        toast.success(data?.message);
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Expiring Subscription
export const useExpiringSubscription = () => {
  const queryClient = useQueryClient();
  return useApi({
    method: "post",
    key: ["expiring-subscription"],
    isPrivate: true,
    endpoint: "/api/update-expiring-subscription",
    onSuccess: (data: any) => {
      if (data?.status) {
        queryClient.invalidateQueries("user" as any);
        toast.success(data?.message);
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Linkedin Optimizer
export const useLinkedinOptimizer = () => {
  const queryClient = useQueryClient();
  return useApi({
    method: "post",
    key: ["linkedin-optimizer"],
    isPrivate: true,
    endpoint: "/api/linkedin-profile-optimizer",
    onSuccess: () => {
      queryClient.invalidateQueries("all-recent-activity" as any);
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Download Doc
export const useDownloadDoc = () => {
  const queryClient = useQueryClient();
  return useApi({
    method: "post",
    key: ["download-doc"],
    isPrivate: true,
    endpoint: "/api/download-linkedin-profile-summary",
    axiosOptions: {
      responseType: "blob",
    },
    onSuccess: () => {
      queryClient.invalidateQueries("all-recent-activity" as any);
    },
  });
};

// Job Matching
export const useJobMatching = () => {
  return useApi({
    method: "post",
    key: ["job-matching"],
    isPrivate: true,
    endpoint: "/api/job-matching",
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

// Job Matcher Apply Changes
export const useApplyChangesJobMatcher = () => {
  return useApi({
    method: "post",
    key: ["apply-changes-job-matchers"],
    isPrivate: true,
    endpoint: "/api/apply-changes",
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
export const useSaveLinkedinOptimizer = () => {
  const queryClient = useQueryClient();
  return useApi({
    method: "post",
    key: ["save-linkedin-optimizer"],
    isPrivate: true,
    endpoint: "/api/save-linkedin-profile-summary",
    onSuccess: (data: any) => {
      if (data?.status) {
        toast.success(data?.message);
        queryClient.invalidateQueries("all-documents" as any);
        queryClient.invalidateQueries("all-recent-activity" as any);
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// All Notifications
export const useAllNotifications = () => {
  return useApi({
    method: "get",
    key: ["all-notifications"],
    isPrivate: true,
    endpoint: "/api/all-notifications",
  });
};

// Save Job Matching
export const useSaveJobMatching = () => {
  const queryClient = useQueryClient();
  return useApi({
    method: "post",
    key: ["save-job-matching"],
    isPrivate: true,
    endpoint: "/api/apply-changes-save",
    onSuccess: (data: any) => {
      if (data?.status) {
        toast.success(data?.message);
        queryClient.invalidateQueries("all-documents" as any);
        queryClient.invalidateQueries("all-recent-activity" as any);
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Download Job Matching
export const useDownloadJobMatching = () => {
  const queryClient = useQueryClient();
  return useApi({
    method: "post",
    key: ["download-job-matching"],
    isPrivate: true,
    endpoint: "/api/export-apply-changes",
    axiosOptions: {
      responseType: "blob",
    },
    onSuccess: () => {
      queryClient.invalidateQueries("all-recent-activity" as any);
    },
  });
};
