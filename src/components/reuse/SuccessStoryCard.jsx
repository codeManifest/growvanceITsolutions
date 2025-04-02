import React from "react";
import { motion } from "framer-motion";

const SuccessStoryCard = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 shadow-lg border border-green-200 overflow-hidden"
    >
      {/* Quote Section */}
      <div className="relative mb-6">
        <div className="absolute -top-4 -left-4 text-5xl text-green-200 opacity-80">
          "
        </div>
        <p className="text-lg text-gray-800 pl-6">
          <span className="font-semibold">We were stuck at ₹50K/month.</span> Growvance helped us hit{" "}
          <span className="font-bold text-green-700">₹5L in just 4 months!</span>
        </p>
      </div>

      {/* Client Info */}
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold mr-4">
          AB
        </div>
        <div>
          <h4 className="font-medium text-green-800">Amit Bansal</h4>
          <p className="text-sm text-green-600">E-commerce Business Owner</p>
        </div>
      </div>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="w-full py-3 px-6 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md transition-all duration-300"
      >
        Want a similar success story? Let's talk →
      </motion.button>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-green-200 rounded-full opacity-20 -mr-10 -mb-10"></div>
      <div className="absolute top-0 left-0 w-16 h-16 bg-green-300 rounded-full opacity-10 -ml-8 -mt-8"></div>
    </motion.div>
  );
};

export default SuccessStoryCard;