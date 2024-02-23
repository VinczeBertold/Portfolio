"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { toast } from "sonner";

import sendEmail from "@/lib/actions/send_email";
import SubmitButton from "./SubmitButton";

import te from "../../public/question.svg";

export default function Contact() {
  return (
    <div className="flex flex-col md:flex-row w-full gap-2">
      <div className="w-full md:w-1/2 bg-base-100">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center py-6 h-full"
        >
          <h2 className="text-5xl font-bold tracking-tighter">
            Do you have any questions?
          </h2>
          <p className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Feel free to contact me. Typcially I respond within a few days.
          </p>
          <Image src={te} alt="Question mark" width={300} height={300} />
        </motion.div>
      </div>
      <div className="w-full md:w-1/2 bg-base-100">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <form
            className="flex flex-col md:px-12 py-2"
            action={async (formData: FormData) => {
              const res = await sendEmail(formData);
              if (res.error) {
                toast.error(res.error);
              } else {
                toast.success(res.success);
              }
            }}
          >
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Full Name*</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-primary w-full !rounded-sm"
                name="name"
                required
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Your Email*</span>
              </div>
              <input
                type="email"
                placeholder="Type here"
                className="input input-bordered w-full input-primary !rounded-sm"
                name="email"
                required
              />
            </label>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Message*</span>
              </div>
              <textarea
                className="textarea textarea-bordered textarea-primary !rounded-sm h-36"
                placeholder="Message"
                name="message"
                required
              ></textarea>
            </label>
            <div className="flex justify-end w-full my-4">
              <SubmitButton />
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
