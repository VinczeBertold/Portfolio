"use client";

import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import welleEmail1 from "../../public/welleEmail1.png";
import welleEmail2 from "../../public/welleEmail2.png";

import eMobility1 from "../../public/eMobility1.png";
import eMobility2 from "../../public/eMobility2.png";

import game1 from "../../public/game1.png";
import game2 from "../../public/game2.png";
import game3 from "../../public/game3.png";

import chatery1 from "../../public/chatery1.png";
import chatery2 from "../../public/chatery2.png";
import chateryStandalone from "../../public/chateryStandalone1.jpeg";

import welle1 from "../../public/welle1.png";
import welle2 from "../../public/welle2.png";

import portfolio1 from "../../public/portfolio1.png";

export default function Projects() {
  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="space-y-3">
          <h2 className="text-2xl font-bold tracking-tighter">
            My Projects
          </h2>
          <p className="max-w-[800px]">
            A collection of projects I've been working on. I'm always looking
            learning new things and working on new projects. Have a look at
            some. Some of these are not public yet, but I'm happy to share more
            about them.
          </p>
          <p className="max-w-[800px]">
            If you want to see more of my work, you can check out my{" "}
            <a
              href="https://github.com/VinczeBertold"
              className="link link-secondary"
            >
              Github
            </a>
          </p>
        </div>
      </motion.div>
      <div className="grid gap-6 sm:grid-cols-2 lg:gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col min-w-0 rounded-sm overflow-hidden border max-h-[500px] min-h-[500px]">
            <div className="carousel w-full">
              <div id="slide1-1" className="carousel-item relative w-full">
                <img src={welleEmail1.src} className="w-full h-[250px]" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1-2" className="btn btn-circle">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </div>
              </div>
              <div id="slide1-2" className="carousel-item relative w-full">
                <img src={welleEmail2.src} className="w-full h-[250px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1-1" className="btn btn-circle">
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 flex-1">
              <h3 className="text-xl font-bold leading-none">
                WIP - EmailCampaigner
              </h3>
              <p className="text-sm text-gray-500 my-2">
                A tool to create and send and manage ongoing email campaigns. I
                offer website design and development services to small
                businesses and nonprofits. I needed an easy way to create and
                send email campaigns to my clients. I built this tool to help me
                do that. You can connect multiple email accounts, create
                campaigns, schedule emails, and there is an integrated HTML
                email editor with AI powered suggestions.
              </p>
              <div className="flex gap-2 mt-4">
                <a
                  href="#"
                  className="btn btn-disabled md:md:px-12 !rounded-sm"
                >
                  Github
                </a>
                <a href="#" className="btn btn-disabled md:px-12 !rounded-sm">
                  Website
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col justify-between min-w-0 rounded-sm overflow-hidden border max-h-[500px] min-h-[500px]">
            <div className="carousel w-full">
              <div id="slide2-1" className="carousel-item relative w-full">
                <img src={eMobility1.src} className="w-full h-[250px]" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2-2" className="btn btn-circle">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </div>
              </div>
              <div id="slide2-2" className="carousel-item relative w-full">
                <img src={eMobility2.src} className="w-full h-[250px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2-1" className="btn btn-circle">
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 flex-1">
              <h3 className="text-xl font-bold leading-none">E-Mobility</h3>
              <p className="text-sm text-gray-500 my-2">
                Our main goals were to identify charging events, group them to
                make them easier to comprehend, and look for any relationships
                between charging patterns and the days of the week. We wanted to
                learn important things about how EV charging works so we could
                tailor the charging infrastructure. To do this, we mostly looked
                at wallbox data.
              </p>
              <div className="flex gap-2 mt-4">
                <a
                  href="https://github.com/BertoldVinczeIMC/ML-Capstone-E-Mobility"
                  className="btn btn-primary md:px-12 !rounded-sm"
                >
                  Github
                </a>
                <a
                  href="https://github.com/BertoldVinczeIMC/ML-Capstone-E-Mobility/blob/main/report/E-mobility_report.pdf"
                  className="btn btn-outline md:px-12 !rounded-sm"
                >
                  Read Report
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col min-w-0 rounded-sm overflow-hidden border max-h-[500px] min-h-[500px]">
            <div className="carousel w-full">
              <div id="slide3-1" className="carousel-item relative w-full">
                <img src={game1.src} className="w-full h-[250px]" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3-2" className="btn btn-circle">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </div>
              </div>
              <div id="slide3-2" className="carousel-item relative w-full">
                <img src={game2.src} className="w-full h-[250px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3-1" className="btn btn-circle">
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </a>
                  <a href="#slide3-3" className="btn btn-circle">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </div>
              </div>
              <div id="slide3-3" className="carousel-item relative w-full">
                <img src={game3.src} className="w-full h-[250px]" />
                <div className="absolute flex justify-start transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3-2" className="btn btn-circle">
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 flex-1">
              <h3 className="text-xl font-bold leading-none">Pixel Academy</h3>
              <p className="text-sm text-gray-500 my-2">
                This project is a part of the{" "}
                <a
                  className="link link-secondary"
                  href="https://www.heilbronn.de/bip2023"
                >
                  Heilbronn 2023 BIP event{" "}
                </a>
                and is a collaboration between{" "}
                <a
                  className="link link-secondary"
                  href="https://www.hs-heilbronn.de/de"
                >
                  Hochschule Heilbronn
                </a>
                ,{" "}
                <a
                  className="link link-secondary"
                  href="https://www.fh-krems.ac.at"
                >
                  Fachhochschule Krems
                </a>{" "}
                and{" "}
                <a
                  className="link link-secondary"
                  href="https://www.thomasmore.be/en/welcome"
                >
                  Thomas More University
                </a>
                The game is hosted on{" "}
                <a
                  className="link link-secondary"
                  href="https://p422l.itch.io/pixel-academy"
                >
                  itch.io
                </a>{" "}
                and is a 2D platformer game that teaches about the basics of
                programming. This was built in a week by a team of 5 people in a
                game jam. The coding was done by me and an other team member
                while the rest of the team worked on the art, project management
                and level design.
              </p>
              <div className="flex gap-2 mt-4">
                <a
                  href="https://github.com/BertoldVinczeIMC/bip-pixel-academy-2023"
                  className="btn btn-primary md:px-12 !rounded-sm"
                >
                  Github
                </a>
                <a
                  href="https://p422l.itch.io/pixel-academy"
                  className="btn btn-outline md:px-12 !rounded-sm"
                  target="_blank"
                >
                  Play on itch.io
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 3 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col min-w-0 rounded-sm overflow-hidden border max-h-[500px] min-h-[500px]">
            <div className="carousel w-full">
              <div id="slide4-1" className="carousel-item relative w-full">
                <img src={chateryStandalone.src} className="w-full h-[250px]" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4-2" className="btn btn-circle">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </div>
              </div>
              <div id="slide4-2" className="carousel-item relative w-full">
                <img src={chatery1.src} className="w-full h-[250px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4-1" className="btn btn-circle">
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </a>
                  <a href="#slide4-3" className="btn btn-circle">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </div>
              </div>
              <div id="slide4-3" className="carousel-item relative w-full">
                <img
                  src={chatery2.src}
                  className="w-full h-[250px] object-scale-down"
                />
                <div className="absolute flex justify-start transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4-2" className="btn btn-circle bg-base-300">
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 flex-1">
              <h3 className="text-xl font-bold leading-none">WIP - Chatery</h3>
              <p className="text-sm text-gray-500 my-2">
                This is my passion project. This is a social media platform that
                lets creative content creators create interactive chat stories.
                I'm building this because I want to give people a new way to
                express themselves and share their stories. I'm building this
                with Next.js, Tailwind CSS, and Supabase. I am really proud of
                the interactive story editor I built with react-flow.
              </p>
              <div className="flex gap-2 mt-4">
                <a href="#" className="btn btn-disabled md:px-12 !rounded-sm">
                  Github
                </a>
                <a href="#" className="btn btn-disabled md:px-12 !rounded-sm">
                  Website
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 3 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col min-w-0 rounded-sm overflow-hidden border">
            <div className="carousel w-full">
              <div id="slide5-1" className="carousel-item relative w-full">
                <img src={welle1.src} className="w-full h-[250px]" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide5-2" className="btn btn-circle">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </div>
              </div>
              <div id="slide5-2" className="carousel-item relative w-full">
                <img src={welle2.src} className="w-full h-[250px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide5-1" className="btn btn-circle">
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 flex-1">
              <h3 className="text-xl font-bold leading-none">
                Welle IT-Lösungen
              </h3>
              <p className="text-sm text-gray-500 my-2">
                This is not a single project. I am providing a service to help
                small and medium sized businesses and nonprofits to get online.
                I offer website design and development services. I build
                websites with Wordpress or Next.js, Tailwind CSS, and Supabase.
                I also offer hosting and maintenance services. I'm also working
                on a tool to create and send and manage ongoing email campaigns.
                I offer website design and development services to small
                businesses and nonprofits. I needed an easy way to create and
                send email campaigns to my clients.
              </p>
              <div className="flex gap-2 mt-4">
                <a href="#" className="btn btn-disabled md:px-12 !rounded-sm">
                  Website
                </a>
                <a
                  href="#contact"
                  className="btn btn-outline md:px-12 !rounded-sm"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 3 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col min-w-0 rounded-sm overflow-hidden border max-h-[500px] min-h-[500px]">
            <div className="carousel w-full">
              <div id="slide6-1" className="carousel-item relative w-full">
                <img src={portfolio1.src} className="w-full h-[250px]" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
              </div>
            </div>
            <div className="p-4 flex-1">
              <h3 className="text-xl font-bold leading-none">
                Portfolio Website
              </h3>
              <p className="text-sm text-gray-500 my-2">
                This is my portfolio website. I built this website with Next.js,
                Tailwind CSS. It is hosted on Vercel. If you want to use this as
                a template for your own portfolio website, you can find the
                source code on my Github.
              </p>
              <div className="flex gap-2 mt-4">
                <a
                  href="https://github.com/VinczeBertold"
                  className="btn btn-primary md:px-12 !rounded-sm"
                  target="_blank"
                >
                  Github
                </a>
                <a href="#" className="btn btn-outline md:px-12 !rounded-sm">
                  Website
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
