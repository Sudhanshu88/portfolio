import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div id="education" className="w-full p-2 flex items-center mt-24">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        {/* LEFT SIDE IMAGE */}
        <motion.div
          className="w-full h-auto my-8 md:m-auto shadow-xl shadow-gray-400 dark:shadow-gray-700 rounded-xl flex items-center justify-center p-4 sm:mb-16"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/assets/education.jpg"
            className="rounded-xl w-full h-full"
            alt="Education"
          />
        </motion.div>

        {/* RIGHT SIDE CONTENT */}
        <div className="col-span-2">
          <motion.p
            className="uppercase text-xl tracking-widest text-[#5651e5]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Education
          </motion.p>
          <motion.h2
            className="py-4 text-gray-700 dark:text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            What I Have Learnt
          </motion.h2>

          {/* BOX 1 - B.Tech */}
          <motion.div
            className="p-6 my-4 rounded-xl shadow-lg shadow-gray-400 dark:shadow-gray-700 bg-[#ecf0f3] dark:bg-gray-800 hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h6 className="text-lg font-semibold text-gray-700 dark:text-gray-500">
              🎓 B.Tech in Computer Science 
            </h6>
            <p className="mt-2 text-gray-600 dark:text-gray-500 text-sm">
              Enrolled in a B.Tech program specializing in Computer Science,
              integrating technical computing skills with innovative
              design concepts. Maintaining a strong CGPA of 6.4 (2021-2025)at{" "}
              <b>Jai Narain College of Technology,Bhopal</b>.
            </p>
          </motion.div>

          {/* BOX 2 - AISSCE */}
          <motion.div
            className="p-6 my-4 rounded-xl shadow-lg shadow-gray-400 dark:shadow-gray-700 bg-[#ecf0f3] dark:bg-gray-800 hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h6 className="text-lg font-semibold text-gray-700 dark:text-gray-500">
              🏫 AISSCE (Class XII) – 72%
            </h6>
            <p className="mt-2 text-gray-600 dark:text-gray-500 text-sm">
              Studied at <b>Sita Ram Singh Uchttar Madhyak Vidyalay</b> – a beacon of academic
              excellence. Achieved 72% in AISSCE (2020–21), reflecting strong
              academic performance and dedication.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Education;
