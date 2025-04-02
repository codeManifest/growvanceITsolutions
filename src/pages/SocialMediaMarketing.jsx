import React, { useEffect, useState } from "react";
import { 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaTwitter, 
  FaYoutube, 
  FaChartLine, 
  FaUsers, 
  FaHashtag, 
  FaLightbulb, 
  FaQuoteLeft, 
  FaQuestionCircle, 
  FaTimes, 
  FaComments,
  FaCheck 
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// ======== Components ========
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

// ======== Pricing Table Component ========
const PricingTable = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
    {[
      {
        name: "Starter",
        price: "$499",
        period: "/month",
        description: "Perfect for small businesses getting started",
        features: [
          "1 Social Platform",
          "15 Posts/Month",
          "Basic Analytics",
          "Community Management",
          "Email Support"
        ],
        popular: false
      },
      {
        name: "Growth",
        price: "$999",
        period: "/month",
        description: "Our most popular package for scaling brands",
        features: [
          "3 Social Platforms",
          "30 Posts/Month",
          "Advanced Analytics",
          "Paid Ad Management",
          "Dedicated Account Manager",
          "Priority Support"
        ],
        popular: true
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "For large businesses with complex needs",
        features: [
          "Unlimited Platforms",
          "Custom Content Volume",
          "Competitor Analysis",
          "Influencer Partnerships",
          "24/7 Support",
          "Weekly Strategy Calls"
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

// ======== FAQ Component ========
const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto mt-12">
      <AnimatedSection>
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
          Frequently Asked Questions
        </h2>
      </AnimatedSection>
      
      <div className="space-y-4">
        {[
          {
            question: "How long does it take to see results?",
            answer: "Typically, you'll start seeing initial engagement improvements within 2-4 weeks. Significant growth in followers and conversions usually becomes evident after 3-6 months of consistent strategy implementation."
          },
          {
            question: "Do you create content for us?",
            answer: "Yes! Our content creation package includes professional photography, graphic design, and copywriting services. We can also work with your existing content team to enhance their output."
          },
          {
            question: "Which social platforms do you specialize in?",
            answer: "We're experts in all major platforms including Facebook, Instagram, LinkedIn, Twitter, Pinterest, TikTok, and YouTube. We'll help you determine which platforms are best for your specific business goals."
          },
          {
            question: "How do you measure success?",
            answer: "We track KPIs like engagement rate, follower growth, website traffic from social, lead generation, and conversion rates. You'll receive detailed monthly reports showing exactly how your campaigns are performing."
          },
          {
            question: "Can we cancel anytime?",
            answer: "Yes, we offer flexible month-to-month contracts. We're confident in our services though - 92% of our clients stay with us for at least 12 months after seeing their initial results."
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

// ======== Live Chat Widget ========
// 
// ======== Main Page Component ========
const SocialMediaMarketing = () => {
  return (
    <div className="font-sans bg-white text-gray-800 overflow-hidden">
     
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-20 px-4 md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <AnimatedSection delay={0.2}>
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
                Transform Your Brand with <span className="text-green-600">Strategic Social Media Marketing</span>
              </h1>
              <p className="text-xl text-green-700 mb-8">
                Grow your audience, boost engagement, and drive sales with our data-driven social media strategies.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300"
              >
                Get a Free Social Media Audit
              </motion.button>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <div className="md:w-1/2">
              <img
                src="/social-media-illustration.svg"
                alt="Social Media Illustration"
                className="w-full h-auto animate-float"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-green-800 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center px-4">
          {[
            { number: <Counter target={500} />, label: "Brands Helped" },
            { number: <Counter target={300} />, label: "Engagement Increase" },
            { number: <Counter target={120} />, label: "Campaigns Managed" },
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

      {/* Why Social Media Marketing? */}
      <section className="py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
              Why <span className="text-green-600">Social Media Marketing</span>?
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaUsers className="text-green-600 text-4xl mb-4" />,
                title: "Build Brand Awareness",
                desc: "Reach millions of potential customers where they spend their time.",
              },
              {
                icon: <FaHashtag className="text-green-600 text-4xl mb-4" />,
                title: "Engage Your Audience",
                desc: "Create meaningful interactions that foster loyalty.",
              },
              {
                icon: <FaChartLine className="text-green-600 text-4xl mb-4" />,
                title: "Drive Conversions",
                desc: "Turn followers into paying customers with strategic campaigns.",
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

      {/* Our Social Media Services */}
      <section className="bg-green-50 py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
              Our <span className="text-green-600">Social Media</span> Services
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaFacebook className="text-blue-600 text-3xl mb-4" />,
                title: "Facebook Marketing",
                desc: "Targeted ads, page management, and community engagement.",
              },
              {
                icon: <FaInstagram className="text-pink-600 text-3xl mb-4" />,
                title: "Instagram Growth",
                desc: "Visual storytelling, influencer collaborations, and shoppable posts.",
              },
              {
                icon: <FaLinkedin className="text-blue-700 text-3xl mb-4" />,
                title: "LinkedIn B2B Marketing",
                desc: "Lead generation and professional brand building.",
              },
              {
                icon: <FaTwitter className="text-blue-400 text-3xl mb-4" />,
                title: "Twitter Engagement",
                desc: "Real-time conversations and trend participation.",
              },
              {
                icon: <FaYoutube className="text-red-600 text-3xl mb-4" />,
                title: "YouTube Video Marketing",
                desc: "Video content strategy and promotion.",
              },
              {
                icon: <FaLightbulb className="text-green-600 text-3xl mb-4" />,
                title: "Content Strategy",
                desc: "Data-driven content planning and calendar management.",
              },
            ].map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition duration-300"
                >
                  <div className="flex items-center mb-4">
                    {service.icon}
                  </div>
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
              Our <span className="text-green-600">Social Media</span> Process
            </h2>
          </AnimatedSection>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>
            <div className="space-y-12 md:space-y-0">
              {[
                { step: "1", title: "Strategy Development", desc: "Audit, competitor analysis, and goal setting." },
                { step: "2", title: "Content Creation", desc: "High-quality posts, videos, and graphics." },
                { step: "3", title: "Community Management", desc: "Engagement, replies, and growth tactics." },
                { step: "4", title: "Paid Advertising", desc: "Targeted social ads for maximum ROI." },
                { step: "5", title: "Analytics & Optimization", desc: "Monthly reports and strategy tweaks." },
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
                        <span className="text-gray-400">Process Visualization</span>
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
              Real <span className="text-green-600">Results</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-green-100">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-green-700 mb-4">
                    Fashion Brand Case Study
                  </h3>
                  <p className="text-gray-600 mb-6">
                    How we helped a fashion brand grow Instagram followers by 400% and increase sales by 150% in 6 months.
                  </p>
                  <div className="space-y-4">
                    {[
                      { metric: "400%", label: "Follower Growth" },
                      { metric: "150%", label: "Increase in Sales" },
                      { metric: "10x", label: "Higher Engagement Rate" },
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
                    <span className="text-gray-400">Engagement Metrics Graph</span>
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
              Transparent <span className="text-green-600">Pricing</span>
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Flexible packages designed to scale with your business. No hidden fees, no long-term contracts.
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
              Ready to Dominate <span className="text-green-200">Social Media</span>?
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl mb-8">
              Let's create a social media strategy that grows your brand and drives real business results.
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
                Book a Free Strategy Call
              </motion.button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaMarketing;