import React from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaUsers, FaDollarSign, FaQuoteLeft } from "react-icons/fa";

const SuccessStory = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stats = [
    { icon: <FaChartLine className="text-3xl" />, value: "325%", label: "Engagement Increase" },
    { icon: <FaUsers className="text-3xl" />, value: "2.4K", label: "New Followers" },
    { icon: <FaDollarSign className="text-3xl" />, value: "180%", label: "Revenue Growth" }
  ];

  return (
    <section className="py-20 px-5 bg-gradient-to-br from-green-50 to-green-100">
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={item} className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            Success Story
          </span>
          <h2 className="text-4xl font-bold text-green-800 mb-4">
            How We Transformed <span className="text-green-600">EcoGarden's</span> Social Presence
          </h2>
          <p className="text-lg text-green-700 max-w-3xl mx-auto">
            From struggling startup to industry leader in just 6 months
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Story */}
          <motion.div variants={item}>
            <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-green-200">
              <FaQuoteLeft className="absolute -top-5 -left-5 text-5xl text-green-200" />
              <p className="text-lg text-gray-700 mb-6">
                "Before working with this team, our social media was stagnant. Within weeks of implementing their strategy, 
                we saw explosive growth that translated directly to our bottom line."
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center text-white font-bold mr-4">
                  EG
                </div>
                <div>
                  <h4 className="font-bold text-green-800">Sarah Johnson</h4>
                  <p className="text-green-600">CEO, EcoGarden</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Stats */}
          <motion.div variants={item}>
            <div className="space-y-6">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-green-100 flex items-start"
                >
                  <div className="p-3 bg-green-100 text-green-600 rounded-lg mr-6">
                    {stat.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-green-800 mb-1">{stat.value}</h3>
                    <p className="text-green-700">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div variants={item} className="mt-20">
          <h3 className="text-2xl font-bold text-green-800 mb-8 text-center">Our 6-Month Journey</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>
            
            {[
              { month: "Month 1", title: "Audit & Strategy", desc: "Complete platform analysis and goal setting" },
              { month: "Month 2", title: "Content Revamp", desc: "New visual identity and posting schedule" },
              { month: "Month 3", title: "Community Growth", desc: "Targeted campaigns and influencer collabs" },
              { month: "Month 4", title: "Paid Scaling", desc: "Strategic ad campaigns for maximum ROI" }
            ].map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-10 ${index % 2 === 0 ? 'pr-10 md:pr-0 md:pl-10 text-left md:text-right' : 'pl-10'}`}
              >
                <div className={`p-6 rounded-lg shadow-sm border border-green-100 bg-white ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}>
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium mb-2">
                    {step.month}
                  </span>
                  <h4 className="text-lg font-bold text-green-800 mb-1">{step.title}</h4>
                  <p className="text-green-700">{step.desc}</p>
                </div>
                <div className={`absolute top-6 w-4 h-4 rounded-full bg-green-600 ${index % 2 === 0 ? '-right-2 md:right-auto md:-left-2' : '-left-2'}`}></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SuccessStory;