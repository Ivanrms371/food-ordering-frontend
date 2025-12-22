import { motion } from "framer-motion";

export const PendingIcon = () => {
  return (
    <motion.div
      initial={{ backgroundColor: "#fff", scale: 0.5 }}
      animate={{ backgroundColor: "#fff3cd", scale: 1 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      className="p-5 w-fit rounded-full"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-8 text-yellow-700"
      >
        {/* Círculo del reloj */}
        <motion.circle
          cx="12"
          cy="12"
          r="9"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        {/* Manecilla larga (minutos) */}
        <motion.line
          x1="12"
          y1="12"
          x2="12"
          y2="7"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.3, delay: 0.5, ease: "easeOut" }}
        />
        {/* Manecilla corta (horas) */}
        <motion.line
          x1="12"
          y1="12"
          x2="16"
          y2="12"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.3, delay: 0.8, ease: "easeOut" }}
        />
      </svg>
    </motion.div>
  );
};
