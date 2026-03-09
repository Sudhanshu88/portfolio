import React from "react";
import SkillsItem from "./skills-item";

// Import images
import Linux from "@/public/assets/skills/linux.jpg";
import Git from "@/public/assets/skills/git.png";
import Github from "@/public/assets/skills/Github.png";
import GithubAction from "@/public/assets/skills/github action.png";
import Aws from "@/public/assets/skills/Aws.png";
import Docker from "@/public/assets/skills/Docker.png";
import Kubernetes from "@/public/assets/skills/kubernetes.png";
import Grafana from "@/public/assets/skills/grafana.jpg";
import Prometheus from "@/public/assets/skills/prometheus.jpg";
import Python from "@/public/assets/skills/python.png";
import CICD from "@/public/assets/skills/cicd.jpg";
import GitLab from "@/public/assets/skills/gitlab.png";

// Animation
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div id="skills" className="w-full p-2 mt-24">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4 text-gray-700 dark:text-gray-600">What I Can Do</h2>

        {/* Programming Languages */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-500 mb-4">
            Programming Languages
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <SkillsItem title="Python" imageUrl={Python} />
          </div>
        </motion.div>

        {/* Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-500 mb-4">
            Cloud
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <SkillsItem title="AWS" imageUrl={Aws} />
          </div>
        </motion.div>

        {/* OS */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-500 mb-4">
            OS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <SkillsItem title="Linux" imageUrl={Linux} />
            
          </div>
        </motion.div>

        {/* CI/CD */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-500 mb-4">
            CICD
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <SkillsItem title="CICD" imageUrl={CICD} />
            <SkillsItem title="GithubAction" imageUrl={GithubAction} />
            <SkillsItem title="GitLab" imageUrl={GitLab} />
          </div>
        </motion.div>


        {/* monitoring */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-500 mb-4">
            monitoring
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <SkillsItem title="Grafana" imageUrl={Grafana} />
            <SkillsItem title="Prometheus" imageUrl={Prometheus} />
          
          </div>
        </motion.div>


        {/* Container orchestration */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-500 mb-4">
            Container orchestration
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <SkillsItem title="Docker" imageUrl={Docker} />
            <SkillsItem title="Kubernetes" imageUrl={Kubernetes} />
            </div>
        </motion.div>

        {/* version control tools */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-500 mb-4">
            Version control tools
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <SkillsItem title="Git" imageUrl={Git} />
            <SkillsItem title="Github" imageUrl={Github} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
