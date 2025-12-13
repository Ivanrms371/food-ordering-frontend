import { SignInData } from "@interfaces/auth.interface";
import { api, ErrorHandler } from "@lib/axios";
import { useAuthStore } from "@store/auth.store";

class CredentialsStrategy {
  async signIn(data: SignInData) {
    const { setSession, clearAuth } = useAuthStore.getState();
    try {
      const res = await api.post("/auth/login", data);
      setSession(res.data.accessToken);
      return {
        error: null,
        data: res.data,
      };
    } catch (error) {
      clearAuth();
      return ErrorHandler(error);
    }
  }

  async signUp(data: SignInData) {
    const { setSession, clearAuth } = useAuthStore.getState();
    try {
      const res = await api.post("/auth/register", data);
      setSession(res.data.accessToken);
      return {
        error: null,
        data: res.data,
      };
    } catch (error) {
      clearAuth();
      return ErrorHandler(error);
    }
  }
}

export default CredentialsStrategy;
