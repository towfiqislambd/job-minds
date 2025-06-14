import { QueryClient } from "@tanstack/react-query";
import { ApiError } from "./api/axiosClient";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount: number, error: unknown) => {
        const apiError = error as ApiError;
        if (apiError.status === 401) return false;
        return failureCount < 1;
      },
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
    },
    mutations: {
      onError: (error: unknown, _variables: unknown, _context: unknown) => {
        const apiError = error as ApiError;
        if (apiError.status === 401) {
          console.error("Unauthorized: Please log in");
        }
      },
    },
  },
});

export default queryClient;
