import { SectionTitle } from "@/components/common";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-start px-[10%] mx-auto w-full min-h-screen py-24"
    >
      <SectionTitle title="Contact" />
      <div className="flex flex-col items-center pt-10">
        {/* <h2 className="flex items-center gap-3 text-base mb-7">
          <span className="hidden md:inline-flex md:w-20 h-0.5 bg-pointYellow" />
          Contact
          <span className="hidden md:inline-flex md:w-20 h-0.5 bg-pointYellow" />
        </h2> */}
        <p className="font-medium">Looking to team up on a project?</p>
        <h3 className="mt-1 font-titleFont font-medium text-3xl">
          Drop me a line !
        </h3>
        <div className="py-10">~email~</div>
      </div>
    </section>
  );
};
export default Contact;
