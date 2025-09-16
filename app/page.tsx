import { Contact, Experience, Main, Projects } from "@/components";

export default function Home() {
  return (
    <main className="w-full font-bodyFont overflow-x-hidden flex flex-col items-center px-[25px] sml:px-[50px] mdl:px-[100px] lgl:px-[150px]">
      <Main />
      <Experience />
      <Projects />
      <Contact />
      111
    </main>
  );
}
