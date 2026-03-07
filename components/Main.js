import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import ThemeToggle from "./ThememToggle";

const Main = () => {
  return (
    <div id="home" className="w-full text-center mt-40 lg:mt-12">
      {/* Theme toggle button */}
      <div className="fixed top-24 right-8 z-10">
        <ThemeToggle />
      </div>

      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <motion.div
          className="flex flex-col items-center justify-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {/* Profile Image */}
          <motion.img
            src="/assets/promo.jpeg"
            alt=""
            className="md:mt-36 rounded-[100%] h-64 w-64"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          {/* Intro Text */}
          <motion.p
            className="mt-4 uppercase text-sm tracking-widest text-gray-700 dark:text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            LET&apos;S BUILD SOMETHING TOGETHER
          </motion.p>

          <motion.h1
            className="py-4 text-gray-700 dark:text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hi, I&apos;m <span className="text-[#5651e5]">Sudhanshu</span>
          </motion.h1>

          <motion.h1
            className="py-2 text-gray-700 dark:text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Devops Engineer
          </motion.h1>

          <motion.p
            className="py-4 text-gray-700 max-w-[70%] mx-auto dark:text-gray-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            A passionate DevOps Engineer dedicated to building reliable, scalable, and
            automated infrastructure. With strong knowledge of cloud platforms,
            containerization, and CI/CD pipelines, I focus on improving development
            workflows and accelerating application delivery. I enjoy automating
            deployment processes, managing infrastructure, and ensuring high
            availability of applications. I am continuously exploring modern DevOps
            tools and practices to bridge the gap between development and operations
            while delivering efficient and secure production environments.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            className="flex items-center justify-between max-w-[330px] m-auto py-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            {[
              {
                href: "https://www.linkedin.com/in/sudhanshu-ranjan-cloud/",
                icon: <FaLinkedin />,
              },
              {
                href: "https://github.com/Sudhanshu88",
                icon: <FaGithub />,
              },
              {
                href: "https://www.instagram.com/devops.with.sudhanshu/",
                icon: <FaInstagram />,
              },
              {
                href: "https://x.com/8825Ranjan",
                icon: <FaXTwitter />,
              },
              {
                href: "sudhanshuranjan029@gmail.com",
                icon: <FAgmail/>
              },
              {
                href:"8825234780",
                icon: <FaPhone/>
              },

            ].map((social, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-4 md:p-6 cursor-pointer mx-2"
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-gray-700 dark:text-gray-200 text-2xl">
                    {social.icon}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
