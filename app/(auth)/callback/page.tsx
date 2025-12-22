"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuthStore } from "@/store/auth.store";
import { useEffect } from "react";

export default function CallbackPage() {
  const router = useRouter();
  const params = useSearchParams();
  const { setSession } = useAuthStore();

  const redirect = params.get("redirect") ?? "/";

  useEffect(() => {
    const handleCallback = async () => {
      const token = params.get("access_token");
      if (token) {
        setSession(token);
        router.replace(redirect);
      } else {
        setSession(null);
        router.replace("/sign-in");
      }
    };
    handleCallback();
  }, []);

  return <div>Loading...</div>;
}
