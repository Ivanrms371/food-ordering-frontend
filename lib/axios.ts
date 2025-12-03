import error from "@node_modules/next/error";
import { useAuthStore } from "@store/auth.store";
import axios, { isAxiosError, AxiosError } from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:4000/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const { accessToken } = useAuthStore.getState();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (err: AxiosError) => {
    const originalRequest = err.config as any;
    const { setAccessToken, setIsAuthenticated, clearAuth } =
      useAuthStore.getState();

    if (
      err.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url?.includes("/auth/refresh")
    ) {
      originalRequest._retry = true;

      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/refresh`,
          {},
          { withCredentials: true }
        );

        const { accessToken } = res.data;
        setAccessToken(accessToken);
        setIsAuthenticated(true);
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return api(originalRequest);
      } catch (err) {
        clearAuth();
        return Promise.reject(err);
      }
    }
    return Promise.reject(err);
  }
);

export const ErrorHandler = (error: unknown) => {
  if (isAxiosError(error)) {
    console.log(error.response?.data);
    return {
      error:
        (error.response?.data as any)?.message ||
        (error.response?.data as any)?.error ||
        "Unexpected error has occurred",
    };
  }
  console.log("not axios");
  return {
    error: "Unexpected error has occurred",
  };
};
