"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode, useState } from "react";

interface NavItemProps {
  id: number;
  hash: string;
  children: ReactNode;
}

const NavItem = ({ id, hash, children }: NavItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.li
      className="relative"
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.1, delay: id * 0.1 }}
    >
      <Link
        href={hash}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        className="text-dark font-normal hover:font-semibold transform transition-all"
      >
        {children}
      </Link>
      <div
        className={`${
          isHovered ? "w-full" : "w-0"
        } absolute mt-0.5 h-0.5 bg-dark transform ease-in-out duration-300  delay-100`}
      ></div>
    </motion.li>
  );
};

export default NavItem;
