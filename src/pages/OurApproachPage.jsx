import React from 'react';
import { 
  FaRocket, 
  FaChartLine, 
  FaSearch, 
  FaLightbulb, 
  FaCogs, 
  FaUsers,
  FaHandshake,
  FaCheck,
  FaQuoteLeft
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const OurApproachPage = () => {
  const approachSteps = [
    {
      title: "Discovery & Analysis",
      description: "We dive deep into your business to understand your unique challenges and opportunities.",
      icon: <FaSearch className="text-green-600 text-2xl" />,
      color: "from-green-100 to-green-50"
    },
    {
      title: "Strategy Development",
      description: "Custom growth roadmap tailored to your business goals and market position.",
      icon: <FaLightbulb className="text-green-600 text-2xl" />,
      color: "from-green-200 to-green-100"
    },
    {
      title: "Precision Execution",
      description: "Flawless implementation with attention to every detail that impacts results.",
      icon: <FaCogs className="text-green-600 text-2xl" />,
      color: "from-green-300 to-green-200"
    },
    {
      title: "Growth Acceleration",
      description: "Scaling what works while continuously optimizing performance.",
      icon: <FaRocket className="text-green-600 text-2xl" />,
      color: "from-green-400 to-green-300"
    }
  ];

  const principles = [
    {
      title: "Data-Driven Decisions",
      description: "We let numbers guide our strategy, not hunches.",
      icon: <FaChartLine />
    },
    {
      title: "Client-Centric Focus",
      description: "Your business goals become our north star.",
      icon: <FaUsers />
    },
    {
      title: "Transparent Partnership",
      description: "No black boxes - we work as an extension of your team.",
      icon: <FaHandshake />
    }
  ];

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            Our Proven Growth Framework
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
          >
            The systematic approach that's helped 50+ businesses scale predictably
          </motion.p>
          <motion.a
            href='https://wa.me/+919876543210?text=Hi,%20Im%20interested%20in%20a%20Growth%20Audit.%20Can%20you%20help%20me%20grow%20my%20business?'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-green-700 hover:bg-green-50 font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300"
          >
            Apply for Growth Audit
          </motion.a>
        </div>
      </section>

      {/* Approach Introduction */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Why Our Approach Works</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine data science with creative marketing to build predictable, scalable growth engines for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-green-50 p-8 rounded-xl border border-green-200"
              >
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-green-600">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-3">{principle.title}</h3>
                <p className="text-gray-600">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Our 4-Phase Growth Framework</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {approachSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-r ${step.color} p-8 rounded-xl shadow-sm`}
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex items-center mb-6 md:mb-0 md:mr-8">
                    <div className="bg-white p-4 rounded-full w-20 h-20 flex items-center justify-center shadow-md border border-green-200">
                      <span className="text-2xl font-bold text-green-700">{index + 1}</span>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-2xl font-bold text-green-800">{step.title}</h3>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 text-lg">{step.description}</p>
                  </div>
                  <div className="mt-6 md:mt-0 md:ml-8">
                    <div className="bg-white p-4 rounded-full shadow-md">
                      {step.icon}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-green-800 mb-4">The Growvance Methodology</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-green-800 mb-6">How We Differentiate</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                    <FaCheck className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-700">Customized Strategies</h4>
                    <p className="text-gray-600">No cookie-cutter solutions - we build strategies tailored to your unique business needs</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                    <FaCheck className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-700">Full-Funnel Focus</h4>
                    <p className="text-gray-600">We optimize the entire customer journey from awareness to conversion</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                    <FaCheck className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-700">Technology-Enabled</h4>
                    <p className="text-gray-600">Leveraging cutting-edge tools to drive efficiency and scalability</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-800 mb-6">Our Tools & Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Advanced Analytics",
                  "AI-Powered Insights",
                  "Automation Systems",
                  "Predictive Modeling",
                  "Conversion Optimization",
                  "Behavioral Tracking"
                ].map((tool, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.03 }}
                    className="bg-green-50 p-4 rounded-lg border border-green-200"
                  >
                    <div className="flex items-center">
                      <div className="bg-green-100 p-2 rounded-full mr-3">
                        <FaCheck className="text-green-600 text-xs" />
                      </div>
                      <span className="font-medium text-green-800">{tool}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-green-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Approach in Action</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-green-100 p-12 flex items-center">
                <div>
                  <h3 className="text-2xl font-bold text-green-800 mb-4">EcoGoods Case Study</h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-4xl font-bold text-green-600 mb-2">10X</p>
                      <p className="text-gray-600">Revenue Growth in 6 Months</p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold text-green-600 mb-2">300%</p>
                      <p className="text-gray-600">Increase in Conversion Rate</p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold text-green-600 mb-2">#1</p>
                      <p className="text-gray-600">Organic Ranking for Key Terms</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-12">
                <div className="flex items-start mb-8">
                  <FaQuoteLeft className="text-green-200 text-4xl mr-4 mt-1" />
                  <div>
                    <p className="text-gray-700 text-lg mb-6">
                      "Growvance's systematic approach transformed our business. Their framework identified bottlenecks we didn't know existed and created a predictable growth engine."
                    </p>
                    <div className="flex items-center">
                      <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center text-green-600 font-bold mr-4">
                        AS
                      </div>
                      <div>
                        <h4 className="font-bold text-green-800">Amit Sharma</h4>
                        <p className="text-green-600">Founder, EcoGoods</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-bold text-green-800 mb-4">How We Did It:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                        <FaCheck className="text-green-600 text-xs" />
                      </div>
                      <span className="text-gray-600">Identified high-value customer segments through data analysis</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                        <FaCheck className="text-green-600 text-xs" />
                      </div>
                      <span className="text-gray-600">Redesigned conversion funnel based on behavioral data</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                        <FaCheck className="text-green-600 text-xs" />
                      </div>
                      <span className="text-gray-600">Implemented automated nurture sequences for leads</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-green-700 to-green-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Systematize Your Growth?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8 max-w-3xl mx-auto text-green-100"
          >
            Let's apply our proven framework to your business.
          </motion.p>
          <motion.a
              href='tel://+919876543210'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-green-700 hover:bg-green-50 font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300"
          >
            Schedule Strategy Session
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default OurApproachPage;