import { api, ErrorHandler } from "@lib/axios";
import { LoginCredentials } from "@interfaces/auth.interface";
import { getDeviceId } from "@utils/device";
import { useAuthStore } from "@store/auth.store";
import error from "@node_modules/next/error";

export const loginCredentials = async (data: LoginCredentials) => {
  const { setAccessToken, setIsAuthenticated, clearAuth } =
    useAuthStore.getState();
  try {
    const deviceId = getDeviceId();
    const res = await api.post("/auth/login", {
      ...data,
      deviceId,
    });
    setAccessToken(res.data.accessToken);
    setIsAuthenticated(true);
    return {
      error: null,
    };
  } catch (error) {
    clearAuth();
    return ErrorHandler(error);
  }
};

export const refreshSession = async () => {
  try {
    const { data } = await api.post(
      "/auth/refresh",
      {},
      { withCredentials: true }
    );
    const newAccessToken = data.accessToken;
    const { setAccessToken, setIsAuthenticated } = useAuthStore.getState();
    setAccessToken(newAccessToken);
    setIsAuthenticated(true);
    return { error: null };
  } catch (error) {
    return ErrorHandler(error);
  }
};

export const logout = async () => {
  try {
    const { data } = await api.post(
      "/auth/logout",
      {},
      { withCredentials: true }
    );
    const { clearAuth } = useAuthStore.getState();
    clearAuth();
    console.log("logout finished", data);
    return { error: null, data };
  } catch (error) {
    console.log("Logout failed, ignoring", error);
    const { clearAuth } = useAuthStore.getState();
    clearAuth();
    return { error: null };
  }
};
