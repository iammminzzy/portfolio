import Image from "next/image";
import Link from "next/link";

import { links } from "@/libs/data";

import NavItem from "./NavItem";

export default function Header() {
  return (
    <header className="flex w-full h-[60px] fixed px-[40px] bg-amber-400">
      <nav className="flex w-full justify-between items-center">
        <Link href="/" className="text-white text-2xl">
          <Image src="/profile.png" alt="profile logo" width={35} height={35} />
        </Link>
        <div className="flex items-center gap-7">
          <ul className="flex gap-5">
            {links.map(({ name, hash }) => (
              <NavItem key={name} hash={hash}>
                {name}
              </NavItem>
            ))}
          </ul>
          <Link
            href="https://docs.google.com/document/d/1zpXI_ZdCXFcY6tfKdABwmsJEuToYAy7cf42vugQF64k/edit?usp=sharing"
            target="_blank"
            className="px-2 py-1 border rounded border-stone-950 text-stone-950 text-sm hover:font-bold hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[3px_3px_0_0] hover:transition-all
            "
          >
            Resume
          </Link>
        </div>
      </nav>
    </header>
  );
}
