import {
  About,
  Contact,
  Email,
  Experience,
  Projects,
  Social,
} from "@/components";

export default function Home() {
  return (
    <main className="w-full font-bodyFont bg-sectionColor text-dark overflow-x-hidden flex flex-col items-center">
      <Social />
      <Email />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
