import Link from "next/link";

import {
  fadeInVariants,
  MotionDiv,
  MotionLink,
  slideDownVariants,
} from "@/components/common/Motion";
import { sections } from "@/libs/data";

import NavItem from "./NavItem";

export default function Header() {
  return (
    <header className="flex w-full h-20 lg:h-[11vh] fixed top-0 z-50 px-[40px] bg-sectionColor font-titleFont">
      <nav className="max-w-container mx-auto flex w-full h-full py-1 justify-between items-center">
        <MotionLink
          href="/"
          className="font-semibold text-pointYellow text-2xl"
          variants={fadeInVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5 }}
        >
          MINJEE
        </MotionLink>
        <div className="mdl:flex items-center gap-7 hidden">
          <ul className="flex gap-7">
            {sections.map(({ id, name, hash }) => (
              <NavItem key={id} id={id} hash={hash}>
                {name}
              </NavItem>
            ))}
          </ul>
          <MotionDiv variants={slideDownVariants} transition={{ delay: 0.5 }}>
            <Link
              href="/MinjeeSon_Resume.pdf"
              target="_blank"
              className="inline-block px-2 py-1 border rounded border-dark text-dark text-sm transition-all hover:font-semibold hover:translate-x-[-2px] hover:-translate-y-0.5 hover:shadow-[2px_2px_0_0] hover:transition-all delay-100
            "
            >
              Resume
            </Link>
          </MotionDiv>
        </div>
        {/* mobile burger menu */}
        <button className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden overflow-hidden group">
          <span className="w-full h-0.5 bg-dark transform group-hover:translate-x-3 transition-all ease-in-out duration-500"></span>
          <span className="w-full h-0.5 bg-dark transform group-hover:translate-x-1 transition-all ease-in-out duration-100"></span>
          <span className="w-full h-0.5 bg-dark transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
        </button>
      </nav>
    </header>
  );
}
