import React, { useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram,  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import baseUrl from "@/helpers/baseUrl";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { FaGoogle } from "react-icons/fa";

const Contact = () => {
  const router = useRouter();
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();
    const res = await fetch(`${baseUrl}/api/receive`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Name: formData.name,
        Email: formData.email,
        Phone: formData.phone,
        Subject: formData.subject,
        Message: formData.message,
      }),
    });

    const res2 = await res.json();

    if (res2.error) {
      theme === "light"
        ? toast.error(res2.error)
        : toast.error(res2.error, {
            style: { borderRadius: "10px", background: "#2d3748", color: "#fff" },
          });
    } else {
      theme === "light"
        ? toast.success("Message Sent")
        : toast.success("Message Sent", {
            style: { borderRadius: "10px", background: "#2d3748", color: "#fff" },
          });
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
    }
  }

  // Hover animation variants
  const hoverEffect = { scale: 1.1, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" };

  return (
    <div id="contact" className="w-full">
      <div className="max-w-[1240px] m-auto px-2 py-8 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">Contact</p>
        <h2 className="py-4 dark:text-gray-500 text-gray-700">Get In Touch</h2>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Section */}
          <motion.div
            className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 dark:shadow-gray-700 rounded-xl p-4"
            whileHover={hoverEffect}
          >
            <div className="lg:p-4 h-full">
              <motion.img
                src="/assets/contact.avif"
                alt="contact"
                className="rounded-xl w-full mb-4"
                whileHover={hoverEffect}
              />
              <h2 className="py-2 dark:text-gray-500 text-gray-700">Sudhanshu Ranjan</h2>
              <p className="dark:text-gray-500 text-gray-700">Devops Engineer</p>
              <p className="py-4 dark:text-gray-500 text-gray-600">
                Thank you for taking the time to explore my portfolio! If you're passionate
                about technology, innovation, or have a project in mind that needs a creative
                touch, I'd love to connect. Let's collaborate and build something exceptional
                together!
              </p>

              <p className="uppercase pt-8 dark:text-gray-500 text-gray-700">Connect With Me</p>
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
                
                href: "mailto:sudhanshuranjan029@gmail.com",
                icon: <FaGoogle />
                
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
            </div>
          </motion.div>

          {/* Right Section - Form */}
          <motion.div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 dark:shadow-gray-700 rounded-xl lg:p-4">
            <div className="p-4">
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <motion.div className="flex flex-col">
                    <label className="uppercase text-sm py-2 dark:text-gray-500">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-500"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </motion.div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 dark:text-gray-500">Phone Number</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-500"
                      type="text"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 dark:text-gray-500">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-500"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 dark:text-gray-500">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-500"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 dark:text-gray-500">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-500"
                    rows="10"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full p-4 mt-4 text-gray-100 bg-blue-500 dark:shadow-gray-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </motion.form>
            </div>
          </motion.div>
        </div>

        {/* Back to Top */}
        <motion.div className="flex justify-center py-12">
          <Link href="/#home">
            <motion.div
              className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-4 cursor-pointer"
              whileHover={hoverEffect}
            >
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
