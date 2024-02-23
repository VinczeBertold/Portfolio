"use client";
import { motion } from "framer-motion";

export default function HeroText() {
  return (
    <div className="text-left">
      {/* Text animation */}
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl tracking-tight leading-10 font-extrabold text-base-content sm:text-5xl sm:leading-none md:text-6xl"
      >
        Hello, I am
        <br />
        <motion.span
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-primary"
        >
          Bertold Vincze
        </motion.span>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-2xl text-base-content"
        >
          Backend Developer & Bio Informatician
        </motion.p>
      </motion.h2>
      <motion.p
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-3 text-base text-base-content sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
      >
        Have a look at my work, education, projects and if you have any
        questions, feel free to contact me.
      </motion.p>
      {/* Buttons with animation */}
      <div className="mt-5 sm:mt-8 sm:flex justify-start gap-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="rounded-md shadow my-4 md:my-0"
        >
          <a
            href="#"
            className="btn btn-lg btn-primary !rounded-sm w-full flex items-center justify-center px-10"
          >
            Get in touch
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="rounded-md shadow"
        >
          <a
            href={"/cv.pdf"}
            className="btn btn-lg btn-outline !rounded-sm w-full flex items-center justify-center px-10"
            download="CV"
          >
            Download CV
          </a>
        </motion.div>
      </div>
    </div>
  );
}
