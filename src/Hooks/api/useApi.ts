import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosSecure } from "@/Hooks/useAxiosSecure";
import { axiosPublic } from "@/Hooks/useAxiosPublic";

type apiProps = {
  key?: any[];
  endpoint?: string;
  method?: "get" | "post" | "put" | "delete";
  isPrivate?: boolean;
  onSuccess?: any;
  onError?: any;
  queryOptions?: any;
  mutationOptions?: any;
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
  queryOptions,
  mutationOptions,
  enabled = true,
}: apiProps): any {
  const axiosInstance = (isPrivate ? axiosSecure : axiosPublic) as any;

  const mutation = useMutation({
    mutationKey: key,
    mutationFn: async data => {
      const res = await axiosInstance[method](endpoint, data, {
        headers: headers,
        ...mutationOptions,
      });
      return res?.data;
    },
    onSuccess,
    onError,
  });

  const query = useQuery({
    queryKey: key,
    queryFn: async () => {
      const res = await axiosInstance.get(endpoint, { params });
      return res.data;
    },
    enabled: method === "get" ? Boolean(enabled) : false,
    // staleTime: 10 * 1000,
    ...queryOptions,
  });

  return method === "get" ? query : mutation;
}
