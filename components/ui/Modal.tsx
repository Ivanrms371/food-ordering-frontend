"use client";

import { AnimatePresence, motion } from "framer-motion";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { ReactNode, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
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
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl",
    "5xl": "max-w-5xl",
  }[size];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-gray-950/70 h-full  backdrop-blur-sm flex items-center justify-center z-40 px-4 transition-all duration-500 translate-y-0"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.3, ease: "easeOut" },
              scale: { duration: 0.01, ease: "easeOut" },
            }}
            className={twMerge(
              "fixed -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 bg-white rounded-xl p-6 w-full z-50 transition-all duration-500  max-h-[calc(100vh-2rem)] overflow-y-auto",
              sizeClass
            )}
          >
            <button
              className="absolute top-4 right-4 text-gray-400 cursor-pointer p-2"
              onClick={onClose}
              type="button"
            >
              <XCircleIcon className="size-6 text-red-500" />
            </button>
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
