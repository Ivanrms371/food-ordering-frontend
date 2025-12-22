import { motion } from "framer-motion";

export const SuccessIcon = () => {
  return (
    <motion.div
      initial={{ backgroundColor: "#fff", scale: 0.5 }}
      animate={{ backgroundColor: "#dcfce7", scale: 1 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      className="p-5 w-fit rounded-full"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-8 text-green-700"
      >
        <motion.path
          d="M4.5 12.75 L10.5 18.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />

        <motion.path
          d="M10.5 18.75 L19.5 5.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
        />
      </svg>
    </motion.div>
  );
};
