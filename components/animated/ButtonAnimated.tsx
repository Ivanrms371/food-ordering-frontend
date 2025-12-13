"use client";
import { motion, HTMLMotionProps } from "framer-motion";
import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  HTMLMotionProps<"button">;

export const ButtonAnimated = ({ children, ...props }: Props) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="button-primary"
      {...props}
    >
      {children}
    </motion.button>
  );
};
