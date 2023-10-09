"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import Link from "next/link";

//components
export const MotionLink = motion(Link);

export const MotionDiv = ({ children, ...props }: HTMLMotionProps<"div">) => {
  return (
    <motion.div initial="initial" animate="animate" {...props}>
      {children}
    </motion.div>
  );
};

// variants
export const slideDownVariants = {
  initial: { y: -10, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

export const slideUpVariants = {
  initial: { y: 10, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

export const fadeInVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};
