"use client";
import { motion, HTMLMotionProps } from "framer-motion";

export const ElementAnimated = ({
  children,
  ...props
}: HTMLMotionProps<"div">) => {
  return <motion.div {...props}>{children}</motion.div>;
};
