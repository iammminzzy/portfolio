"use client";

import Link from "next/link";
import { ReactNode, useState } from "react";

interface NavItemProps {
  hash: string;
  children: ReactNode;
}

const NavItem = ({ hash, children }: NavItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <li className="relative">
      <Link
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        className="text-white hover:text-[#ffcd00]"
        href={`/${hash}`}
      >
        {children}
      </Link>
      <div
        className={`${
          isHovered
            ? "opacity-100 translate-x-0 "
            : "opacity-0 translate-x-full"
        } absolute mt-[2px] w-full h-[1.5px] bg-[#ffcd00]  transform ease-in-out duration-300`}
      ></div>
    </li>
  );
};

export default NavItem;
