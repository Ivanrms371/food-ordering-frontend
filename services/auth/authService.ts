import { api, ErrorHandler } from "@/lib/axios";
import { SignInData, SignUpData } from "@/interfaces/auth.interface";
import { useAuthStore } from "@/store/auth.store";
import CredentialsStrategy from "./credentialsStrategy";

class AuthService {
  private readonly credentialsStrategy = new CredentialsStrategy();

  signInCredentials(data: SignInData) {
    return this.credentialsStrategy.signIn(data);
  }

  signUpCredentials(data: SignUpData) {
    return this.credentialsStrategy.signUp(data);
  }

  signInWithGoogle(redirect: string = "/") {
    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google?redirect=${redirect}`;
  }

  signInWithFacebook(redirect: string = "/") {
    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/facebook?redirect=${redirect}`;
  }

  async refreshSession() {
    const { setSession } = useAuthStore.getState();
    try {
      const { data } = await api.post(
        "/auth/refresh",
        {},
        { withCredentials: true }
      );
      const newAccessToken = data.accessToken;

      setSession(newAccessToken);
      return { error: null };
    } catch (error) {
      setSession(null);
      return ErrorHandler(error);
    }
  }

  async logout() {
    try {
      const { data } = await api.post(
        "/auth/logout",
        {},
        { withCredentials: true }
      );
      const { clearAuth } = useAuthStore.getState();
      clearAuth();
      return { error: null, data };
    } catch (error) {
      const { clearAuth } = useAuthStore.getState();
      clearAuth();
      return { error: null };
    }
  }
}

const authService = new AuthService();

export default authService;
