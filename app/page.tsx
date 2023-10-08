import { About, Contact, Experience, Projects } from "@/components";

export default function Home() {
  return (
    <main className="w-full font-bodyFont bg-sectionColor text-dark overflow-x-hidden overflow-y-scroll flex flex-col items-center">
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
