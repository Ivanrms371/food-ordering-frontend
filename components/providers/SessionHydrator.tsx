"use client";

import { useEffect } from "react";
import { refreshSession } from "@services/authService";
import { useAuthStore } from "@store/auth.store";

export const SessionHydrator = () => {
  const { accessToken } = useAuthStore();

  useEffect(() => {
    const hydrateSession = async () => {
      if (!accessToken) {
        const { error } = await refreshSession();
        if (error) {
          console.log("Session refresh error:", error);
        }
      }
    };
    hydrateSession();
  }, []);

  return null;
};
