import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  publicAxiosClient,
  privateAxiosClient,
  ApiError,
} from "./../../lib/api/axiosClient";
import { Demo } from "@/types/api";



const QUERY_KEYS = {
  DEMOS: "demos" as const,
  DEMO: "demo" as const,
};

// Public GET: /demos
export const useDemosQuery = () => {
  return useQuery<Demo[], ApiError>({
    queryKey: [QUERY_KEYS.DEMOS],
    queryFn: () => publicAxiosClient({ url: "/demos", method: "GET" }),
  });
};

// Private GET: /demos/:id
export const useDemoQuery = (id?: number) => {
  return useQuery<Demo, ApiError>({
    queryKey: [QUERY_KEYS.DEMO, id],
    queryFn: () => privateAxiosClient({ url: `/demos/${id}`, method: "GET" }),
    enabled: !!id && !!localStorage.getItem("token"),
  });
};

// Private POST: /demos
export const useCreateDemoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<Demo, ApiError, Omit<Demo, "id">>({
    mutationFn: data =>
      privateAxiosClient({ url: "/demos", method: "POST", data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.DEMOS] });
    },
  });
};

// Private PUT: /demos/:id
export const useUpdateDemoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<Demo, ApiError, Demo>({
    mutationFn: ({ id, ...data }) =>
      privateAxiosClient({ url: `/demos/${id}`, method: "PUT", data }),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.DEMOS] });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.DEMO, variables.id],
      });
    },
  });
};

// Private DELETE: /demos/:id
export const useDeleteDemoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<void, ApiError, number>({
    mutationFn: id =>
      privateAxiosClient({ url: `/demos/${id}`, method: "DELETE" }),
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.DEMOS] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.DEMO, id] });
    },
  });
};
