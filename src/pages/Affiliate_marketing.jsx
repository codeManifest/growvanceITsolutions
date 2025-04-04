import React, { useState, useEffect } from 'react';
import { 
  FaLink, 
  FaChartLine, 
  FaUsers, 
  FaWallet, 
  FaCheck, 
  FaQuoteLeft,
  FaChevronDown,
  FaChevronUp,
  FaRegClock,
  FaShieldAlt,
  FaStar,
  FaUserTie,
  FaRocket,
  FaPercentage,
  FaNetworkWired,
  FaHandshake
} from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CTA_Model from '../Models/CTA_Model';

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
const Affiliate_marketing = () => {
  const [activeTab, setActiveTab] = useState('management');
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const services = {
    management: [
      { 
        icon: <FaNetworkWired className="text-green-500 text-3xl" />, 
        title: "Program Management", 
        desc: "End-to-end affiliate program setup and optimization",
        features: [
          "Program strategy development",
          "Affiliate recruitment",
          "Relationship management",
          "Performance monitoring"
        ]
      },
      { 
        icon: <FaChartLine className="text-green-500 text-3xl" />, 
        title: "Performance Analytics", 
        desc: "Data-driven insights to maximize your ROI",
        features: [
          "Custom dashboards",
          "Fraud detection",
          "ROI optimization",
          "Conversion tracking"
        ]
      },
      { 
        icon: <FaHandshake className="text-green-500 text-3xl" />, 
        title: "Partnership Development", 
        desc: "Strategic relationships with top affiliates",
        features: [
          "Influencer partnerships",
          "Content creator outreach",
          "Negotiation support",
          "Contract management"
        ]
      }
    ],
    growth: [
      { 
        icon: <FaRocket className="text-green-500 text-3xl" />, 
        title: "Program Launch", 
        desc: "Complete setup for new affiliate programs",
        features: [
          "Platform selection",
          "Commission structure",
          "Terms & conditions",
          "Onboarding materials"
        ]
      },
      { 
        icon: <FaUsers className="text-green-500 text-3xl" />, 
        title: "Affiliate Recruitment", 
        desc: "Targeted outreach to quality publishers",
        features: [
          "Database of 50K+ affiliates",
          "Vetting process",
          "Personalized outreach",
          "Incentive programs"
        ]
      },
      { 
        icon: <FaPercentage className="text-green-500 text-3xl" />, 
        title: "Commission Optimization", 
        desc: "Strategic pricing for maximum performance",
        features: [
          "Competitive analysis",
          "Tiered commissions",
          "Performance bonuses",
          "Seasonal promotions"
        ]
      }
    ]
  };

  const testimonials = [
    {
      name: "Jessica Miller",
      role: "E-commerce Director, StyleHub",
      content: "Our affiliate revenue grew by 450% in the first year working with Growvance. Their strategic approach to partner recruitment and commission structures transformed our program.",
      rating: 5
    },
    {
      name: "David Chen",
      role: "CEO, TechGadgets",
      content: "The team's expertise in affiliate fraud prevention saved us over $120,000 in fraudulent commissions last year while maintaining strong relationships with legitimate partners.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Marketing VP, HomeEssentials",
      content: "From program setup to ongoing optimization, Growvance has been an invaluable partner. We've seen a consistent 25% month-over-month growth in affiliate-generated sales.",
      rating: 4
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹1200",
      period: "/month",
      description: "For new affiliate programs",
      features: [
        "Basic program setup",
        "Up to 50 affiliates",
        "Monthly reporting",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Growth",
      price: "₹2,700",
      period: "/month",
      description: "Our most popular package",
      features: [
        "Full program management",
        "Up to 200 affiliates",
        "Bi-weekly optimization",
        "Affiliate recruitment",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For high-volume programs",
      features: [
        "Dedicated account manager",
        "Unlimited affiliates",
        "Custom tech solutions",
        "Weekly strategy calls",
        "24/7 support"
      ],
      popular: false
    }
  ];

  const results = [
    { metric: "450%", label: "Highest Client Growth" },
    { metric: "92%", label: "Client Retention Rate" },
    { metric: "3.8x", label: "Average ROI" },
    { metric: "50K+", label: "Affiliate Network" }
  ];

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white py-24 px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
    <AnimatedSection delay={0.2} className="md:w-1/2 flex flex-col justify-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
        <span className="text-green-300">Affiliate Marketing: </span> A Waste of Time? Only If You’re Doing It Wrong.
      </h1>
      <p className="text-xl mb-8 text-green-100">
      Most businesses fail at affiliate marketing because they lack strategy. Learn how to turn it into a revenue machine.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <motion.a
          href='https://wa.me/+919876543210?text=can%20you%20help%20me%20to%20grow%20my%20Affiliate%20Marketing%20business'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-green-700 hover:bg-green-50 font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300"
        >
          Unlock the Strategy Now
        </motion.a>
        
      </div>
    </AnimatedSection>
    <AnimatedSection delay={0.4} className="md:w-1/2 flex justify-center">
      <img 
        src="/images/affiliateM.webp" 
        alt="Affiliate Marketing" 
        className="w-full h-auto max-w-none"
      />
    </AnimatedSection>
  </div>
</section>


      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">
          {results.map((result, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <div className="p-6 bg-green-50 rounded-xl shadow-sm hover:shadow-md transition duration-300">
                <div className="text-4xl font-bold text-green-700 mb-2">
                  {result.metric}
                </div>
                <p className="text-gray-600">{result.label}</p>
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
              TRUSTED BY LEADING BRANDS IN:
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {['E-commerce', 'SaaS', 'Finance', 'Travel', 'Education'].map((industry, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center"
                >
                  <div className="text-green-700 font-bold text-center">{industry}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-green-800 mb-4">Our Affiliate Marketing Services</h2>
              <p className="text-xl text-green-700 max-w-3xl mx-auto">
                Comprehensive solutions to launch, grow, and optimize your affiliate program
              </p>
            </div>
          </AnimatedSection>

          {/* Service Tabs */}
          <AnimatedSection delay={0.2}>
            <div className="flex justify-center mb-12">
              <div className="inline-flex rounded-lg bg-white p-1 shadow-sm border border-green-200">
                {['management', 'growth'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-md font-medium transition-all ${activeTab === tab ? 'bg-green-600 text-white' : 'text-gray-700 hover:bg-green-100'}`}
                  >
                    {tab === 'management' && 'Program Management'}
                    {tab === 'growth' && 'Growth Services'}
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
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
              <h2 className="text-3xl font-bold text-green-800 mb-4">Our 4-Step Affiliate Success Process</h2>
              <p className="text-xl text-green-700 max-w-3xl mx-auto">
                A proven methodology that delivers consistent growth
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { 
                  step: "1", 
                  title: "Strategy", 
                  icon: <FaChartLine className="text-green-600 text-2xl" />,
                  desc: "Custom program design tailored to your goals"
                },
                { 
                  step: "2", 
                  title: "Launch", 
                  icon: <FaRocket className="text-green-600 text-2xl" />,
                  desc: "Platform setup and initial recruitment"
                },
                { 
                  step: "3", 
                  title: "Optimize", 
                  icon: <FaPercentage className="text-green-600 text-2xl" />,
                  desc: "Continuous testing and improvement"
                },
                { 
                  step: "4", 
                  title: "Scale", 
                  icon: <FaNetworkWired className="text-green-600 text-2xl" />,
                  desc: "Strategic expansion of your partner network"
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
              <h2 className="text-3xl font-bold mb-4">Affiliate Marketing Success Story</h2>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                How we helped an e-commerce brand achieve 450% revenue growth
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-white text-gray-800 rounded-xl shadow-2xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-10">
                  <h3 className="text-2xl font-bold text-green-800 mb-4">StyleHub E-commerce</h3>
                  <p className="text-gray-600 mb-6">
                    Implemented a complete affiliate marketing strategy including program setup, partner recruitment, and performance optimization.
                  </p>
                  <div className="space-y-4 mb-8">
                    {[
                      { metric: "450%", label: "Revenue Growth in 12 Months" },
                      { metric: "1,200+", label: "Active Affiliates" },
                      { metric: "28%", label: "Of Total Revenue From Affiliates" },
                      { metric: "5.2x", label: "ROI" }
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
                  <div className="text-center">
                    <div className="bg-green-200 h-64 w-full rounded-lg flex items-center justify-center">
                      <span className="text-green-600">Revenue Growth Chart</span>
                    </div>
                    <p className="mt-4 text-green-600">12-Month Performance</p>
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

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-green-50">
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
                    className={`w-full py-3 px-6 rounded-lg font-bold ${plan.popular ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'} text-white transition duration-300`}
                  >
                    Get Started
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
                Everything you need to know about our affiliate marketing services
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-4">
              <FAQItem 
                question="How long does it take to see results from affiliate marketing?"
                answer="Most clients see initial results within 1-3 months, with significant growth typically occurring in months 4-12 as the affiliate network expands and optimizations take effect."
              />
              <FAQItem 
                question="Which affiliate platforms do you work with?"
                answer="We're experts in all major platforms including ShareASale, CJ Affiliate, Rakuten, Impact, and custom solutions. We'll recommend the best platform for your specific needs."
              />
              <FAQItem 
                question="How do you recruit quality affiliates?"
                answer="We use our proprietary database of 50,000+ vetted affiliates combined with targeted outreach strategies to attract partners who are the best fit for your brand."
              />
              <FAQItem 
                question="What's your approach to commission structures?"
                answer="We develop customized commission strategies based on your margins, competition, and goals. This includes testing different models (percentage, flat rate, tiered) to maximize performance."
              />
              <FAQItem 
                question="Do you help prevent affiliate fraud?"
                answer="Yes, we implement multiple layers of fraud detection including IP monitoring, cookie analysis, and pattern recognition to protect your program's integrity."
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA Section */}
      
      <CTA_Model title1={"Think Your Affiliate Program Is Good Enough?"} title2={"Think Again."} desc={"Most programs fail because they lack strategy. If you’re not seeing real growth, it’s time to fix what’s broken—before your competitors leave you behind."} />
    </div>
  );
};

export default Affiliate_marketing;