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
        className="text-dark hover:font-semibold"
        href={`/${hash}`}
      >
        {children}
      </Link>
      <div
        className={`${
          isHovered
            ? "opacity-100 translate-x-0 w-full"
            : "opacity-0 translate-x-full w-0"
        } absolute mt-[2px] h-[2px] bg-datext-dark transform ease-in-out duration-300`}
      ></div>
    </li>
  );
};

export default NavItem;
