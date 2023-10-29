"use client";

import { SectionTitle } from "@/components/common";

import { SendBtn } from "./components";
import { sendEmail } from "./components/SendEmail";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-start mx-auto w-full mdl:min-h-screen py-20 md:py-28"
    >
      <SectionTitle title="Contact" />
      <div className="flex flex-col items-center pt-20">
        <p className="font-medium">Looking to team up on a project?</p>
        <h3 className="mt-1 font-titleFont font-medium text-3xl">
          Drop me a line !
        </h3>
        <form
          className="w-full max-w-xl mt-10 mx-3 flex flex-col items-center"
          action={sendEmail}
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
