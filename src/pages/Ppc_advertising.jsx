import React, { useEffect } from "react";
import { FaChartLine, FaBullseye, FaMoneyBillWave, FaLightbulb, FaQuoteLeft } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CTA_Model from "../Models/CTA_Model";

// Animated Counter Component
const Counter = ({ target, duration = 2 }) => {
  const [count, setCount] = React.useState(0);
  const controls = useAnimation();

  React.useEffect(() => {
    let start = 0;
    const increment = target / (duration * 60); // 60fps

    const updateCounter = () => {
      start += increment;
      if (start < target) {
        setCount(Math.ceil(start));
        requestAnimationFrame(updateCounter);
      } else {
        setCount(target);
      }
    };

    controls.start({ opacity: 1 });
    updateCounter();
  }, [target, duration]);

  return (
    <motion.span initial={{ opacity: 0 }} animate={controls}>
      {count}+
    </motion.span>
  );
};

// Animated Section Component
const AnimatedSection = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay },
      });
    }
  }, [inView, controls, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};
const freeAuditHandler = () => {
  window.location.href = "https://wa.me/+919876543210?text=I’d%20like%20a%20Free%20PPC%20Audit.%20Can%20you%20help%20me?";
};

const Ppc_advertising = () => {
  return (
    <div className="font-sans bg-white text-gray-800 overflow-hidden">
      {/* 🚀 Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-10 md:py-12 px-4 w-full flex items-center md:px-8">
  <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-3">
    <AnimatedSection delay={0.2}>
      <div className=" mb-4 md:mb-0">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 mb-2 leading-tight">
          Maximize Your ROI with <span className="text-green-600">Smart PPC</span> Campaigns
        </h1>
        <p className="text-lg md:text-xl text-green-700 mb-4">
          Drive targeted traffic, increase conversions, and dominate your market with our data-driven PPC strategies.
        </p>
        <motion.button
          onClick={freeAuditHandler}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300"
        >
          Get a Free PPC Audit
        </motion.button>
      </div>
    </AnimatedSection>
    <AnimatedSection delay={0.4}>
      <div className=" w-full">
        <motion.img
          src="/images/ppchero.webp"
          alt="PPC Advertising Results Dashboard"
          className="w-full h-auto max-w-none md:max-w-[140%] -mr-0 md:-mr-16"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
      </div>
    </AnimatedSection>
  </div>
</section> 


      {/* 📈 Stats Section */}
      <section className="py-12 bg-green-800 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center px-4">
          {[
            { number: <Counter target={250} />, label: "Clients Served" },
            { number: <Counter target={500} />, label: "ROI Improved" },
            { number: <Counter target={85} />, label: "Cost Reduction" },
            { number: <Counter target={1000} />, label: "Leads Generated" },
          ].map((stat, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <div className="p-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-4xl font-bold mb-2 text-green-300"
                >
                  {stat.number}
                </motion.div>
                <p className="text-lg">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* 💡 Why PPC? */}
      <section className="py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
              Why <span className="text-green-600">Pay-Per-Click</span> Advertising?
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaChartLine className="text-green-600 text-4xl mb-4" />,
                title: "Instant Traffic",
                desc: "Get immediate visibility while SEO builds over time.",
              },
              {
                icon: <FaBullseye className="text-green-600 text-4xl mb-4" />,
                title: "Highly Targeted",
                desc: "Reach the right audience with precision targeting.",
              },
              {
                icon: <FaMoneyBillWave className="text-green-600 text-4xl mb-4" />,
                title: "Cost-Effective",
                desc: "Pay only when someone clicks on your ad.",
              },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-xl shadow-md border border-green-100 hover:shadow-lg transition duration-300"
                >
                  {item.icon}
                  <h3 className="text-xl font-semibold text-green-700 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 🎯 Our PPC Services */}
      <section className="bg-green-50 py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
              Our <span className="text-green-600">PPC Advertising</span> Services
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Google Ads Management",
                desc: "Maximize conversions with expertly optimized Search, Display, and Shopping campaigns.",
              },
              {
                title: "Facebook & Instagram Ads",
                desc: "Leverage social media to drive engagement and sales.",
              },
              {
                title: "LinkedIn Advertising",
                desc: "Target professionals and decision-makers in your industry.",
              },
              {
                title: "Remarketing Campaigns",
                desc: "Bring back lost visitors and increase conversions.",
              },
              {
                title: "YouTube Video Ads",
                desc: "Engage audiences with high-impact video advertising.",
              },
              {
                title: "PPC Consulting",
                desc: "Get expert guidance to improve your existing campaigns.",
              },
            ].map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition duration-300"
                >
                  <h3 className="text-xl font-semibold text-green-700 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 📊 Case Study */}
      <section className="py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
              Real <span className="text-green-600">Results</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-green-100">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-green-700 mb-4">
                    E-commerce Brand Case Study
                  </h3>
                  <p className="text-gray-600 mb-6">
                    How we helped an online store increase conversions by 320% while reducing ad spend by 25%.
                  </p>
                  <div className="space-y-4">
                    {[
                      { metric: "320%", label: "Increase in Conversions" },
                      { metric: "25%", label: "Reduction in Cost-Per-Acquisition" },
                      { metric: "5x", label: "Higher ROI" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ x: 5 }}
                        className="flex items-center"
                      >
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        <div>
                          <span className="font-bold text-green-700">{item.metric}</span>{" "}
                          <span className="text-gray-600">{item.label}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                  >
                    View Full Case Study
                  </motion.button>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-gray-100 h-full rounded-lg flex items-center justify-center">
                    <span className="text-gray-400">Performance Graph</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 🏆 Final CTA */}
      <CTA_Model/>
     
    </div>
  );
};

export default Ppc_advertising;