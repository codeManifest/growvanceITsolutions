import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const FloatingIcons = () => {
  const positions = [
    { top: "5%", left: "5%" },
    { top: "5%", right: "5%" },
    { bottom: "5%", left: "5%" },
    { bottom: "5%", right: "5%" },
  ];

  const icons = [FaFacebook, FaInstagram, FaLinkedin, FaTwitter];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {icons.map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute text-gray-500 opacity-50"
          style={{
            fontSize: "clamp(2rem, 3vw, 3rem)",
            ...positions[index],
          }}
          animate={{ y: ["0px", "10px", "0px"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Icon />
        </motion.div>
      ))}
    </div>
  );
};

export default function Content() {
  return (
    <motion.section
      className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-white p-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <FloatingIcons />
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Transform Assam’s Digital Media Landscape with
          <span className="text-green-600"> Growvance IT Solutions</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
          With the rise of digital consumption, businesses in Assam are moving online.
          Our expert marketing solutions, backed by global expertise since 2019, will
          help you <strong>outperform your competitors</strong> and <strong>scale your business</strong> effectively.
        </p>

        {/* Speciality List with Divider */}
        <div className="w-full">
          <hr className="border-gray-300 opacity-50 mb-4" />
          <ul className="flex items-center justify-center gap-6 text-gray-400 text-lg font-semibold flex-wrap">
            <li>Industry-Specific Strategies</li>
            <li>Scalable Growth Solutions</li>
            <li>AI-Powered Automation</li>
            <li>Proven Track Record</li>
          </ul>
          <hr className="border-gray-300 opacity-50 mt-4 mb-8" />
        </div>

       
      </div>
    </motion.section>
  );
}