import { About, Contact, Experience, Projects } from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-[100px] mt-[60px]">
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
