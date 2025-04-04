import React from 'react';
import { FaRocket, FaChartLine, FaHandshake, FaCheck, FaQuoteLeft, FaChevronRight, FaUsers, FaLightbulb, FaCog } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "xyz",
      role: "Growth Strategist",
      expertise: "Scaling businesses from ₹10L to ₹10Cr",
      image: ""
    },
    {
      name: "xyz",
      role: "Digital Marketing Lead",
      expertise: "Paid advertising & conversion optimization",
      image: ""
    },
    {
      name: "xyz",
      role: "SEO Director",
      expertise: "Organic growth specialist",
      image: ""
    },
    {
      name: "xyz",
      role: "Content Strategist",
      expertise: "Storytelling that converts",
      image: ""
    }
  ];

  const processSteps = [
    {
      title: "Discovery",
      description: "Deep dive into your business metrics",
      icon: <FaCog className="text-green-600 text-2xl" />
    },
    {
      title: "Strategy",
      description: "Custom growth roadmap creation",
      icon: <FaLightbulb className="text-green-600 text-2xl" />
    },
    {
      title: "Execution",
      description: "Precision implementation",
      icon: <FaRocket className="text-green-600 text-2xl" />
    },
    {
      title: "Optimization",
      description: "Continuous performance improvement",
      icon: <FaChartLine className="text-green-600 text-2xl" />
    }
  ];

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            We're Not for Everyone.<br />But We Might Be for You.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
          >
            Not Every Business Gets to Work With Us – Are You the Right Fit?
          </motion.p>
          <motion.a href='tel://+919876543210'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-green-700 hover:bg-green-50 font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300"
          >
            Make a Free Strategy Call
          </motion.a >
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-green-800 mb-4">What Makes Us Different?</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-green-50 p-8 rounded-xl border border-green-200"
            >
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FaChartLine className="text-green-600 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-green-800">No BS Marketing</h3>
              </div>
              <p className="text-gray-600">We focus on revenue, not vanity metrics</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-green-50 p-8 rounded-xl border border-green-200"
            >
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FaRocket className="text-green-600 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-green-800">Proven Results</h3>
              </div>
              <p className="text-gray-600">50+ brands scaled their revenue with us</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-green-50 p-8 rounded-xl border border-green-200"
            >
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FaHandshake className="text-green-600 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-green-800">We Work Selectively</h3>
              </div>
              <p className="text-gray-600">Because we only take businesses we can actually grow</p>
            </motion.div>
          </div>

          <div className="mt-12 bg-green-100 border-l-4 border-green-500 p-6 rounded-lg">
            <p className="text-gray-700 italic">
              "If you're just 'testing the waters,' we're probably not a good fit. If you're ready to scale, let's build your growth strategy."
            </p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Our Proven Growth Process</h2>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              A systematic approach that delivers consistent results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 text-center"
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                <div className="mt-4 text-green-500 font-bold">{index + 1}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Meet Our Growth Team</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              The experts who will be driving your business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-green-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-800">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.expertise}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-green-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-green-800 mb-4">They Took the Leap. Now It's Your Turn.</h2>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              Real Businesses, Real Growth, Real Revenue
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="text-4xl font-bold text-green-600 mb-2">10X</div>
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                <span className="text-gray-600">Revenue Growth</span>
              </div>
              <p className="text-gray-500">₹50K/month → ₹5L/month in 4 months</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="text-4xl font-bold text-green-600 mb-2">60X</div>
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                <span className="text-gray-600">Lead Growth</span>
              </div>
              <p className="text-gray-500">5-10 leads/month → 300+ leads/month</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="text-4xl font-bold text-green-600 mb-2">#1</div>
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                <span className="text-gray-600">Brand Visibility</span>
              </div>
              <p className="text-gray-500">No brand presence → Top-ranking brand in Google search</p>
            </motion.div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border border-green-200 max-w-4xl mx-auto">
            <div className="flex items-start">
              <FaQuoteLeft className="text-green-200 text-4xl mr-4 mt-1" />
              <div>
                <p className="text-gray-700 text-lg mb-6">
                  "Growvance didn't just bring us traffic—they brought us customers. Our revenue tripled."
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
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                <FaCheck className="text-green-600 mr-2" /> Transparency
              </h3>
              <p className="text-gray-600">No hidden fees or surprises. We communicate clearly about what we can and can't do for your business.</p>
            </div>
            <div className="bg-green-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                <FaCheck className="text-green-600 mr-2" /> Accountability
              </h3>
              <p className="text-gray-600">We take ownership of our work and stand behind our strategies and results.</p>
            </div>
            <div className="bg-green-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                <FaCheck className="text-green-600 mr-2" /> Growth Mindset
              </h3>
              <p className="text-gray-600">We're constantly learning and adapting to new market trends and technologies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-green-700 to-green-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to be our next success story?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-green-100">
            Let's talk about how we can scale your business.
          </p>
          <motion.a
          href='https://wa.me/+919876543210?text=i%20want%20to%20book%20a%20free%20Growth%20Audit'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-green-700 hover:bg-green-50 font-bold w-1/2 py-3 px-8 rounded-lg shadow-lg transition duration-300 flex items-center justify-center mx-auto"
          >
            Book Your Free Growth Audit <FaChevronRight className="ml-2" />
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;