"use client";

import { XCircleIcon } from "@node_modules/@heroicons/react/24/solid";
import { ReactNode, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
}

export default function Modal({
  isOpen,
  onClose,
  children,
  size = "md",
}: ModalProps) {
  const sizeClass = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
  }[size];

  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => setHide(true), 300);
    } else {
      setHide(false);
    }
  }, [isOpen]);

  return (
    <div
      onClick={(e) => {
        if (e.currentTarget == e.target) {
          onClose();
        }
      }}
      className={twMerge(
        "fixed inset-0 bg-gray-950/70 backdrop-blur-sm flex items-center justify-center z-50 px-4 transition-all duration-500 -translate-y-0",
        isOpen ? "h-dvh" : "h-0"
      )}
    >
      {!hide && (
        <div
          className={twMerge(
            "bg-white rounded-xl p-6 w-full inset-0 transition-all duration-500 relative",
            isOpen ? "opacity-100" : "opacity-0",
            sizeClass
          )}
        >
          <button
            className="absolute top-4 right-4 text-gray-400 cursor-pointer p-2"
            onClick={onClose}
          >
            <XCircleIcon className="size-6 text-red-500" />
          </button>
          {children}
        </div>
      )}
    </div>
  );
}
