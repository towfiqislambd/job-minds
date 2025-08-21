"use client";
import useApi from "./useApi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

// Registration
export const useRegister = () => {
  const router = useRouter();
  return useApi({
    method: "post",
    key: "register",
    endpoint: "/api/users/register",
    onSuccess: (data: any) => {
      if (data?.status) {
        toast.success(data?.message);
        router.push("/auth/login");
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Login
export const useLogin = () => {
  const router = useRouter();
  return useApi({
    method: "post",
    key: "login",
    endpoint: "/api/users/login",
    onSuccess: (data: any) => {
      if (data?.status) {
        toast.success(data?.message);
        router.push("/dashboard");
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};
