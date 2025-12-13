"use client";

import { useEffect, useState } from "react";

export function useIsMobile(maxWidth: number = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= maxWidth);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= maxWidth);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [maxWidth]);
  return isMobile;
}
