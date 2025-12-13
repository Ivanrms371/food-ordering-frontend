"use client";
import { motion, Variants } from "framer-motion";

interface Props {
  text: string;
  letterClassName?: string;
  letterVariants?: Variants;
}

const defaultContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const defaultLetter = {
  hidden: { opacity: 0, y: 5 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export const LyricsAnimated = ({
  text,
  letterClassName = "",
  letterVariants = defaultLetter,
}: Props) => {
  return (
    <motion.div
      variants={defaultContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
    >
      {Array.from(text).map((char, index) => (
        <motion.span
          key={index}
          className={`inline-block ${letterClassName}`}
          variants={letterVariants}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};
