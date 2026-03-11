import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const SkillsItem = (props) => {
  const { title, imageUrl } = props;
  return (
    <motion.div 
      className="p-6 shadow-xl rounded-xl h-auto"
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image src={imageUrl} width="64px" height="64px" alt="/" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="dark:text-gray-500">{title}</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsItem;
