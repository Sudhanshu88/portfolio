import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
  // Variants for container and staggered children
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  const imageHover = {
    scale: 1.05,
    boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  };

  const linkHover = {
    scale: 1.05,
    color: "#5651e5",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  };

  return (
    <section id="about" className="w-full p-2 flex items-center mt-24">
      <motion.div
        className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Text Section */}
        <motion.div className="col-span-2" variants={containerVariants}>
          <motion.p className="uppercase text-xl tracking-widest text-[#5651e5]" variants={itemVariants}>
            About
          </motion.p>
          <motion.h2 className="py-4 text-gray-700 dark:text-gray-600" variants={itemVariants}>
            Who I Am
          </motion.h2>
          <motion.p className="py-2 text-gray-600 dark:text-gray-500" variants={itemVariants}>
            "At Zaalima Development, I worked in a DevOps role where I focused on automating application deployment and managing infrastructure. I implemented CI/CD pipelines to streamline the build, test, and deployment process. I worked with containerization tools like Docker to package applications and ensure consistent environments across development and production. I also assisted in managing cloud resources, monitoring application performance, and maintaining reliable deployment workflows to improve system scalability and stability."
            </motion.p>
          <Link href="/#projects">
            <motion.p 
              className="py-2 text-gray-600 underline cursor-pointer dark:text-blue-500"
              whileHover={linkHover}
              variants={itemVariants}
            >
              Check out some of my latest projects.
            </motion.p>
          </Link>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full h-auto m-auto shadow-xl shadow-gray-400 dark:shadow-gray-700 rounded-xl flex items-center justify-center p-4 cursor-pointer"
          whileHover={imageHover}
        >
          <img
            src="/assets/about_new.png"
            className="rounded-xl"
            alt="About DevOps Engineer"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
