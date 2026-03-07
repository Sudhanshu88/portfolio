import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Unleash Destination Tours And Experience – Python Developer Intern",
    duration: "May 2024 – May 2025",
    description:
      " During my internship at Unleash Destination Tours And Experience, I worked on core products such as Omnidocs,IBPS, BAM, BRMS, and NewgenONE, gaining valuable insights into enterprise content and process automation platforms. My role involved contributing to the backend using Javaand implementing dynamic client-side features using JavaScript. I also participated in creating real-time web interfaces that streamlined user interactions and enhanced customer experience.",
  },
  {
    company: "Zaalima Development – Devops Engineer Intern",
    duration: "May 2025 – Nov 2025",
    description:
      "At Zaalima Development, I worked in a DevOps role where I focused on automating application deployment and managing infrastructure. I implemented CI/CD pipelines to streamline the build, test, and deployment process. I worked with containerization tools like Docker to package applications and ensure consistent environments across development and production. I also assisted in managing cloud resources, monitoring application performance, and maintaining reliable deployment workflows to improve system scalability and stability."
  },
  {
    company: "Freelance – Devops role",
    duration: "Nov 2025 – Present",
    description:
      "At Freelance, I worked in a DevOps role where I focused on automating application deployment and managing infrastructure. I implemented CI/CD pipelines to streamline the build, test, and deployment process. I worked with containerization tools like Docker to package applications and ensure consistent environments across development and production. I also assisted in managing cloud resources, monitoring application performance, and maintaining reliable deployment workflows to improve system scalability and stability."
},
];

const Experience = () => {
  return (
    <div id="experience" className="w-full py-16 flex items-center">
      <div className="max-w-[1240px] m-auto px-4">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Experience
        </p>
        <h2 className="py-4 text-gray-700 dark:text-gray-600">
          Where I’ve Worked
        </h2>

        {/* Timeline */}
        <div className="relative border-l-4 border-[#5651e5] dark:border-[#888] ml-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-10 ml-6"
            >
              {/* Dot Icon */}
              <span className="absolute -left-5 flex items-center justify-center w-10 h-10 bg-[#5651e5] text-white rounded-full ring-4 ring-white dark:ring-gray-800 shadow-md">
                <Briefcase size={18} />
              </span>

              {/* Card */}
              <div className="p-6 bg-[#ecf0f3] dark:bg-gray-800 shadow-lg rounded-xl  transition-transform duration-300">
                <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-500">
                  {exp.company}
                </h4>
                <p className="text-sm italic text-gray-700 dark:text-gray-500 mb-2">
                  {exp.duration}
                </p>
                <p className="text-gray-600 dark:text-gray-500">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
