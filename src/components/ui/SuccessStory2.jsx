import React from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaUsers, FaDollarSign, FaQuoteLeft } from "react-icons/fa";

const SuccessStory2 = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const stats = [
    { icon: <FaChartLine />, value: "325%", label: "Engagement" },
    { icon: <FaUsers />, value: "2.4K", label: "Followers" },
    { icon: <FaDollarSign />, value: "180%", label: "Revenue" }
  ];

  const timeline = [
    { month: "Month 1", title: "Strategy", desc: "Platform analysis & goals" },
    { month: "Month 2", title: "Content", desc: "New visual identity" },
    { month: "Month 3", title: "Growth", desc: "Targeted campaigns" },
    { month: "Month 4", title: "Scaling", desc: "Strategic ad campaigns" }
  ];

  return (
    <section className="py-16 px-4 bg-green-50">
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={item} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-3">
            Transforming <span className="text-green-600">EcoGarden</span>
          </h2>
          <p className="text-green-700">
            From startup to leader in 6 months
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Testimonial */}
          <motion.div variants={item}>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100 relative">
              <FaQuoteLeft className="absolute top-4 left-4 text-2xl text-green-100" />
              <p className="text-gray-700 mb-4 pl-8">
                "Within weeks we saw explosive growth that translated directly to revenue."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold mr-3">
                  EG
                </div>
                <div>
                  <h4 className="font-medium text-green-800">Sarah Johnson</h4>
                  <p className="text-sm text-green-600">CEO, EcoGarden</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div variants={item} className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                variants={item}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-4 rounded-lg shadow-xs border border-green-100 text-center"
              >
                <div className="text-green-600 text-xl mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold text-green-800">{stat.value}</h3>
                <p className="text-sm text-green-700">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div variants={item}>
          <h3 className="text-xl font-semibold text-green-800 mb-6 text-center">
            Our Journey
          </h3>
          <div className="space-y-4">
            {timeline.map((step, index) => (
              <motion.div
                key={index}
                variants={item}
                className="flex items-start"
              >
                <div className="w-3 h-3 rounded-full bg-green-500 mt-1.5 mr-4 flex-shrink-0"></div>
                <div>
                  <div className="flex items-baseline">
                    <span className="text-sm font-medium text-green-700 mr-2">
                      {step.month}
                    </span>
                    <h4 className="font-medium text-green-800">{step.title}</h4>
                  </div>
                  <p className="text-sm text-green-700">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SuccessStory2;