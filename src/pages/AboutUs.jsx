import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const stats = [
    { value: "150+", label: "Satisfied Clients", description: "Businesses transformed since 2019" },
    { value: "4.9/5", label: "Client Rating", description: "Consistent excellence in service" },
    { value: "300%", label: "Average Growth", description: "Revenue increase for clients" },
    { value: "24/7", label: "Dedicated Support", description: "Always available for partners" }
  ];

  const principles = [
    {
      title: "Psychological First",
      description: "We design solutions starting with human psychology, then layer on technology for maximum adoption.",
      icon: "🧠"
    },
    {
      title: "Data-Backed Intuition",
      description: "Combining hard analytics with behavioral insights to predict market movements before they happen.",
      icon: "📊"
    },
    {
      title: "Growth Engineering",
      description: "Architecting systems that create compounding results, not just one-time fixes.",
      icon: "🚀"
    }
  ];

  const milestones = [
    { year: "2019", event: "Founded in Bangalore with 3 passionate team members" },
    { year: "2020", event: "Developed proprietary behavioral analytics framework" },
    { year: "2021", event: "Expanded to serve clients across 3 new cities" },
    { year: "2022", event: "Launched AI-powered business prediction models" },
    { year: "2023", event: "Recognized as Top IT Solutions Provider by TechIndia" },
    { year: "2024", event: "Serving 150+ clients across diverse industries" }
  ];

  if (!isMounted) return null;

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-900">
        <img 
          src="/team-meeting.jpg"
          alt="Growvance team collaborating"
          className="absolute w-full h-full object-cover brightness-75"
        />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            We <span className="text-green-400">Understand</span> What Makes Businesses <span className="text-amber-400">Grow</span>
          </h1>
          <p className="text-xl text-white mb-8">
            Since 2019, we've been decoding the psychology behind successful digital transformations
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg"
          >
            Discover Our Approach
          </motion.button>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-sm text-center"
              >
                <p className="text-4xl font-bold text-green-600 mb-2">{stat.value}</p>
                <p className="text-lg font-medium text-gray-800 mb-1">{stat.label}</p>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <img
              src="/data-analysis.jpg"
              alt="Growvance data analysis"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl font-bold mb-6">
              The <span className="text-green-600">Psychology</span> Behind Our Approach
            </h2>
            <p className="text-lg mb-4">
              Growvance was founded in 2019 on a revolutionary insight: <span className="font-semibold">technology succeeds when it aligns with human psychology</span>.
            </p>
            <p className="mb-6">
              While competitors focus on features, we start with <span className="text-green-600 font-medium">cognitive behavior</span> - understanding the mental models and decision-making processes that determine whether technology gets adopted or ignored.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Pioneered behavioral-first IT solutions in India</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Developed adoption acceleration frameworks</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Trained 200+ professionals in psychological implementation</span>
              </li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="border border-green-600 text-green-600 hover:bg-green-50 font-medium py-2 px-6 rounded-lg"
            >
              Meet Our Team
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              Our <span className="text-green-600">Psychological</span> Framework
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide every solution we create
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{principle.icon}</div>
                <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
                <p className="text-gray-700">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Our <span className="text-green-600">Journey</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Key milestones in our growth story
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 h-full w-0.5 bg-green-100 transform -translate-x-1/2"></div>
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`mb-10 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
            >
              <div className={`w-1/2 p-4 ${index % 2 === 0 ? 'pr-10 text-right' : 'pl-10 text-left'}`}>
                <h3 className="text-xl font-bold text-green-700">{milestone.year}</h3>
                <p className="text-gray-700">{milestone.event}</p>
              </div>
              <div className="w-1/2 flex justify-center">
                <div className="w-6 h-6 rounded-full bg-green-600 border-4 border-white"></div>
              </div>
              <div className={`w-1/2 p-4 ${index % 2 === 0 ? 'pl-10 text-left' : 'pr-10 text-right'}`}></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <img
              src="/office-space.jpg"
              alt="Growvance office space"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl font-bold mb-6">
              The <span className="text-amber-500">Growvance</span> Way
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-green-700">1. Cognitive Diversity</h3>
                <p>
                  We assemble teams with different thinking styles because breakthrough ideas emerge at the intersection of perspectives.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-green-700">2. Psychological Safety</h3>
                <p>
                  Our culture encourages risk-taking and vulnerability - the foundation of true innovation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-green-700">3. Growth Obsession</h3>
                <p>
                  Every team member dedicates time to learning and experimentation to stay ahead of trends.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Success */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <img
                src="/client-success.jpg"
                alt="Client success story"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6">
                Why Clients <span className="text-amber-300">Choose</span> Us
              </h2>
              <p className="text-lg mb-6">
                We don't just implement technology - we engineer adoption and measurable business impact.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-700 rounded-full p-2 mr-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>Behavioral-first approach ensures actual user adoption</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-700 rounded-full p-2 mr-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>Proprietary frameworks predict implementation challenges</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-700 rounded-full p-2 mr-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>Continuous optimization based on real user psychology</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            Ready to <span className="text-green-400">Transform</span> Your Business?
          </motion.h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's apply psychological IT solutions to drive your growth
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}