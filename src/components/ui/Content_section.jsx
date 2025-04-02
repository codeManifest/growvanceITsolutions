import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

export default function ContentSection({ title1, title2, title3, img, desc, btn1, btn2, bg,  }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-10% 0px" });

  const parentControls = useAnimation();
  const textControls = useAnimation();
  const imageControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      parentControls.start({ opacity: 1, y: 0 });
      textControls.start({ opacity: 1, y: 0 });
      imageControls.start({ opacity: 1 });
    } else {
      parentControls.start({ opacity: 0, y: 50 }); // Smooth fade-out when exiting viewport
    }
  }, [isInView, parentControls, textControls, imageControls]);

  return (
    <motion.section
      className={`w-full relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-b from-[#e6f0d279] to-white ${bg}`}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={parentControls}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative z-10 container mx-auto px-4 max-w-screen-xl flex flex-col-reverse md:flex-row items-center justify-between text-gray-900 overflow-hidden">
        
        {/* Left Side - Text */}
        <motion.div
          className="md:w-1/2 text-center sm:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={textControls}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            {title1} <span className="relative whitespace-nowrap text-[#72a01c]">
              <span className={`relative  `}>{title2}</span>
            </span> {title3}
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-base sm:text-lg text-gray-600">
            {desc}
          </p>

          {/* Buttons with Animation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#63910d" }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-3 cursor-pointer bg-[#72a01c] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              {btn1}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#4f8a08" }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-3 cursor-pointer bg-[#63910d] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              {btn2}
            </motion.button>
          </div>
        </motion.div>

        {/* Right Side - Floating Image */}
        <motion.div
          className="md:w-1/2 flex justify-center mb-6 md:mb-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={imageControls}
          transition={{ duration: 0.8 }}
        >
          <motion.img 
            src={img} 
            alt="image" 
            className="w-3/4 sm:w-2/3 md:w-full max-w-md"
            animate={{
              y: [0, -15, 0]  // Floating effect
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity
            }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}