import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosSecure } from "./useAxiosSecure";
import { axiosPublic } from "./useAxiosPublic";

type apiProps = {
  key?: string;
  endpoint?: string;
  method?: string;
  isPrivate?: boolean;
  onSuccess?: any;
  onError?: any;
  options?: any;
  params?: any;
  headers?: any;
  enabled?: boolean;
};

export default function useApi({
  endpoint,
  method = "get",
  isPrivate = false,
  key,
  onSuccess,
  onError,
  params,
  headers,
  options,
  enabled = true,
}: apiProps): any {
  const axiosInstance = (isPrivate ? axiosSecure : axiosPublic) as any;

  const mutation = useMutation({
    mutationKey: [key],
    mutationFn: async data => {
      const res = await axiosInstance[method](endpoint, data, {
        headers: headers,
      });
      return res?.data;
    },
    onSuccess,
    onError,
  });

  const query = useQuery({
    queryKey: [key, params],
    queryFn: async () => {
      const res = await axiosInstance.get(endpoint, { params });
      return res.data;
    },
    enabled: method === "get" ? Boolean(enabled) : false,
    // staleTime: 10 * 1000,
    ...options,
  });

  return method === "get" ? query : mutation;
}
