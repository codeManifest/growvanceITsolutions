import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import rocketImage from '/images/rocket2.webp'; // Make sure to add your rocket image

const BoostYourWebsite = () => {
  // Memoized data
  const mistakes = useMemo(() => [
    "Targeting the wrong keywords (wasting budget)",
    "Ignoring local SEO ('near me' searches)",
    "Publishing generic content (not Assam-specific)",
    "Treating marketing as expense, not investment",
    "Using outdated tactics risking penalties"
  ], []);

  const metrics = useMemo(() => [
    { value: "1,450+", label: "Monthly searches" },
    { value: "67%", label: "Lower cost-per-lead" },
    { value: "3", label: "Corporate contracts" }
  ], []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  const rocketVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut" 
      } 
    },
    hover: {
      y: [-3, 3, -3],
      transition: { 
        duration: 1.5,
        repeat: Infinity 
      }
    }
  };

  const freeAuditHandler = () => {
    window.location.href = "https://wa.me/+919876543210?text=I’d%20like%20a%20Free%20Audit.%20Can%20you%20help%20me?";
};



  return (
    <section className="py-10 md:py-14 px-4 sm:px-6 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto ">
        {/* Main Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center"
        >
          {/* Text Content */}
          <div className="lg:w-1/2">
            <motion.span 
              variants={itemVariants}
              className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium mb-3"
            >
              Guwahati SEO Report
            </motion.span>

            <motion.h2 
              variants={itemVariants}
              className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3"
            >
              Why Most Businesses Never Rank
              <span className="block text-green-600 mt-1">How We Fix It</span>
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="text-gray-700 mb-5 text-sm sm:text-base"
            >
              98% of Guwahati businesses make these critical mistakes:
            </motion.p>

            <motion.ul 
              variants={containerVariants}
              className="space-y-2 mb-6"
            >
              {mistakes.map((point, i) => (
                <motion.li 
                  key={i}
                  variants={itemVariants}
                  className="flex items-start text-sm sm:text-base"
                >
                  <span className="flex-shrink-0 mt-1 mr-2 text-green-500">•</span>
                  <span className="text-gray-700">{point}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={itemVariants}>
              {/* free audit */}
              <button onClick={freeAuditHandler} className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-5 sm:py-2.5 sm:px-6 rounded-lg transition-colors duration-200 text-sm sm:text-base">
                Get Free Audit
              </button>
            </motion.div>
          </div>

          {/* Rocket Image - Hidden on small mobile, visible from 400px */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            variants={rocketVariants}
            className="w-40 sm:w-52 lg:w-64 mx-auto lg:mx-0 mt-6 lg:mt-0"
          >
            <img 
              src={rocketImage} 
              alt="Rocket soaring" 
              className="w-full h-auto"
              loading="lazy"
            />
          </motion.div>
        </motion.div>

        {/* Metrics Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 bg-white p-4 sm:p-5 rounded-lg shadow-sm border border-green-100"
        >
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
            Recent Client Results:
          </h3>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {metrics.map((metric, i) => (
              <div key={i} className="bg-green-50 p-2 sm:p-3 rounded-md text-center">
                <p className="text-lg sm:text-xl font-bold text-green-600">{metric.value}</p>
                <p className="text-xs text-gray-700 mt-1">{metric.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(BoostYourWebsite);