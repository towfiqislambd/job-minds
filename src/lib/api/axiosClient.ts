import axios, { AxiosError } from "axios";

export interface ApiError {
  status: number;
  data: string | Record<string, unknown>;
  message?: string; // 
}

interface AxiosRequestParams {
  url: string;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  data?: unknown;
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
}

const getAuthToken = (): string | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token") || null;
  }
  return null; // SSR: Use cookies if needed
};

export const publicAxiosClient = async <T>({
  url,
  method = "GET",
  data,
  params,
  headers = {},
}: AxiosRequestParams): Promise<T> => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SERVER_BASE_URL;
    const isFormData = data instanceof FormData;
    const finalHeaders = {
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
      ...headers,
    };

    const response = await axios({
      url: `${baseUrl}${url}`,
      method,
      headers: finalHeaders,
      data: ["POST", "PUT", "PATCH"].includes(method.toUpperCase())
        ? data
        : undefined,
      params: ["GET", "DELETE"].includes(method.toUpperCase())
        ? params
        : undefined,
    });

    return response.data as T;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw {
      status: axiosError.response?.status || 500,
      data: axiosError.response?.data || "An unknown error occurred",
      message: axiosError.message,
    } as ApiError;
  }
};

export const privateAxiosClient = async <T>({
  url,
  method = "GET",
  data,
  params,
  headers = {},
}: AxiosRequestParams): Promise<T> => {
  const token = getAuthToken();
  if (!token) {
    throw { status: 401, data: "No authentication token found" } as ApiError;
  }

  try {
    const baseUrl = process.env.NEXT_PUBLIC_SERVER_BASE_URL;
    const isFormData = data instanceof FormData;
    const finalHeaders = {
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
      Authorization: `Bearer ${token}`,
      ...headers,
    };

    const response = await axios({
      url: `${baseUrl}${url}`,
      method,
      headers: finalHeaders,
      data: ["POST", "PUT", "PATCH"].includes(method.toUpperCase())
        ? data
        : undefined,
      params: ["GET", "DELETE"].includes(method.toUpperCase())
        ? params
        : undefined,
    });

    return response.data as T;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw {
      status: axiosError.response?.status || 500,
      data: axiosError.response?.data || "An unknown error occurred",
      message: axiosError.message, 
    } as ApiError;
  }
};
