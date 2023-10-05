import Link from "next/link";
import { ReactNode } from "react";

interface NavItemProps {
  item: string;
  children: ReactNode;
}

const NavItem = ({ item, children }: NavItemProps) => {
  return (
    <li className="p-2.5 hover:bg-gray-400">
      <Link href={`/#${item}`}>{children}</Link>
    </li>
  );
};

export default NavItem;
