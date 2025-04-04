import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaChartLine, FaFunnelDollar, FaPenFancy } from "react-icons/fa";

const MarketingHero = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-gradient-to-b from-white to-green-50 py-16 px-4 sm:px-6 lg:py-24 lg:px-1">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
        className="max-w-6xl mx-auto"
      >
        {/* Headline */}
        <motion.div variants={item} className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
            Marketing Insight
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-green-900 leading-tight mb-4">
            DIY Marketing is Costing You <span className="text-green-600">More Than You Think</span>
          </h1>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
        </motion.div>

        {/* Problem Section */}
        <motion.div variants={item} className="bg-white p-8 rounded-xl shadow-md border border-green-100 mb-12">
          <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
            <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3">!</span>
            The Hard Truth About Your Marketing
          </h2>
          
          <ul className="space-y-4 mb-6">
            {[
              "Running ads but getting no leads?",
              "Social media is not converting into sales?",
              "Investing in marketing but no real revenue growth?"
            ].map((problem, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">•</span>
                <span className="text-gray-800 font-medium">{problem}</span>
              </li>
            ))}
          </ul>

          <p className="text-lg text-green-800 font-medium">
            Your competitors are working with experts—<span className="text-green-600 font-bold">and winning</span>.
          </p>
        </motion.div>

        {/* Solution Section */}
        <motion.div variants={item} className="mb-16">
          <h2 className="text-3xl font-bold text-center text-green-900 mb-2">
            Our <span className="text-green-600">3-Step Growth</span> System
          </h2>
          <p className="text-center text-green-700 mb-12 max-w-2xl mx-auto">
            A proven framework that delivers consistent results
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaChartLine className="text-green-600 text-3xl mb-4" />,
                title: "Data-Driven Ads",
                desc: "No wasted budget, just ROI",
                bg: "bg-green-50"
              },
              {
                icon: <FaFunnelDollar className="text-green-600 text-3xl mb-4" />,
                title: "Conversion-Optimized Funnels",
                desc: "Turn visitors into customers",
                bg: "bg-green-50"
              },
              {
                icon: <FaPenFancy className="text-green-600 text-3xl mb-4" />,
                title: "Content That Sells",
                desc: "SEO, social media, email that converts",
                bg: "bg-green-50"
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className={`${step.bg} p-6 rounded-xl border border-green-100 shadow-sm`}
              >
                {step.icon}
                <h3 className="text-xl font-bold text-green-800 mb-2">{step.title}</h3>
                <p className="text-green-700">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Results */}
        <motion.div variants={item} className="bg-green-800 text-white p-8 rounded-xl mb-12">
          <h2 className="text-2xl font-bold mb-6">Real Brands, Real Results</h2>
          <ul className="space-y-4">
            {[
              "A coaching institute went from 20 leads/month to 300+ leads/month",
              "A local brand tripled its online sales in 90 days"
            ].map((result, index) => (
              <li key={index} className="flex items-start">
                <span className="bg-green-600 text-white rounded-full p-1 mr-3 mt-1">
                  <FaArrowRight className="text-xs" />
                </span>
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* CTA */}
        <motion.div 
          variants={item}
          className="text-center"
        >
          <p className="text-lg text-green-800 mb-6 max-w-2xl mx-auto">
            We don't work with everyone – only serious businesses. <span className="font-bold text-green-600">If that's you, let's scale.</span>
          </p>
          <motion.a
          href="/service-form"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 inline-flex items-center"
          >
            Apply to Work With Us
            <FaArrowRight className="ml-2" />
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MarketingHero;