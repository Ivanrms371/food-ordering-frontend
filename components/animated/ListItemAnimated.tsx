"use client";
import { motion, HTMLMotionProps } from "framer-motion";

export const ListItemAnimated = ({
  children,
  ...props
}: HTMLMotionProps<"li">) => {
  return <motion.li {...props}>{children}</motion.li>;
};
