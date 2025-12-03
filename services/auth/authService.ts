import { api, ErrorHandler } from "@lib/axios";
import { SignInData, SignUpData } from "@interfaces/auth.interface";
import { useAuthStore } from "@store/auth.store";
import CredentialsStrategy from "./credentialsStrategy";

class AuthService {
  private readonly credentialsStrategy = new CredentialsStrategy();

  signInCredentials(data: SignInData) {
    return this.credentialsStrategy.signIn(data);
  }

  signUpCredentials(data: SignUpData) {
    return this.credentialsStrategy.signUp(data);
  }

  signInWithGoogle() {
    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google`;
  }

  signInWithFacebook() {
    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/facebook`;
  }

  async refreshSession() {
    try {
      const { data } = await api.post(
        "/auth/refresh",
        {},
        { withCredentials: true }
      );
      console.log("refreshed session", data.accessToken);
      const newAccessToken = data.accessToken;

      const { setAccessToken, setIsAuthenticated } = useAuthStore.getState();
      setAccessToken(newAccessToken);
      setIsAuthenticated(true);

      return { error: null };
    } catch (error) {
      return ErrorHandler(error);
    }
  }

  async logout() {
    try {
      console.log("before post");
      const { data } = await api.post(
        "/auth/logout",
        {},
        { withCredentials: true }
      );
      console.log("after post");
      const { clearAuth } = useAuthStore.getState();
      clearAuth();
      return { error: null, data };
    } catch (error) {
      console.log("try catch", error);
      const { clearAuth } = useAuthStore.getState();
      console.log("clearing auth from try catch");
      clearAuth();
      return { error: null };
    }
  }
}

const authService = new AuthService();

export default authService;
