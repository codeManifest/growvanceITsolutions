import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const ReversePsychologyCTA = () => {
  // Memoized content
  const reasons = useMemo(() => [
    "You enjoy struggling with inconsistent leads",
    "You prefer watching competitors dominate search",
    "You love wasting money on ineffective ads",
    "You're comfortable with invisible online presence",
    "You have time to figure it all out yourself"
  ], []);

  const benefits = useMemo(() => [
    { icon: "📈", text: "300%+ more qualified leads" },
    { icon: "💰", text: "60% lower customer acquisition cost" },
    { icon: "🏆", text: "First-page rankings in 90 days" }
  ], []);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={container}
          className="text-center mb-10"
        >
          <motion.span 
            variants={item}
            className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4"
          >
            Only For Serious Businesses
          </motion.span>
          
          <motion.h2 
            variants={item}
            className="text-2xl sm:text-5xl font-bold text-gray-900 mb-4"
          >
            Don't Join Us If...
          </motion.h2>
          
          <motion.p 
            variants={item}
            className="text-gray-700 max-w-2xl mx-auto"
          >
            (The truth about what it takes to grow in 2025)
          </motion.p>
        </motion.div>

        {/* Reverse Psychology List */}
        <motion.div 
          variants={container}
          className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-green-100 mb-10"
        >
          <ul className="space-y-3">
            {reasons.map((reason, i) => (
              <motion.li 
                key={i}
                variants={item}
                className="flex items-start text-sm sm:text-base"
              >
                <span className="flex-shrink-0 mr-3 mt-0.5 text-green-500 text-lg">✖</span>
                <span className="text-gray-700">{reason}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Flip to Positive */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-green-600 text-white p-6 sm:p-8 rounded-xl relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-700 rounded-full opacity-20"></div>
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-green-500 rounded-full opacity-15"></div>
          
          <div className="relative">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              But if you <span className="text-green-200">actually want</span> to grow:
            </h3>
            
            <ul className="space-y-3 mb-6">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-lg mr-3">{benefit.icon}</span>
                  <span className="font-medium">{benefit.text}</span>
                </li>
              ))}
            </ul>
            
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto bg-white text-green-700 hover:bg-green-50 font-medium py-3 px-8 rounded-lg shadow-md transition-all duration-200"
            >
              Prove Me Wrong - Apply Now
            </motion.button>
          </div>
        </motion.div>

        {/* Small disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-xs text-gray-500 mt-6 text-center"
        >
          *We only accept 5 new clients per month to ensure quality
        </motion.p>
      </div>
    </section>
  );
};

export default React.memo(ReversePsychologyCTA);