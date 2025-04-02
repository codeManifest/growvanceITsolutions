import React from 'react';
import { motion } from 'framer-motion';

const logos = ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp", "7.webp"];

export default function LogoList() {
  return (
    <div className="w-full overflow-hidden bg-[#FFFFFF] p-4">
      <motion.div
        className="flex gap-10"
        animate={{ x: ["0%", "-100%"] }} // Moves from start to end
        transition={{
          repeat: Infinity, // Infinite loop
          duration: 10, // Adjust speed (lower = faster)
          ease: "linear", // Smooth transition
        }}
      >
        {/* Duplicate logos to ensure seamless looping */}
        {[...logos, ...logos].map((item, index) => (
          <div key={index} className="min-w-[150px] p-4">
            <img
              src={`/images/partners/${item}`}
              alt="Logo"
              className="h-20 w-auto "
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}