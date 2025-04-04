import React, { useState, useEffect } from 'react';
import { 
  FaEnvelope, 
  FaChartLine, 
  FaUsers, 
  FaCogs, 
  FaCheck, 
  FaQuoteLeft,
  FaChevronDown,
  FaSearch,
  FaPenAlt,
  FaChevronUp,
  FaRegClock,
  FaShieldAlt,
  FaStar,
  FaUserTie,
  FaTools,
  FaRocket,
  FaWhatsapp
} from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// ===== Components =====
const Counter = ({ target, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
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

  return (
    <motion.span initial={{ opacity: 0 }} animate={controls}>
      {count}+
    </motion.span>
  );
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

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-green-200 rounded-lg overflow-hidden mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full p-5 text-left bg-white hover:bg-green-50 transition duration-300"
      >
        <h3 className="text-lg font-semibold text-green-800">{question}</h3>
        {isOpen ? <FaChevronUp className="text-green-600" /> : <FaChevronDown className="text-green-600" />}
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="p-5 pt-0 bg-green-50 text-gray-700">
            {answer}
          </div>
        </motion.div>
      )}
    </div>
  );
};

// ===== Main Component =====
const EmailMarketing = () => {
  const [activeTab, setActiveTab] = useState('strategy');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const whatsappNumber = '+919876543210';

  const services = {
    strategy: [
      { 
        icon: <FaEnvelope className="text-green-500 text-3xl" />, 
        title: "Email Strategy", 
        desc: "Data-driven campaign planning for maximum ROI",
        features: [
          "Custom email marketing roadmap",
          "Customer journey mapping",
          "Campaign calendar development",
          "KPI and goal setting",
          "Competitor analysis"
        ]
      },
      { 
        icon: <FaUsers className="text-green-500 text-3xl" />, 
        title: "Audience Segmentation", 
        desc: "Precise targeting for better results",
        features: [
          "Demographic segmentation",
          "Behavioral targeting",
          "Purchase history analysis",
          "Lifecycle stage grouping",
          "Custom segment creation"
        ]
      },
      { 
        icon: <FaChartLine className="text-green-500 text-3xl" />, 
        title: "Performance Analytics", 
        desc: "Track and optimize your campaigns",
        features: [
          "Real-time performance dashboards",
          "A/B test result analysis",
          "Conversion funnel tracking",
          "ROI calculation",
          "Monthly performance reports"
        ]
      }
    ],
    creation: [
      { 
        icon: <FaPenAlt className="text-green-500 text-3xl" />, 
        title: "Email Design", 
        desc: "Mobile-responsive templates that convert",
        features: [
          "Custom HTML email templates",
          "Mobile-responsive design",
          "Brand-aligned visual style",
          "Interactive elements",
          "Accessibility optimization"
        ]
      },
      { 
        icon: <FaSearch className="text-green-500 text-3xl" />, 
        title: "Content Writing", 
        desc: "Engaging, conversion-focused copy",
        features: [
          "Strategic email copywriting",
          "Subject line optimization",
          "Personalized content",
          "Call-to-action placement",
          "A/B tested messaging"
        ]
      },
      { 
        icon: <FaCogs className="text-green-500 text-3xl" />, 
        title: "Automation Setup", 
        desc: "Workflows that save you time and drive sales",
        features: [
          "Welcome series setup",
          "Abandoned cart sequences",
          "Post-purchase follow-ups",
          "Re-engagement campaigns",
          "Behavior-triggered emails"
        ]
      }
    ],
    tools: [
      { 
        icon: <FaShieldAlt className="text-green-500 text-3xl" />, 
        title: "Deliverability", 
        desc: "Optimized inbox placement",
        features: [
          "SPF/DKIM/DMARC setup",
          "Inbox placement testing",
          "List hygiene management",
          "Spam filter avoidance",
          "Reputation monitoring"
        ]
      },
      { 
        icon: <FaRegClock className="text-green-500 text-3xl" />, 
        title: "Timing Optimization", 
        desc: "Send at the perfect moment",
        features: [
          "Send time analysis",
          "Timezone optimization",
          "Frequency testing",
          "Behavioral timing",
          "Seasonal adjustments"
        ]
      },
      { 
        icon: <FaChartLine className="text-green-500 text-3xl" />, 
        title: "A/B Testing", 
        desc: "Data-backed improvements",
        features: [
          "Subject line testing",
          "Content variations",
          "Design A/B tests",
          "CTA placement tests",
          "Multivariate testing"
        ]
      }
    ]
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director, RetailCo",
      content: "Our email revenue increased by 320% within 6 months of working with Growvance. Their strategic approach to segmentation and automation transformed our email program.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CEO, TechStart",
      content: "The team's expertise in deliverability helped us get our emails back into the primary inbox. Our open rates went from 12% to 38% in just two months!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "E-commerce Manager",
      content: "Their creative email designs and compelling copy have significantly boosted our click-through rates. We've seen a 45% increase in conversions from email.",
      rating: 4
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "5 email campaigns/month",
        "Basic automation",
        "Performance reports",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Growth",
      price: "$999",
      period: "/month",
      description: "Our most popular package",
      features: [
        "15 email campaigns/month",
        "Advanced automation",
        "A/B testing",
        "Segmentation",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large-scale needs",
      features: [
        "Unlimited campaigns",
        "Dedicated strategist",
        "Custom integrations",
        "24/7 support",
        "Quarterly strategy reviews"
      ],
      popular: false
    }
  ];

  const teamMembers = [
    {
      name: "Alex Thompson",
      role: "Email Strategist",
      expertise: "8 years in email marketing",
      fact: "Increased client ROI by 420% in 2022"
    },
    {
      name: "Priya Patel",
      role: "Creative Director",
      expertise: "Email design specialist",
      fact: "Designs with 30%+ higher CTR"
    },
    {
      name: "James Wilson",
      role: "Deliverability Expert",
      expertise: "Inbox placement specialist",
      fact: "98% average deliverability rate"
    }
  ];

  // Function to handle WhatsApp click
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber.replace('+', '')}`, '_blank');
  };

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">

        {/* Column 1: Text Content */}
        {/* Ensure the AnimatedSection component is working correctly */}
        <AnimatedSection delay={0.2} className="md:w-1/2 w-full text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Still Think Email Marketing <span className="text-green-300">Doesn't Work</span>?
          </h1>
          <p className="text-xl mb-8 text-green-100">
            You're probably right. It's complex, takes effort, and the results might just disrupt your current workflow. It's likely best to avoid finding out if targeted campaigns could actually grow your business.
          </p>
          <div className="flex justify-center md:justify-start">
             {/* Using motion.a as a button */}
            <motion.a
              href="https://wa.me/+919876543210?text=can%20you%20help%20me%20to%20grow%20my%20Email%20Marketing" // Using "#" requires preventDefault in onClick
              onClick={(e) => {
                  e.preventDefault(); // Prevents jumping to top of page
                  // --- POTENTIAL ISSUE AREA 2: Handler Call ---
                  // Make sure handleWhatsAppClick is defined and does what you expect
                  handleWhatsAppClick();
                  // --- END POTENTIAL ISSUE AREA 2 ---
                }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-700 hover:bg-green-50 font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 inline-block cursor-pointer" // Added cursor-pointer
            >
              Prove Email Doesn't Work For You
            </motion.a>
          </div>
        </AnimatedSection>

        {/* Column 2: Image */}
        {/* Ensure the AnimatedSection component is working correctly */}
        <AnimatedSection delay={0.4} className="md:w-1/2 w-full">
          {/* --- POTENTIAL ISSUE AREA 3: Image Path --- */}
          {/* Verify this image path is correct relative to your project structure. */}
          {/* Usually, images are placed in the `public` folder. */}
          <img
            src="/images/emailM.webp"
            alt="Illustration showing email marketing concepts"
            className="w-full h-auto object-contain mx-auto"
            // Consider adding error handling for the image if needed: onError={(e) => e.target.style.display='none'}
          />
          {/* --- END POTENTIAL ISSUE AREA 3 --- */}
        </AnimatedSection>

      </div>
    </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">
          {[
            { number: <Counter target={42} />, label: "Avg. ROI", icon: <FaChartLine className="text-green-600 text-2xl mx-auto mb-2" /> },
            { number: <Counter target={300} />, label: "Campaigns", icon: <FaEnvelope className="text-green-600 text-2xl mx-auto mb-2" /> },
            { number: <Counter target={95} />, label: "Deliverability", icon: <FaCheck className="text-green-600 text-2xl mx-auto mb-2" /> },
            { number: <Counter target={5} />, label: "Years Experience", icon: <FaRegClock className="text-green-600 text-2xl mx-auto mb-2" /> }
          ].map((stat, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <div className="p-6 bg-green-50 rounded-xl shadow-sm hover:shadow-md transition duration-300">
                {stat.icon}
                <div className="text-4xl font-bold text-gray-800 mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-green-50">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-xl text-center text-green-700 mb-8">
              TRUSTED BY INNOVATIVE BRANDS WORLDWIDE
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {[...Array(5)].map((_, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center"
                >
                  <div className="text-gray-400 font-bold text-xl">Logo {index + 1}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section - Enhanced */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-green-800 mb-4">Our Email Marketing Services</h2>
              <p className="text-xl text-green-700 max-w-3xl mx-auto">
                Comprehensive solutions to maximize your email marketing performance and ROI
              </p>
            </div>
          </AnimatedSection>

          {/* Service Tabs */}
          <AnimatedSection delay={0.2}>
            <div className="flex justify-center mb-12">
              <div className="inline-flex rounded-lg bg-white p-1 shadow-sm border border-green-200">
                {['strategy', 'creation', 'tools'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-md font-medium transition-all ${activeTab === tab ? 'bg-green-600 text-white' : 'text-gray-700 hover:bg-green-100'}`}
                  >
                    {tab === 'strategy' && 'Strategy & Planning'}
                    {tab === 'creation' && 'Content & Design'}
                    {tab === 'tools' && 'Optimization Tools'}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Service Cards */}
          <AnimatedSection delay={0.4}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services[activeTab].map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-green-200"
                >
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.desc}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <FaCheck className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg transition duration-300"
                    onClick={handleWhatsAppClick}
                  >
                    <FaWhatsapp className="mr-2" /> Get Started
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-green-800 mb-4">Our 4-Step Email Marketing Process</h2>
              <p className="text-xl text-green-700 max-w-3xl mx-auto">
                A proven methodology that delivers consistent results
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { 
                  step: "1", 
                  title: "Discovery", 
                  icon: <FaSearch className="text-green-600 text-2xl" />,
                  desc: "Deep dive into your business goals and audience"
                },
                { 
                  step: "2", 
                  title: "Strategy", 
                  icon: <FaChartLine className="text-green-600 text-2xl" />,
                  desc: "Data-driven campaign planning"
                },
                { 
                  step: "3", 
                  title: "Execution", 
                  icon: <FaRocket className="text-green-600 text-2xl" />,
                  desc: "Design, copywriting, and deployment"
                },
                { 
                  step: "4", 
                  title: "Optimization", 
                  icon: <FaTools className="text-green-600 text-2xl" />,
                  desc: "Continuous testing and improvement"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-green-200 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <div className="text-2xl font-bold text-green-700 mb-2">{item.step}</div>
                  <h3 className="text-xl font-bold text-green-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-800 to-green-700 text-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Email Marketing Success Story</h2>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                How we helped a retail brand increase email revenue by 320%
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-white text-gray-800 rounded-xl shadow-2xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-10">
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Retail Ecommerce Brand</h3>
                  <p className="text-gray-600 mb-6">
                    Implemented a complete email marketing strategy including segmentation, automation, and personalized content.
                  </p>
                  <div className="space-y-4 mb-8">
                    {[
                      { metric: "320%", label: "Increase in Email Revenue" },
                      { metric: "45%", label: "Higher Open Rates" },
                      { metric: "28%", label: "Click-Through Rate" },
                      { metric: "3.5x", label: "ROI Improvement" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
                        <div>
                          <span className="font-bold text-green-600">{item.metric}</span>{" "}
                          <span className="text-gray-600">{item.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center "
                    
                  >
                     Case Study
                  </motion.button>
                </div>
                <div className="md:w-1/2 bg-green-100 flex items-center justify-center p-10">
                  <div className="text-center">
                    <div className="bg-green-200 h-64 w-full rounded-lg flex items-center justify-center">
                      <span className="text-green-600">Email Performance Dashboard</span>
                    </div>
                    <p className="mt-4 text-green-600">3-Month Campaign Results</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-green-800 mb-4">What Our Clients Say</h2>
              <p className="text-xl text-green-700 max-w-3xl mx-auto">
                Don't just take our word for it - hear from our satisfied clients
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-green-50 p-8 rounded-xl border border-green-200">
              <div className="flex flex-col md:flex-row items-center mb-8">
                <div className="flex space-x-2 mb-4 md:mb-0">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={`text-xl ${i < testimonials[activeTestimonial].rating ? 'text-yellow-500' : 'text-gray-300'}`} />
                  ))}
                </div>
                <div className="md:ml-8">
                  <h3 className="text-xl font-bold text-green-800">{testimonials[activeTestimonial].name}</h3>
                  <p className="text-green-600">{testimonials[activeTestimonial].role}</p>
                </div>
              </div>
              <div className="relative">
                <FaQuoteLeft className="text-green-200 text-4xl absolute -top-2 -left-2" />
                <p className="text-gray-700 text-lg italic pl-8">
                  {testimonials[activeTestimonial].content}
                </p>
              </div>
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full ${activeTestimonial === index ? 'bg-green-600' : 'bg-green-200'}`}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-green-800 mb-4">Meet Our Email Experts</h2>
              <p className="text-xl text-green-700 max-w-3xl mx-auto">
                Our team brings decades of combined email marketing experience
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 text-center border border-green-200"
                >
                  <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaUserTie className="text-green-600 text-4xl" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.expertise}</p>
                  <div className="bg-green-100 p-3 rounded-lg">
                    <p className="text-green-800 text-sm">{member.fact}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-green-800 mb-4">Simple, Transparent Pricing</h2>
              <p className="text-xl text-green-700 max-w-3xl mx-auto">
                Choose the plan that fits your needs. No hidden fees.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className={`relative p-8 rounded-xl shadow-md border-2 ${plan.popular ? 'border-green-500 bg-green-50' : 'border-green-200 bg-white'}`}
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
                    className={`w-full py-3 px-6 rounded-lg font-bold ${plan.popular ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'} text-white transition duration-300 flex items-center justify-center`}
                    onClick={handleWhatsAppClick}
                  >
                    <FaWhatsapp className="mr-2" /> Enquire Now
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-green-800 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-green-700 max-w-3xl mx-auto">
                Everything you need to know about our email marketing services
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-4">
              <FAQItem 
                question="How long does it take to see results from email marketing?"
                answer="Most clients see initial improvements within 2-4 weeks, with significant results typically appearing after 3-6 months of consistent, optimized campaigns."
              />
              <FAQItem 
                question="Which email platforms do you work with?"
                answer="We're experts in all major platforms including Mailchimp, Klaviyo, HubSpot, ActiveCampaign, and custom solutions. We'll help you choose the best platform for your needs."
              />
              <FAQItem 
                question="Do you provide email copywriting services?"
                answer="Yes! Our team includes professional copywriters who specialize in creating engaging, conversion-focused email content tailored to your brand voice."
              />
              <FAQItem 
                question="How do you improve email deliverability?"
                answer="We use authentication protocols, list hygiene practices, content optimization, and strategic sending patterns to maximize inbox placement."
              />
              <FAQItem 
                question="Can we cancel anytime?"
                answer="Absolutely. We offer flexible month-to-month contracts with no long-term commitments. However, we're confident you'll want to stay once you see the results."
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-green-700 to-green-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stop Wasting Time on Emails <span className='text-green-50/70' >That Don’t Convert!</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-green-100">
            You think your email marketing is fine? Think again. Discover what’s holding you back and how to fix it—fast..
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-700 hover:bg-green-50 font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 flex items-center justify-center"
                onClick={handleWhatsAppClick}
              >
                <FaWhatsapp className="mr-2" /> WhatsApp Us
              </motion.button>
              <motion.a
              href='tel://+919876543210'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white hover:bg-green-800 font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center justify-center"
              >
                Call {whatsappNumber}
              </motion.a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default EmailMarketing;