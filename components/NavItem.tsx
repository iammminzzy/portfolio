"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AnchorHTMLAttributes, useState } from "react";

import { slideDownVariants } from "@/components";

interface NavItemProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "id"> {
  id: number;
  hash: string;
}

const NavItem = ({ id, hash, children, ...props }: NavItemProps) => {
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
      variants={slideDownVariants}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.1, delay: id * 0.1 }}
    >
      <Link
        href={hash}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        className="text-dark font-medium"
        {...props}
      >
        {children}
      </Link>
      <div
        className={`${
          isHovered ? "w-full" : "w-0"
        } absolute mt-0.5 h-0.5 bg-dark transform ease-in-out duration-300 delay-100`}
      ></div>
    </motion.li>
  );
};

export default NavItem;
