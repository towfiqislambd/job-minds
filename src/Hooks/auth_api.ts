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
  return useApi({
    method: "post",
    key: "google-login",
    endpoint: "/api/social-login",
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
