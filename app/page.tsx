import { About, Contact, Experience, Projects } from "@/components";

export default function Home() {
  return (
    <main className="w-full font-bodyFont bg-sectionColor text-dark overflow-x-hidden flex flex-col items-center px-[100px] lgl:px-[150px]">
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
