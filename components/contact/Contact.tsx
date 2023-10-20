import { SectionTitle } from "@/components/common";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-start px-[10%] mx-auto w-full max-w-contentContainer min-h-screen py-24"
    >
      <SectionTitle title="Contact" />
      <div className="flex flex-col w-full items-center  font-medium">
        <p className="text-lg text-center">
          Looking to team up on a project? Let&#39;s talk!
          <br /> Drop me a line:)
        </p>
      </div>
    </section>
  );
};
export default Contact;
