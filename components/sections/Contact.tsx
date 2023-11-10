"use client";

import { redirect } from "next/navigation";

import { sendEmail } from "@/actions/SendEmail";
import {
  MotionDiv,
  SectionTitle,
  SendBtn,
  slideUpVariants,
} from "@/components";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-start mx-auto w-full mdl:min-h-screen py-[90px] md:py-28"
    >
      <SectionTitle title="Contact" />
      <MotionDiv
        variants={slideUpVariants}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center pt-20"
      >
        <p className="font-medium">Looking to team up on a project?</p>
        <h3 className="mt-1 font-titleFont font-medium text-3xl">
          Drop me a line !
        </h3>
        <form
          className="w-full max-w-xl mt-10 mx-3 flex flex-col items-center"
          action={async (formData: FormData) => {
            const { error } = await sendEmail(formData);

            if (error) {
              alert(`Something's wrong with ${error}. Try again!`);
            }

            alert("Your email has been sent!");
            redirect("/");
          }}
        >
          <input
            className="w-full h-14 px-4 rounded-lg bg-white border border-dark/10 transition-all focus:outline focus:outline-1 focus:outline-dark"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
          <textarea
            className="w-full h-52 my-3 rounded-lg bg-white border border-dark/10 p-4 transition-all focus:outline focus:outline-1 focus:outline-dark"
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
          />
          <SendBtn />
        </form>
      </MotionDiv>
    </section>
  );
};
export default Contact;
