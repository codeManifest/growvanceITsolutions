import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { label: "Happy Clients", value: 20 },
  { label: "Successful Campaigns", value: 100 },
  { label: "Social Media Strategies Executed", value: 130 },
];

const Counter = ({ from, to, inView }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!inView) return;

    const delta = to - from;
    const duration = 2000;
    const increment = delta / (duration / 16);

    let current = from;
    const timer = setInterval(() => {
      current += increment;
      if ((increment > 0 && current >= to) || (increment < 0 && current <= to)) {
        current = to;
        clearInterval(timer);
      }
      setCount(Math.round(current));
    }, 16);

    return () => clearInterval(timer);
  }, [from, to, inView]);

  return <span>{count.toLocaleString()}</span>;
};

export default function TrustedBySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-16 bg-gradient-to-tl from-lime-300 to-green-100 text-center mt-40 relative">
      {/* Floating Images */}
      <motion.img
        src="/images/happy.webp"
        alt=""
        className="absolute w-28 sm:w-40 md:w-60 lg:w-80 -top-16 sm:-top-24 left-0 sm:-ml-10 object-contain"
        animate={{ y: [0, 10, 0] }} 
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.img
        src="/images/ribbon.webp"
        alt=""
        className="absolute w-28 sm:w-40 md:w-60 lg:w-80 -bottom-16 sm:-bottom-0 right-0 sm:h-40 sm:mr-10 object-contain"
        animate={{ y: [0, -10, 0] }} 
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
      Building Trust with Every Step
      </h2>
      <p className="text-gray-600 text-sm md:text-base mb-8 px-4 md:px-0">
      Though we’re a fresh agency, we’ve already made an impact by helping local businesses grow and thrive in the digital world.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-10 pt-10 sm:gap-40 px-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-4xl md:text-6xl font-bold text-black">
              <Counter from={0} to={stat.value} inView={isInView} />+
            </h3>
            <p className="text-gray-600 mt-2 text-sm md:text-lg">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}