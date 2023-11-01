"use server";

import { Resend } from "resend";

import { validateString } from "@/libs/utils";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
const myMail = "minjee4281@gmail.com";

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Portfolio Contact From <onboarding@resend.dev>",
      to: myMail,
      reply_to: senderEmail as string,
      subject: "Mail from contact form",
      text: message as string,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    }
  }
  return { data };
};
