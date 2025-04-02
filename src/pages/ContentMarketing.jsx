import React, { useEffect, useState } from "react";
import { 
  FaPenAlt, 
  FaSearch, 
  FaChartLine, 
  FaUsers, 
  FaHashtag, 
  FaCheck, 
  FaQuoteLeft,
  FaQuestionCircle,
  FaTimes,
  FaComments
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// ===== Components =====
const Counter = ({ target, duration = 2 }) => {
  const [count, setCount] = React.useState(0);
  const controls = useAnimation();

  React.useEffect(() => {
    let start = 0;
    const increment = target / (duration * 60);
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

  return <motion.span initial={{ opacity: 0 }} animate={controls}>{count}+</motion.span>;
};

const AnimatedSection = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0, transition: { duration: 0.6, delay } });
  }, [inView, controls, delay]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={controls}>
      {children}
    </motion.div>
  );
};

// ===== Pricing Table =====
const PricingTable = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
    {[
      {
        name: "Starter",
        price: "$799",
        period: "/month",
        description: "Ideal for businesses starting content marketing",
        features: [
          "4 Blog Posts/Month",
          "Basic SEO Optimization",
          "Content Strategy",
          "Monthly Analytics Report",
          "Email Support"
        ],
        popular: false
      },
      {
        name: "Growth",
        price: "$1,499",
        period: "/month",
        description: "Our most popular content package",
        features: [
          "8 Blog Posts/Month",
          "Advanced SEO",
          "2 Long-Form Guides",
          "Social Media Content",
          "Weekly Performance Updates",
          "Dedicated Content Manager"
        ],
        popular: true
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "For businesses with complex content needs",
        features: [
          "Custom Content Volume",
          "Premium SEO Strategy",
          "Video Content",
          "Email Marketing Copy",
          "Competitor Analysis",
          "24/7 Priority Support"
        ],
        popular: false
      }
    ].map((plan, index) => (
      <AnimatedSection key={index} delay={index * 0.2}>
        <motion.div 
          whileHover={{ y: -10 }}
          className={`relative p-8 rounded-xl shadow-md border-2 ${plan.popular ? 'border-green-500 bg-green-50' : 'border-green-100 bg-white'}`}
        >
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold">
              MOST POPULAR
            </div>
          )}
          <h3 className="text-2xl font-bold text-green-800 mb-2">{plan.name}</h3>
          <div className="flex items-end mb-4">
            <span className="text-4xl font-bold text-green-700">{plan.price}</span>
            <span className="text-gray-500 ml-1">{plan.period}</span>
          </div>
          <p className="text-gray-600 mb-6">{plan.description}</p>
          <ul className="space-y-3 mb-8">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-center">
                <FaCheck className="text-green-500 mr-2" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`w-full py-3 px-6 rounded-lg font-bold ${plan.popular ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'} text-white transition duration-300`}
          >
            Get Started
          </motion.button>
        </motion.div>
      </AnimatedSection>
    ))}
  </div>
);

// ===== FAQ Section =====
const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto mt-12">
      <AnimatedSection>
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
          Content Marketing FAQs
        </h2>
      </AnimatedSection>
      
      <div className="space-y-4">
        {[
          {
            question: "How long before we see results from content marketing?",
            answer: "Content marketing is a long-term strategy. Typically, you'll start seeing traffic increases within 3-4 months, with significant results appearing after 6-12 months of consistent, high-quality content production."
          },
          {
            question: "Do you provide writers or should we?",
            answer: "We have a team of professional writers specializing in different industries. However, we can also work with your existing writers to optimize their content for better performance."
          },
          {
            question: "How do you measure content success?",
            answer: "We track multiple KPIs including organic traffic, time on page, bounce rate, keyword rankings, backlinks earned, and conversion rates from content."
          },
          {
            question: "Can you help with content distribution?",
            answer: "Absolutely! Our premium packages include content amplification through social media, email marketing, and outreach to industry publications."
          },
          {
            question: "What industries do you specialize in?",
            answer: "Our team has experience across B2B tech, healthcare, e-commerce, professional services, and SaaS. We carefully match writers to your industry for authentic content."
          }
        ].map((item, index) => (
          <AnimatedSection key={index} delay={index * 0.1}>
            <motion.div 
              whileHover={{ scale: 1.005 }}
              className="border border-green-100 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full p-6 text-left bg-white hover:bg-green-50 transition duration-300"
              >
                <h3 className="text-lg font-semibold text-green-800">{item.question}</h3>
                <FaQuestionCircle className={`text-green-600 transition-transform duration-300 ${activeIndex === index ? 'transform rotate-180' : ''}`} />
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeIndex === index ? 'auto' : 0,
                  opacity: activeIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 bg-green-50 text-gray-700">
                  {item.answer}
                </div>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

// ===== Live Chat Widget =====
const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 bg-green-600 text-white p-4 rounded-full shadow-xl z-50"
      >
        <FaComments className="text-2xl" />
      </motion.button>

      {/* Chat Box */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-24 right-8 w-80 bg-white rounded-lg shadow-xl border border-green-200 z-50 overflow-hidden"
        >
          <div className="bg-green-700 text-white p-4 flex justify-between items-center">
            <h3 className="font-bold">Chat About Content Strategy</h3>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-green-200">
              <FaTimes />
            </button>
          </div>
          
          <div className="p-4 h-64 overflow-y-auto">
            <div className="bg-green-100 text-gray-800 p-3 rounded-lg mb-3 max-w-xs">
              <p>Hi there! How can we help with your content needs?</p>
            </div>
            
            <div className="space-y-3">
              <button className="block w-full text-left bg-green-50 hover:bg-green-100 p-3 rounded-lg border border-green-200 transition duration-300">
                Content Strategy Questions
              </button>
              <button className="block w-full text-left bg-green-50 hover:bg-green-100 p-3 rounded-lg border border-green-200 transition duration-300">
                Pricing Information
              </button>
              <button className="block w-full text-left bg-green-50 hover:bg-green-100 p-3 rounded-lg border border-green-200 transition duration-300">
                Case Studies
              </button>
            </div>
          </div>
          
          <div className="p-4 border-t border-green-200">
            <div className="flex">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-1 border border-green-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-r-lg transition duration-300">
                Send
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

// ===== Main Page Component =====
const ContentMarketing = () => {
  return (
    <div className="font-sans bg-white text-gray-800 overflow-hidden">
      <LiveChatWidget />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-20 px-4 md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <AnimatedSection delay={0.2}>
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
                <span className="text-green-600">Content Marketing</span> That Drives Results
              </h1>
              <p className="text-xl text-green-700 mb-8">
                Attract, engage, and convert your ideal customers with strategic content that ranks and resonates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300"
                >
                  Get Content Audit
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-green-700 hover:bg-green-50 font-bold py-3 px-8 rounded-lg shadow-lg border-2 border-green-600 transition duration-300"
                >
                  See Case Studies
                </motion.button>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <div className="md:w-1/2">
              <img
                src="/content-marketing-illustration.svg"
                alt="Content Marketing Illustration"
                className="w-full h-auto"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-green-800 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center px-4">
          {[
            { number: <Counter target={300} />, label: "Client Websites" },
            { number: <Counter target={5000} />, label: "Content Pieces" },
            { number: <Counter target={85} />, label: "Avg. Traffic Growth" },
            { number: <Counter target={120} />, label: "Keywords Ranked" },
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

      {/* Why Content Marketing? */}
      <section className="py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
              Why <span className="text-green-600">Content Marketing</span> Works
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaSearch className="text-green-600 text-4xl mb-4" />,
                title: "SEO Benefits",
                desc: "High-quality content helps you rank for valuable keywords and attract organic traffic."
              },
              {
                icon: <FaUsers className="text-green-600 text-4xl mb-4" />,
                title: "Builds Trust",
                desc: "Educational content establishes your brand as an authority in your industry."
              },
              {
                icon: <FaChartLine className="text-green-600 text-4xl mb-4" />,
                title: "Cost Effective",
                desc: "Content continues working for you long after publication, unlike paid ads."
              }
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

      {/* Our Services */}
      <section className="bg-green-50 py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
              Our <span className="text-green-600">Content Marketing</span> Services
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaPenAlt className="text-green-600 text-3xl mb-4" />,
                title: "Blog Content Creation",
                desc: "SEO-optimized articles that attract and engage your target audience."
              },
              {
                icon: <FaSearch className="text-green-600 text-3xl mb-4" />,
                title: "SEO Content Strategy",
                desc: "Data-driven approach to content that ranks for valuable keywords."
              },
              {
                icon: <FaHashtag className="text-green-600 text-3xl mb-4" />,
                title: "Social Media Content",
                desc: "Platform-specific content that drives engagement and shares."
              },
              {
                icon: <FaUsers className="text-green-600 text-3xl mb-4" />,
                title: "Email Newsletter Content",
                desc: "Regular content to nurture leads and retain customers."
              },
              {
                icon: <FaChartLine className="text-green-600 text-3xl mb-4" />,
                title: "Content Performance Analysis",
                desc: "Detailed reporting on what's working and optimization recommendations."
              },
              {
                icon: <FaPenAlt className="text-green-600 text-3xl mb-4" />,
                title: "Whitepapers & Ebooks",
                desc: "In-depth content for lead generation and authority building."
              }
            ].map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition duration-300"
                >
                  {service.icon}
                  <h3 className="text-xl font-semibold text-green-700 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
              Our <span className="text-green-600">Content Creation</span> Process
            </h2>
          </AnimatedSection>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>
            <div className="space-y-12 md:space-y-0">
              {[
                { 
                  step: "1", 
                  title: "Strategy & Research", 
                  desc: "Keyword research, competitor analysis, and content planning",
                  image: "Research illustration"
                },
                { 
                  step: "2", 
                  title: "Content Creation", 
                  desc: "Professional writing, editing, and SEO optimization",
                  image: "Writing illustration"
                },
                { 
                  step: "3", 
                  title: "Design & Enhancement", 
                  desc: "Visual elements, formatting, and multimedia integration",
                  image: "Design illustration"
                },
                { 
                  step: "4", 
                  title: "Publishing & Promotion", 
                  desc: "Strategic distribution across channels for maximum reach",
                  image: "Publishing illustration"
                },
                { 
                  step: "5", 
                  title: "Analysis & Optimization", 
                  desc: "Performance tracking and continuous improvement",
                  image: "Analytics illustration"
                }
              ].map((process, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-8`}>
                  <AnimatedSection delay={index * 0.2}>
                    <div className="md:w-1/2 p-6">
                      <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
                        <span className="text-green-800 font-bold text-xl">{process.step}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-green-700 mb-2 text-center md:text-left">{process.title}</h3>
                      <p className="text-gray-600 text-center md:text-left">{process.desc}</p>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection delay={index * 0.3}>
                    <div className="md:w-1/2 p-6">
                      <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400">{process.image}</span>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 px-4 md:px-10 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
              Content Marketing <span className="text-green-600">Success Story</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-green-100">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-green-700 mb-4">
                    SaaS Company Case Study
                  </h3>
                  <p className="text-gray-600 mb-6">
                    How we helped a B2B SaaS company increase organic traffic by 320% and generate 150+ qualified leads per month through content marketing.
                  </p>
                  <div className="space-y-4">
                    {[
                      { metric: "320%", label: "Increase in Organic Traffic" },
                      { metric: "150+", label: "Monthly Qualified Leads" },
                      { metric: "25%", label: "Reduction in Customer Acquisition Cost" }
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
                    <span className="text-gray-400">Traffic Growth Chart</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center text-green-800 mb-4">
              Simple, Transparent <span className="text-green-600">Pricing</span>
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Choose the package that fits your content needs. Custom solutions available for enterprise clients.
            </p>
          </AnimatedSection>
          <PricingTable />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-10 bg-green-50">
        <FAQSection />
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 md:px-10 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Marketing With <span className="text-green-200">Powerful Content</span>?
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl mb-8">
              Let's create content that attracts your ideal customers and grows your business.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-700 hover:bg-green-50 font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300"
              >
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white hover:bg-green-800 font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                Book a Free Consultation
              </motion.button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ContentMarketing;