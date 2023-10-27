import { NextResponse } from "next/server";
import { Resend } from "resend";

import { validateString } from "@/libs/utils";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
const myMail = "minjee4281@gmail.com";

export async function sendEmail(formData: FormData) {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  console.log(senderEmail, message);
  if (!validateString(senderEmail)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: myMail,
      reply_to: senderEmail as string,
      subject: "Mail from contact form",
      text: message as string,
    });

    console.log({ data });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
