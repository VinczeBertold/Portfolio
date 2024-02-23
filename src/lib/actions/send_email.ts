"use server";
import nodemailer from "nodemailer";

export default async function sendEmail(formData: FormData) {
  "use server";

  const transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  const name = formData.get("name") as string;

  if (!name) {
    return { error: "Name is required" };
  }

  const email = formData.get("email") as string;

  if (!email) {
    return { error: "Email is required" };
  }

  let message = formData.get("message") as string;

  if (!message) {
    return { error: "Message is required" };
  }

  message = message.replace(/<[^>]*>?/gm, "");

  const text =
    "Portfolio Contact Form Submission\nName: " +
    name +
    "\nEmail: " +
    email +
    "\nMessage: " +
    message;

  const mailData = {
    from: process.env.SMTP_USERNAME,
    to: process.env.SMTP_TO,
    subject: `<Portfolio> Contact ${email}`,
    text: text,
  };

  try {
    await transporter.sendMail(mailData);
    return { success: "Email sent successfully" };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: "Unknown error" };
  }
}
