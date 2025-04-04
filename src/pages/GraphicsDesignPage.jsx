import React, { useState } from 'react';
import { IoLogoWechat } from "react-icons/io5";

import { 
  FaPalette,
  FaPenFancy,
  FaLayerGroup,
  FaMobile,
  FaLaptop,
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

// Main Component
const GraphicDesignPage = () => {
  const [activeTab, setActiveTab] = useState('branding');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [hoveredService, setHoveredService] = useState(null);
  const whatsappNumber = '+919876543210';

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber.replace('+', '')}`, '_blank');
  };

  const services = {
    branding: [
      { 
        icon: <FaPalette className="text-green-500 text-3xl" />,
        title: "Logo Design",
        badDesc: "Just pick any font - your brand doesn't need recognition",
        goodDesc: "Memorable logos that communicate your brand essence",
        features: [
          "Custom logo concepts",
          "Brand identity development",
          "Color psychology application",
          "Versatile file formats",
          "Style guide included"
        ]
      },
      { 
        icon: <FaLayerGroup className="text-green-500 text-3xl" />,
        title: "Brand Identity",
        badDesc: "Use random colors - consistency is overrated anyway",
        goodDesc: "Cohesive visual systems that build brand recognition",
        features: [
          "Color palette development",
          "Typography system",
          "Brand guidelines",
          "Visual language",
          "Application examples"
        ]
      },
      { 
        icon: <FaPenFancy className="text-green-500 text-3xl" />,
        title: "Print Design",
        badDesc: "Design for one medium - who needs adaptability?",
        goodDesc: "Print materials that make tangible impressions",
        features: [
          "Business cards",
          "Brochures",
          "Packaging",
          "Signage",
          "Stationery"
        ]
      }
    ],
    digital: [
      { 
        icon: <FaMobile className="text-green-500 text-3xl" />,
        title: "UI/UX Design",
        badDesc: "Make users work - it builds character",
        goodDesc: "Intuitive interfaces that delight users",
        features: [
          "User research",
          "Wireframing",
          "Prototyping",
          "User testing",
          "Design systems"
        ]
      },
      { 
        icon: <FaLaptop className="text-green-500 text-3xl" />,
        title: "Web Design",
        badDesc: "Desktop-only is fine - mobile users can zoom",
        goodDesc: "Responsive designs that work everywhere",
        features: [
          "Mobile-first approach",
          "Performance optimization",
          "SEO-friendly structure",
          "Conversion-focused",
          "CMS integration"
        ]
      },
      { 
        icon: <FaChartLine className="text-green-500 text-3xl" />,
        title: "Social Media",
        badDesc: "Post whatever - your followers don't expect quality",
        goodDesc: "Scroll-stopping content that grows your audience",
        features: [
          "Platform-specific designs",
          "Content strategy",
          "Templates",
          "Branded assets",
          "Performance analysis"
        ]
      }
    ]
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Founder, Organic Beauty Co.",
      content: "Our rebrand increased customer recognition by 300%. Suddenly we looked like the premium brand we actually were.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Marketing Director, TechStart",
      content: "The website redesign reduced our bounce rate by 65% and increased conversions immediately. Design matters more than we realized.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "E-commerce Manager",
      content: "Our social media engagement tripled after implementing their visual strategy. The before/after difference was embarrassing.",
      rating: 4
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$799",
      period: "/project",
      description: "For new businesses",
      features: [
        "Single design deliverable",
        "2 revision rounds",
        "Basic brand guidelines",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Growth",
      price: "$2,499",
      period: "/project",
      description: "Most popular package",
      features: [
        "Complete brand identity",
        "Unlimited revisions",
        "Full style guide",
        "Multi-platform designs",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For established brands",
      features: [
        "Ongoing design partnership",
        "Dedicated designer",
        "Custom illustrations",
        "24/7 support",
        "Quarterly brand reviews"
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
        Don't Invest in Stunning Graphics <span className="text-green-300">(Your Brand Will Be Just Fine... Right?)</span>
      </h1>
      <p className="text-xl mb-8 text-green-100">
        Who needs eye-catching visuals anyway? Keep blending into the crowd, losing engagement, and watching competitors steal the spotlight – unless you actually want a brand identity that captivates, converts, and commands attention.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <motion.a
          href='https://wa.me/+919876543210?text=Can%20you%20help%20me%20with%20graphics%20design%20that%20stands%20out?'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`bg-white text-green-70 flex gap-3 text-green-800 items-center hover:bg-green-50 font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300`}
        >
          <IoLogoWechat /> Chat with us
        </motion.a>
      </div>
    </div>
    
    <div className="flex justify-center">
      <img 
        src="/images/graphicsD.webp" 
        alt="Graphics Design" 
        className="w-full h-auto max-w-md"
      />
    </div>
  </div>
</section>





      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">
          {[
            { number: "42%", label: "Higher conversion", icon: <FaChartLine className="text-green-600 text-2xl mx-auto mb-2" /> },
            { number: "3.5x", label: "More engagement", icon: <FaPalette className="text-green-600 text-2xl mx-auto mb-2" /> },
            { number: "300%", label: "Brand recognition", icon: <FaLayerGroup className="text-green-600 text-2xl mx-auto mb-2" /> },
            { number: "65%", label: "Lower bounce rate", icon: <FaMobile className="text-green-600 text-2xl mx-auto mb-2" /> }
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
<      section className="py-20 px-6 bg-gradient-to-br from-green-50 to-green-100">
  <div className="max-w-6xl mx-auto">
    <AnimatedSection>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-green-800 mb-6 relative inline-block">
          Our "Unnecessary" Design Services
          
        </h2>
        <p className="text-lg text-green-700 max-w-3xl mx-auto leading-relaxed font-light">
          Because apparently some businesses care about this stuff. (We know you do.)
        </p>
      </div>
    </AnimatedSection>

    {/* Service Tabs */}
    <AnimatedSection delay={0.2}>
      <div className="flex justify-center mb-12">
        <div className="inline-flex rounded-lg bg-white p-2 shadow-md border border-green-200 backdrop-filter backdrop-blur-sm bg-opacity-30">
          {Object.keys(services).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-md font-semibold transition-all capitalize ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-green-100 bg-opacity-20'
              }`}
            >
              {tab}
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
            whileHover={{ y: -8, boxShadow: '0 12px 25px rgba(0, 0, 0, 0.15)' }}
            onHoverStart={() => setHoveredService(index)}
            onHoverEnd={() => setHoveredService(null)}
            className="bg-white p-8 rounded-2xl shadow-md transition duration-300 border border-gray-200 relative overflow-hidden h-full backdrop-filter backdrop-blur-sm bg-opacity-20"
          >
            <div
              className={`relative z-10 transition duration-300 ${
                hoveredService === index ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <div className="mb-6 flex justify-center">
                <motion.div
                  className="w-12 h-12 flex items-center justify-center"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: hoveredService === index ? 360 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 text-center ">
                {service.title}
              </h3>
              <p className="text-gray-500 italic mb-8 text-center font-light">
                {service.badDesc}
              </p>
              
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: hoveredService === index ? 1 : 0,
              }}
              className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-700 text-white p-8 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 text-center ">
                  {service.title}
                </h3>
                <p className="mb-6 text-center font-light">{service.goodDesc}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-300 mr-2 mt-0.5 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-700 hover:bg-green-100 font-semibold py-3 px-8 rounded-lg transition duration-300 flex items-center justify-center mt-4"
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
              <h2 className="text-3xl font-bold text-green-800 mb-4">Does Design Really Matter?</h2>
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
                  Without Professional Design
                </h3>
                <div className="space-y-4">
                  {[
                    "Generic, forgettable branding",
                    "Poor user experience",
                    "Low conversion rates",
                    "Inconsistent visuals",
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
                  With Professional Design
                </h3>
                <div className="space-y-4">
                  {[
                    "Strong brand recognition",
                    "Seamless user experience",
                    "Higher conversions",
                    "Visual consistency",
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
              <h2 className="text-3xl font-bold mb-4">Design Transformation Case Study</h2>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                How we helped a health brand increase sales by 240%
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-white text-gray-800 rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-10">
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Vitality Health Supplements</h3>
                  <p className="text-gray-600 mb-6">
                    Complete brand overhaul including packaging, website, and marketing materials.
                  </p>
                  <div className="space-y-4 mb-8">
                    {[
                      { metric: "240%", label: "Increase in sales" },
                      { metric: "90%", label: "Higher brand recall" },
                      { metric: "50%", label: "More website traffic" },
                      { metric: "3.2x", label: "ROI on design investment" }
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
                        src="/images/design-case-study.webp" 
                        alt="Design transformation" 
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
                These people wasted money on design - don't make their mistake
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
                Because you probably think design is too expensive
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
                question="Does good design really make that much difference?"
                answer="Only if you care about things like credibility, conversions, and customer trust. Otherwise, stick with your DIY approach."
              />
              <FAQItem 
                question="How long does a design project take?"
                answer="Most projects take 4-8 weeks from concept to completion. Fast food is quicker, but won't give you the same results."
              />
              <FAQItem 
                question="What if I don't like the designs?"
                answer="We include revision rounds to refine the work until you're thrilled. Unlike your nephew who 'knows Photoshop', we actually listen to feedback."
              />
              <FAQItem 
                question="Isn't this too expensive for my small business?"
                answer="Consider that poor design costs more in lost opportunities. Our clients typically see 3-5x ROI on their design investment."
              />
              <FAQItem 
                question="Can't I just use Canva?"
                answer="Sure, just like you could perform your own dental work. Both are possible, but the results (and pain levels) will differ significantly."
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-green-700 to-green-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Still Think Design Doesn't Matter?
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

export default GraphicDesignPage;