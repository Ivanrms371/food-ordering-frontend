"use client";

import { useEffect } from "react";
import { useAuthStore } from "@store/auth.store";
import authService from "@services/auth/authService";

export const SessionHydrator = () => {
  const { accessToken, isAuthenticated, setIsLoading } = useAuthStore();

  useEffect(() => {
    const hydrateSession = async () => {
      setIsLoading(true);
      if (!accessToken || !isAuthenticated) {
        const { error } = await authService.refreshSession();
        if (error) {
          console.log("Session refresh error:", error);
        }
      }
      setIsLoading(false);
    };
    hydrateSession();
  }, []);

  return null;
};
