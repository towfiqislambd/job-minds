"use client";
import useApi from "./useApi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import useAuth from "./useAuth";
import { useQueryClient } from "@tanstack/react-query";

// Get User Data
export const useGetUserData = (token: any) => {
  return useApi({
    method: "get",
    key: `user-${token}`,
    enabled: !!token,
    endpoint: "/api/users/data",
    isPrivate: true,
    options: {
      refetchInterval: 1000 * 60 * 60, // refetch every hour
    },
  });
};

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
  const { setToken } = useAuth();

  return useApi({
    method: "post",
    key: "login",
    endpoint: "/api/users/login",
    onSuccess: (data: any) => {
      if (data?.status) {
        setToken(data?.data?.token);
        toast.success(data?.message);
        router.push("/dashboard");
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Logout
export const useLogout = () => {
  const router = useRouter();
  const { clearToken } = useAuth();

  return useApi({
    method: "post",
    key: "logout",
    isPrivate: true,
    endpoint: "/api/users/logout",
    onSuccess: (data: any) => {
      if (data?.status) {
        clearToken();
        toast.success(data?.message);
        router.push("/auth/login");
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Delete Account
export const useDeleteAccount = () => {
  const router = useRouter();
  const { clearToken } = useAuth();

  return useApi({
    method: "delete",
    key: "delete-account",
    isPrivate: true,
    endpoint: "/api/users/delete",
    onSuccess: (data: any) => {
      if (data?.status) {
        clearToken();
        toast.success(data?.message);
        router.push("/auth/login");
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Verify Email
export const useVerifyEmail = () => {
  const router = useRouter();
  return useApi({
    method: "post",
    key: "verify-email",
    endpoint: "/api/users/login/email-verify",
    onSuccess: (data: any) => {
      if (data?.status) {
        toast.success(data?.message);
        router.push(`/auth/verify-otp/${data?.data?.email}`);
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Verify OTP
export const useVerifyOTP = () => {
  const router = useRouter();
  return useApi({
    method: "post",
    key: "verify-otp",
    endpoint: "/api/users/login/otp-verify",
    onSuccess: (data: any) => {
      if (data?.status) {
        toast.success(data?.message);
        router.push(`/auth/reset-password/${data?.data?.email}`);
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Resend OTP
export const useResendOTP = () => {
  return useApi({
    method: "post",
    key: "otp-resend",
    endpoint: "/api/users/login/otp-resend",
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

// Reset Password
export const useResetPassword = () => {
  const router = useRouter();
  return useApi({
    method: "post",
    key: "reset-password",
    endpoint: "/api/users/login/reset-password",
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

// Google Login:
export const useGoogleLoginFunc = () => {
  const router = useRouter();
  const { setToken } = useAuth();

  return useApi({
    method: "post",
    key: "google-login",
    endpoint: "/api/social-login",
    onSuccess: (data: any) => {
      if (data?.status) {
        setToken(data?.data?.token);
        toast.success(data?.message);
        router.push("/dashboard");
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Change Password
export const useChangePassword = () => {
  return useApi({
    method: "post",
    isPrivate: true,
    key: "change-password",
    endpoint: "/api/users/password/change",
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

// Update User Data
export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useApi({
    method: "post",
    key: "update-user",
    isPrivate: true,
    endpoint: "/api/users/data/update",
    onSuccess: (data: any) => {
      if (data?.status) {
        toast.success(data?.message);
        queryClient.invalidateQueries("user" as any);
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Site Settings
export const useSiteSettings = () => {
  return useApi({
    method: "get",
    key: "site-settings",
    endpoint: "/api/site-settings",
  });
};
