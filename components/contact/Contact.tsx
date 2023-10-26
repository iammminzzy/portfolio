"use client";

import { SectionTitle } from "@/components/common";

import { SendBtn } from "./components";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-start px-[10%] mx-auto w-full min-h-screen py-24"
    >
      <SectionTitle title="Contact" />
      <div className="flex flex-col items-center pt-20">
        {/* <h2 className="flex items-center gap-3 text-base mb-7">
          <span className="hidden md:inline-flex md:w-20 h-0.5 bg-pointYellow" />
          Contact
          <span className="hidden md:inline-flex md:w-20 h-0.5 bg-pointYellow" />
        </h2> */}
        <p className="font-medium">Looking to team up on a project?</p>
        <h3 className="mt-1 font-titleFont font-medium text-3xl">
          Drop me a line !
        </h3>
        <form
          className="w-full max-w-xl mt-10 mx-3 flex flex-col items-center"
          action={(formData) => {
            console.log(formData.get("senderEmail"));
            console.log(formData.get("message"));
          }}
        >
          <input
            className="w-full h-14 px-4 rounded-lg bg-white border border-dark/10 transition-all "
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
          <textarea
            className="w-full h-52 my-3 rounded-lg bg-white border border-dark/10 p-4 transition-all "
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
          />
          <SendBtn />
        </form>
      </div>
    </section>
  );
};
export default Contact;
