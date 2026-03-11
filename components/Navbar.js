import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useRouter } from "next/router";
import { useTheme } from "@/context/ThemeContext";
import ThemeToggle from "./ThememToggle";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();
  const { theme } = useTheme();
  // console.log(theme);

  useEffect(() => {
    if (
      router.asPath === "/elegant" ||
      router.asPath === "/school" ||
      router.asPath === "/bookmark" ||
      router.asPath === "/score" ||
      router.asPath === "/netflix"
    ) {
      setNavBg("transparent");
      // console.log("router");
      setLinkColor("#ecf0f3");
    } else {
      if (theme === "light") {
        // console.log('light');

        setNavBg("#ecf0f3");
        setLinkColor("#1f2937");
      }
      // setNavBg("#ecf0f3");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div>
      <motion.div
        style={{ backgroundColor: `${navBg}` }}
        className={
          shadow
            ? "fixed w-full h-20 shadow-xl z-[100]"
            : "fixed w-full h-20 z-[100]"
        }
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 dark:bg-gray-900">
          <div>
            <Link href="/">
              <Image src="/assets/logo.png" alt="Logo" width="90" height="35" />
            </Link>
          </div>
          <div>
            <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
              <Link href="/#home">
                <li className="ml-10 text-sm uppercase hover:border-h dark:text-gray-500">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li className="ml-10 text-sm uppercase hover:border-h dark:text-gray-500">
                  About
                </li>
              </Link>
              <Link href="/#education">
                <li className="ml-10 text-sm uppercase hover:border-h dark:text-gray-500">
                  Education
                </li>
              </Link>
              <Link href="/#experience">
                <li className="ml-10 text-sm uppercase hover:border-h dark:text-gray-500">
                  Experience
                </li>
              </Link>

              <Link href="/#skills">
                <li className="ml-10 text-sm uppercase hover:border-h dark:text-gray-500">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li className="ml-10 text-sm uppercase hover:border-h dark:text-gray-500">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li className="ml-10 text-sm uppercase hover:border-h dark:text-gray-500">
                  Contact
                </li>
              </Link>
            </ul>
            <div onClick={handleNav} className="md:hidden">
              <AiOutlineMenu className="dark:text-gray-500 text-gray-400" />
            </div>
          </div>
        </div>
        <div
          className={
            nav ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70" : ""
          }
        >
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[85%] md:w-[45%] h-full bg-white p-10 nav-transition dark:bg-gray-900"
                : "fixed left-[-100%] top-0 w-[75%] md:w-[45%] h-full bg-white dark:bg-gray-900  p-10 nav-transition "
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <Link href="/">
                  <Image
                    src="/assets/logo.png"
                    height="100"
                    width="50"
                    alt="logo"
                  />
                </Link>
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 dark:text-gray-500 p-3 cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className="border-b border-gray-300 my-4">
                <p className="w-[85%] md:w-[90%] py-4 dark:text-gray-500">
                  Let's build something legendary together
                </p>
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li
                    onClick={() => {
                      setNav(false);
                    }}
                    className="py-4 text-sm dark:text-gray-500"
                  >
                    Home
                  </li>
                </Link>
                <Link href="/#about">
                  <li
                    onClick={() => {
                      setNav(false);
                    }}
                    className="py-4 text-sm dark:text-gray-500"
                  >
                    About
                  </li>
                </Link>
                <Link href="/#education">
                  <li
                    onClick={() => {
                      setNav(false);
                    }}
                    className="py-4 text-sm dark:text-gray-500"
                  >
                    Education
                  </li>
                </Link>
                <Link href="/#experience">
                  <li
                    onClick={() => {
                      setNav(false);
                    }}
                    className="py-4 text-sm dark:text-gray-500"
                  >
                    Experience
                  </li>
                </Link>
                <Link href="/#skills">
                  <li
                    onClick={() => {
                      setNav(false);
                    }}
                    className="py-4 text-sm dark:text-gray-500"
                  >
                    Skills
                  </li>
                </Link>
                <Link href="/#projects">
                  <li
                    onClick={() => {
                      setNav(false);
                    }}
                    className="py-4 text-sm dark:text-gray-500"
                  >
                    Projects
                  </li>
                </Link>
                <Link href="/#contact">
                  <li
                    onClick={() => {
                      setNav(false);
                    }}
                    className="py-4 text-sm dark:text-gray-500"
                  >
                    Contact
                  </li>
                </Link>
              </ul>
              <div className="pt-4">
                <p className="uppercase tracking-widest text-blue-500">
                  Let's Connect
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <Link href="https://www.linkedin.com/in/sudhanshu-ranjan-cloud/">
                    <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-6 cursor-pointer hover-scale-effect">
                      <FaLinkedin className="text-gray-700 dark:text-gray-200" />
                    </div>
                  </Link>

                  <Link href="https://github.com/Sudhanshu88">
                    <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-6 cursor-pointer hover-scale-effect">
                      <FaGithub className="text-gray-700 dark:text-gray-200" />
                    </div>
                  </Link>

                  <Link href="https://www.instagram.com/devops.with.sudhanshu/">
                    <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-6 cursor-pointer hover-scale-effect">
                      <FaInstagram className="text-gray-700 dark:text-gray-200" />
                    </div>
                  </Link>

                  <Link href="https://x.com/8825Ranjan">
                    <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-6 cursor-pointer hover-scale-effect">
                      <FaXTwitter className="text-gray-700 dark:text-gray-200" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
