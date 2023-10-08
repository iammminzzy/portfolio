import { About, Contact, Experience, Projects } from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
