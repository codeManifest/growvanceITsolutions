import React, { useState } from 'react';

import { IoLogoWechat } from "react-icons/io5";
import { 
  FaPenAlt,
  FaSearch,
  FaChartLine,
  FaQuoteLeft,
  FaChevronDown,
  FaChevronUp,
  FaStar,
  FaWhatsapp,
  FaPhone
} from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Components
const AnimatedSection = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  React.useEffect(() => {
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
        <h3 className="text-lg font-semibold text-[#0B8678]">{question}</h3>
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

// Main Component
const ContentWritingPage = () => {
  const [activeTab, setActiveTab] = useState('web');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [hoveredService, setHoveredService] = useState(null);
  const whatsappNumber = '+919876543210';

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  const services = {
    web: [
      { 
        icon: <FaPenAlt className="text-green-500 text-3xl" />,
        title: "Website Content",
        badDesc: "Just throw some words together - visitors don't actually read",
        goodDesc: "Strategic content that engages visitors and drives action",
        features: [
          "SEO-optimized pages",
          "Conversion-focused copy",
          "Clear value propositions",
          "Scannable structure",
          "Call-to-action placement"
        ]
      },
      { 
        icon: <FaSearch className="text-green-500 text-3xl" />,
        title: "Blog Writing",
        badDesc: "Keyword stuffing works great, right?",
        goodDesc: "Valuable content that ranks and builds authority",
        features: [
          "Topic research",
          "Reader-focused approach",
          "Engaging storytelling",
          "SEO best practices",
          "Content clusters"
        ]
      },
      { 
        icon: <FaChartLine className="text-green-500 text-3xl" />,
        title: "Product Descriptions",
        badDesc: "Features lists are enough - who needs benefits?",
        goodDesc: "Compelling descriptions that highlight benefits and sell",
        features: [
          "Benefit-focused writing",
          "Emotional triggers",
          "Persuasive techniques",
          "Brand voice alignment",
          "A/B tested versions"
        ]
      }
    ],
    marketing: [
      { 
        icon: <FaPenAlt className="text-green-500 text-3xl" />,
        title: "Email Campaigns",
        badDesc: "Spammy subject lines get opens... sometimes",
        goodDesc: "Emails that get opened, read, and clicked",
        features: [
          "Attention-grabbing subject lines",
          "Personalized content",
          "Clear CTAs",
          "A/B tested copy",
          "Sequence strategy"
        ]
      },
      { 
        icon: <FaSearch className="text-green-500 text-3xl" />,
        title: "Social Media",
        badDesc: "Post anything - algorithms don't care about quality",
        goodDesc: "Scroll-stopping captions that drive engagement",
        features: [
          "Platform-specific writing",
          "Hashtag strategy",
          "Engagement prompts",
          "Brand personality",
          "Trend adaptation"
        ]
      },
      { 
        icon: <FaChartLine className="text-green-500 text-3xl" />,
        title: "Ad Copy",
        badDesc: "Clickbait works on everyone, doesn't it?",
        goodDesc: "High-converting ads that deliver real results",
        features: [
          "Attention hooks",
          "Pain point addressing",
          "Benefit highlighting",
          "A/B testing",
          "Platform optimization"
        ]
      }
    ]
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director, EcoGoods",
      content: "Our blog traffic increased by 320% after implementing their content strategy. The quality difference was embarrassing compared to our old DIY approach.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CEO, TechSolutions",
      content: "The website rewrite reduced our bounce rate by 45% and increased conversions immediately. Turns out words actually matter.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "E-commerce Manager",
      content: "Our email open rates doubled with their subject lines alone. The investment paid for itself in the first month.",
      rating: 4
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$499",
      period: "/month",
      description: "For small content needs",
      features: [
        "4 blog posts or pages",
        "Basic SEO optimization",
        "2 revision rounds",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Growth",
      price: "$1,299",
      period: "/month",
      description: "Most popular package",
      features: [
        "8 content pieces",
        "Advanced SEO strategy",
        "Unlimited revisions",
        "Content calendar",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For ongoing content needs",
      features: [
        "Unlimited content",
        "Dedicated writer",
        "Content strategy",
        "24/7 support",
        "Performance analytics"
      ],
      popular: false
    }
  ];

  const greenPalette = {
    primary: 'bg-green-600',
    primaryHover: 'hover:bg-green-700',
    primaryText: 'text-green-600',
    light: 'bg-green-100',
    dark: 'bg-green-800',
    darkHover: 'hover:bg-green-900',
    border: 'border-green-300',
    gradientFrom: 'from-green-700',
    gradientTo: 'to-green-900'
  };




  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Hero Section */}
      
<section className={`bg-gradient-to-r ${greenPalette.gradientFrom} ${greenPalette.gradientTo} text-white py-24 px-6`}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Your Content Is  <span className="text-green-300">Probably Fine</span>
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl mb-8 text-green-100"
            >
              (But imagine if it actually <span className="font-semibold">engaged readers</span> and drove results)
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
                href={`https://wa.me/${whatsappNumber.replace('+', '')}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleWhatsAppClick();
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-700 hover:bg-green-50 font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 inline-block cursor-pointer"
              >
                Prove Words Don't Matter
              </motion.a>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="/images/mobileapp.webp" 
              alt="Web and App Development" 
              className="w-full h-auto max-w-md"
            />
          </div>
        </div>
      </section>






      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">
          {[
            { number: "320%", label: "Content traffic", icon: <FaChartLine className="text-green-600 text-2xl mx-auto mb-2" /> },
            { number: "45%", label: "Lower bounce rate", icon: <FaPenAlt className="text-green-600 text-2xl mx-auto mb-2" /> },
            { number: "2.5x", label: "More engagement", icon: <FaSearch className="text-green-600 text-2xl mx-auto mb-2" /> },
            { number: "90%", label: "Higher retention", icon: <FaQuoteLeft className="text-green-600 text-2xl mx-auto mb-2" /> }
          ].map((stat, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-6 bg-green-50 rounded-xl shadow-sm hover:shadow-md transition duration-300"
              >
                {stat.icon}
                <div className="text-4xl font-bold text-gray-800 mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-green-800 mb-4">Our "Unnecessary" Content Services</h2>
              <p className="text-xl text-green-700 max-w-3xl mx-auto">
                Because apparently some businesses care about this word stuff
              </p>
            </div>
          </AnimatedSection>

          {/* Service Tabs */}
          <AnimatedSection delay={0.2}>
            <div className="flex justify-center mb-12">
              <div className="inline-flex rounded-lg bg-white p-1 shadow-sm border border-green-200">
                {Object.keys(services).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-md font-medium transition-all capitalize ${activeTab === tab ? 'bg-green-600 text-white' : 'text-gray-700 hover:bg-green-100'}`}
                  >
                    {tab === 'web' ? 'Website Content' : 'Marketing Content'}
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
                  whileHover={{ y: -5 }}
                  onHoverStart={() => setHoveredService(index)}
                  onHoverEnd={() => setHoveredService(null)}
                  className="bg-white p-8 min-h-100 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-200 relative overflow-hidden h-full"
                >
                  <div className={`relative z-10 transition duration-300 ${hoveredService === index ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-green-800 mb-3">{service.title}</h3>
                    <p className="text-gray-500 italic mb-6">{service.badDesc}</p>
                    
                  </div>
                  
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: hoveredService === index ? 1 : 0,
                    }}
                    className="absolute inset-0 bg-green-600 text-white p-8 flex flex-col"
                  >
                    <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                    <p className="mb-4">{service.goodDesc}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-300 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="mt-auto bg-white text-green-600 hover:bg-green-100 font-bold py-2 px-6 rounded-lg transition duration-300 flex items-center justify-center"
                      onClick={handleWhatsAppClick}
                    >
                      <FaWhatsapp className="mr-2" /> Get Started
                    </motion.button>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 px-6 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-green-800 mb-4">Does Content Really Matter?</h2>
              <p className="text-xl text-green-700 max-w-3xl mx-auto">
                Let's compare the results (but you're probably right, it doesn't)
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-red-200"
              >
                <h3 className="text-2xl font-bold mb-6 text-red-500 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Without Professional Content
                </h3>
                <div className="space-y-4">
                  {[
                    "Generic, forgettable messaging",
                    "High bounce rates",
                    "Low conversion rates",
                    "Poor SEO performance",
                    "Missed opportunities"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-red-100 p-2 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-green-200"
              >
                <h3 className="text-2xl font-bold mb-6 text-green-500 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  With Professional Content
                </h3>
                <div className="space-y-4">
                  {[
                    "Clear, compelling messaging",
                    "Engaged readers",
                    "Higher conversions",
                    "Strong SEO results",
                    "Competitive advantage"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-700 to-green-800 text-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Content Transformation Case Study</h2>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                How we helped an e-commerce brand increase conversions by 180%
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-white text-gray-800 rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-10">
                  <h3 className="text-2xl font-bold text-green-800 mb-4">EcoFriendly Home Goods</h3>
                  <p className="text-gray-600 mb-6">
                    Complete website content rewrite including product descriptions, about page, and blog strategy.
                  </p>
                  <div className="space-y-4 mb-8">
                    {[
                      { metric: "180%", label: "Increase in conversions" },
                      { metric: "55%", label: "More time on site" },
                      { metric: "40%", label: "Higher email signups" },
                      { metric: "3x", label: "ROI on content investment" }
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
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                  >
                    View Full Case Study
                  </motion.button>
                </div>
                <div className="md:w-1/2 bg-green-100 flex items-center justify-center p-10">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="bg-white p-4 rounded-xl shadow-lg">
                      <img 
                        src="/images/content-case-study.webp" 
                        alt="Content transformation" 
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                    <p className="mt-4 text-green-600 font-medium">Before & After Comparison</p>
                  </motion.div>
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
              <h2 className="text-3xl font-bold text-green-800 mb-4">What Our Clients Regret</h2>
              <p className="text-xl text-green-700 max-w-3xl mx-auto">
                These people wasted money on content - don't make their mistake
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

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-green-800 mb-4">Simple, Transparent Pricing</h2>
              <p className="text-xl text-green-700 max-w-3xl mx-auto">
                Because you probably think content is too expensive
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className={`relative p-8 rounded-xl shadow-md border-2 ${plan.popular ? 'border-green-500 bg-white' : 'border-green-200 bg-white'}`}
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
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
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
                    <FaWhatsapp className="mr-2" /> Get Started
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-green-800 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-green-700 max-w-3xl mx-auto">
                (That you're probably too embarrassed to ask)
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-4">
              <FAQItem 
                question="Does professional content really make that much difference?"
                answer="Only if you care about things like engagement, conversions, and search rankings. Otherwise, AI-generated gibberish works just fine."
              />
              <FAQItem 
                question="How long does content creation take?"
                answer="Quality content typically takes 5-10 hours per piece. Fast food is quicker, but won't give you the same results."
              />
              <FAQItem 
                question="What if I don't like the content?"
                answer="We include revision rounds to refine the work until you're thrilled. Unlike your intern who 'likes to write', we actually know what we're doing."
              />
              <FAQItem 
                question="Isn't this too expensive for my small business?"
                answer="Consider that poor content costs more in lost opportunities. Our clients typically see 3-5x ROI on their content investment."
              />
              <FAQItem 
                question="Can't I just use AI tools?"
                answer="Sure, just like you could perform your own dental work. Both are possible, but the results (and pain levels) will differ significantly."
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-green-700 to-green-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Still Think Content Doesn't Matter?
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-green-100">
              (We both know better - let's stop pretending)
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
                href={`tel:${whatsappNumber}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white hover:bg-green-700 font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center justify-center"
              >
                <FaPhone className="mr-2" /> {whatsappNumber}
              </motion.a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ContentWritingPage;