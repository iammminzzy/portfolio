"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  fadeInVariants,
  MotionDiv,
  MotionLink,
  slideDownVariants,
} from "@/components";
import { sections } from "@/libs/data";

import NavItem from "./NavItem";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="fixed top-0 w-full font-titleFont border-b-0 z-50">
      <div
        className={`${
          isMenuOpen ? "bg-pointYellow" : "bg-sectionColor"
        } w-full h-20 px-6 md:px-10 transition-colors duration-500`}
      >
        <nav className="max-w-container mx-auto flex w-full h-full py-1 justify-between items-center">
          <MotionLink
            href="/"
            className={`${
              isMenuOpen ? "text-dark" : "text-pointYellow"
            } font-semibold text-2xl`}
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
          <button
            onClick={handleToggle}
            className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden overflow-hidden group"
          >
            <span className="w-full h-0.5 bg-dark transform group-hover:translate-x-3 transition-all ease-in-out duration-500"></span>
            <span className="w-full h-0.5 bg-dark transform group-hover:translate-x-1 transition-all ease-in-out duration-100"></span>
            <span className="w-full h-0.5 bg-dark transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          </button>
        </nav>
      </div>
      <div
        className={`${
          isMenuOpen ? "translate-y-0" : "-translate-y-full opacity-0"
        } mdl:hidden absolute w-full p-6 md:p-10 pt-2 md:pt-2 bg-pointYellow transition-all duration-300 -z-10`}
      >
        <ul className="flex flex-col gap-7 items-end text-lg">
          {sections.map(({ id, name, hash }) => (
            <NavItem key={id} id={id} hash={hash} onClick={handleToggle}>
              {name}
            </NavItem>
          ))}
        </ul>
      </div>
    </header>
  );
}
