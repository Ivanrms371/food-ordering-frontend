"use client";
import { motion, HTMLMotionProps } from "framer-motion";
import { LinkHTMLAttributes } from "react";

type Props = LinkHTMLAttributes<HTMLLinkElement> & HTMLMotionProps<"a">;

export const LinkAnimated = ({ children, ...props }: Props) => {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      {...props}
    >
      {children}
    </motion.a>
  );
};
