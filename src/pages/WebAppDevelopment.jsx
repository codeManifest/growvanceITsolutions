import React, { useState, useEffect } from 'react';
import { IoLogoWechat } from "react-icons/io5";
import { 
  FaCode, 
  FaMobileAlt, 
  FaServer, 
  FaRobot, 
  FaChartLine, 
  FaCheck, 
  FaQuoteLeft, 
  FaRegClock, 
  FaShieldAlt, 
  FaExpand,
  FaUsers,
  FaPenAlt,
  FaSearch
} from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CTA_Model from '../Models/CTA_Model';

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

const WebAppDevelopment = () => {
  const [activeTab, setActiveTab] = useState('web');
  const [activeProcessStep, setActiveProcessStep] = useState(0);

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

  const services = {
    web: [
      { 
        icon: <FaCode className="text-green-500 text-3xl" />, 
        title: "Custom Websites", 
        desc: "Tailored solutions with modern frameworks",
        features: [
          "100% mobile-responsive designs",
          "SEO-optimized architecture",
          "Lightning-fast page speeds",
          "Custom CMS integration",
          "E-commerce ready",
          "Enterprise-grade security"
        ]
      },
      { 
        icon: <FaServer className="text-green-500 text-3xl" />, 
        title: "eCommerce Stores", 
        desc: "High-converting online shops",
        features: [
          "Shopify/WordPress/WooCommerce",
          "Secure payment gateways",
          "Inventory management",
          "Product customization",
          "Multi-channel integration",
          "Analytics dashboard"
        ]
      },
      { 
        icon: <FaExpand className="text-green-500 text-3xl" />, 
        title: "Web Applications", 
        desc: "Scalable SaaS & enterprise solutions",
        features: [
          "React/Next.js frontends",
          "Node.js/Python backends",
          "User authentication",
          "Database integration",
          "API development",
          "Cloud deployment"
        ]
      }
    ],
    app: [
      { 
        icon: <FaMobileAlt className="text-green-400 text-3xl" />, 
        title: "iOS Apps", 
        desc: "Native Swift development",
        features: [
          "SwiftUI/UIKit",
          "Apple Pay integration",
          "ARKit for augmented reality",
          "App Store optimization",
          "Offline functionality",
          "Push notifications"
        ]
      },
      { 
        icon: <FaMobileAlt className="text-green-400 text-3xl" />, 
        title: "Android Apps", 
        desc: "Kotlin & Java solutions",
        features: [
          "Material Design UI",
          "Google Pay integration",
          "Location services",
          "Play Store optimization",
          "Background services",
          "Firebase integration"
        ]
      },
      { 
        icon: <FaMobileAlt className="text-green-300 text-3xl" />, 
        title: "Cross-Platform", 
        desc: "Flutter & React Native",
        features: [
          "Single codebase for iOS/Android",
          "80% faster development",
          "Native performance",
          "Hot reload for quick iterations",
          "Widget-based UI",
          "Plugin ecosystem"
        ]
      }
    ],
    tech: [
      { 
        icon: <FaRobot className="text-green-500 text-3xl" />, 
        title: "AI Integration", 
        desc: "Smart chatbots & automation",
        features: [
          "ChatGPT API integration",
          "Computer vision",
          "Predictive analytics",
          "Natural language processing",
          "Recommendation engines",
          "Sentiment analysis"
        ]
      },
      { 
        icon: <FaShieldAlt className="text-green-500 text-3xl" />, 
        title: "Blockchain", 
        desc: "Web3 & smart contracts",
        features: [
          "Ethereum/Solana development",
          "NFT marketplace",
          "Tokenization",
          "Wallet integration",
          "DeFi applications",
          "Smart contract auditing"
        ]
      },
      { 
        icon: <FaChartLine className="text-green-500 text-3xl" />, 
        title: "Data Analytics", 
        desc: "Actionable insights",
        features: [
          "Big data processing",
          "Custom dashboards",
          "ETL pipelines",
          "Machine learning models",
          "Real-time analytics",
          "Data visualization"
        ]
      }
    ]
  };

  const processSteps = [
    { 
      title: "Discovery", 
      desc: "We analyze your business requirements and technical needs",
      activities: [
        "Requirement gathering workshops",
        "Competitor analysis",
        "Technical feasibility study",
        "Project roadmap creation",
        "Budget estimation"
      ]
    },
    { 
      title: "Design", 
      desc: "Crafting intuitive user experiences and technical architecture",
      activities: [
        "Wireframing & prototyping",
        "UI/UX design iterations",
        "Brand identity integration",
        "Database schema design",
        "API specifications"
      ]
    },
    { 
      title: "Development", 
      desc: "Agile implementation with continuous delivery",
      activities: [
        "2-week sprint cycles",
        "Daily standup meetings",
        "Code reviews & pair programming",
        "Continuous integration",
        "Mid-sprint client demos"
      ]
    },
    { 
      title: "Testing", 
      desc: "Ensuring quality through rigorous validation",
      activities: [
        "Unit & integration testing",
        "User acceptance testing",
        "Performance optimization",
        "Security vulnerability scans",
        "Cross-browser/device testing"
      ]
    },
    { 
      title: "Launch", 
      desc: "Seamless deployment and ongoing support",
      activities: [
        "Staging environment setup",
        "Production deployment",
        "User training sessions",
        "Post-launch monitoring",
        "Maintenance & updates"
      ]
    }
  ];

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className={`bg-gradient-to-r ${greenPalette.gradientFrom} ${greenPalette.gradientTo} text-white py-24 px-6`}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Don't Transform Your Business With Powerful Apps <span className="text-green-300">(Stay Stuck in 2010)</span>
            </h1>
            <p className="text-xl mb-8 text-green-100">
              Who needs modern web and mobile apps anyway? Keep struggling with clunky processes, lost customers, and outdated tech - unless you actually want to streamline operations, boost revenue, and leave competitors wondering what happened.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href='https://wa.me/+919876543210?text=whats%20the%20cost%20of%20web%20and%20app%20Development?'
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
            { number: <Counter target={150} />, label: "Projects Completed", icon: <FaCode className="text-green-600 text-2xl mx-auto mb-2" /> },
            { number: <Counter target={95} />, label: "Client Satisfaction", icon: <FaCheck className="text-green-500 text-2xl mx-auto mb-2" /> },
            { number: <Counter target={50} />, label: "Team Members", icon: <FaUsers className="text-green-500 text-2xl mx-auto mb-2" /> },
            { number: <Counter target={10} />, label: "Years Experience", icon: <FaRegClock className="text-green-500 text-2xl mx-auto mb-2" /> }
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

      {/* Services Section */}
      <section className="py-20 px-6 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-green-800 mb-4">Our Development Services</h2>
              <p className="text-xl text-green-700 max-w-3xl mx-auto">
                Comprehensive solutions tailored to your business needs
              </p>
            </div>
          </AnimatedSection>

          {/* Service Tabs */}
          <AnimatedSection delay={0.2}>
            <div className="flex justify-center mb-12">
              <div className="inline-flex rounded-lg bg-white p-1 shadow-sm">
                {['web', 'app', 'tech'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-md font-medium transition-all ${activeTab === tab ? 'bg-green-600 text-white' : 'text-gray-700 hover:bg-green-100'}`}
                  >
                    {tab === 'web' && 'Web Development'}
                    {tab === 'app' && 'Mobile Apps'}
                    {tab === 'tech' && 'Emerging Tech'}
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
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <FaCheck className="text-green-500 mr-2" />
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

      {/* Process Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-green-800 mb-4">Our Proven Development Process</h2>
              <p className="text-xl text-green-700 max-w-3xl mx-auto">
                A structured approach that ensures quality and efficiency
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="space-y-4">
                  {processSteps.map((step, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveProcessStep(index)}
                      className={`w-full text-left p-4 rounded-lg transition ${activeProcessStep === index ? 'bg-green-600 text-white shadow-lg' : 'bg-green-100 hover:bg-green-200'}`}
                    >
                      <h3 className="font-bold">{step.title}</h3>
                    </button>
                  ))}
                </div>
              </div>
              <div className="md:w-2/3 bg-green-50 p-8 rounded-xl shadow-sm border border-green-200">
                <h3 className="text-2xl font-bold text-green-800 mb-4">
                  {processSteps[activeProcessStep].title} Phase
                </h3>
                <p className="text-gray-600 mb-6">
                  {processSteps[activeProcessStep].desc}
                </p>
                <ul className="space-y-3">
                  {processSteps[activeProcessStep].activities.map((activity, i) => (
                    <li key={i} className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Case Study Section */}
      <section className={`py-20 px-6 bg-gradient-to-r ${greenPalette.gradientFrom} ${greenPalette.gradientTo} text-white`}>
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                See how we've helped businesses like yours achieve remarkable results
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-white text-gray-800 rounded-xl shadow-2xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-10">
                  <h3 className="text-2xl font-bold text-green-800 mb-4">E-Commerce Mobile App</h3>
                  <p className="text-gray-600 mb-6">
                    Developed a cross-platform shopping app with AR features that increased customer engagement by 300%.
                  </p>
                  <div className="space-y-4 mb-8">
                    {[
                      { metric: "300%", label: "Increase in Engagement" },
                      { metric: "4.8", label: "App Store Rating" },
                      { metric: "2.5x", label: "Higher Conversion Rate" }
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
                      <span className="text-green-600">App Screenshot</span>
                    </div>
                    <p className="mt-4 text-green-600">Fashion Retail App - Built with Flutter</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-6 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-green-800 mb-4">Our Technology Stack</h2>
              <p className="text-xl text-green-700 max-w-3xl mx-auto">
                We use cutting-edge technologies to build robust, scalable solutions
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "React", category: "Frontend", color: "text-green-600" },
                { name: "Node.js", category: "Backend", color: "text-green-600" },
                { name: "Flutter", category: "Mobile", color: "text-green-600" },
                { name: "Python", category: "Backend", color: "text-green-600" },
                { name: "Angular", category: "Frontend", color: "text-green-600" },
                { name: "Firebase", category: "Database", color: "text-green-600" },
                { name: "AWS", category: "Cloud", color: "text-green-600" },
                { name: "TensorFlow", category: "AI", color: "text-green-600" }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 text-center border border-green-200"
                >
                  <div className={`text-4xl font-bold mb-2 ${tech.color}`}>
                    {tech.name[0]}
                  </div>
                  <h3 className="text-lg font-bold text-green-800">{tech.name}</h3>
                  <p className="text-gray-500">{tech.category}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTA_Model 
        title1={"Not Ready to Build Your Digital Solution?"} 
        title2={" (Good, Stay Behind)"} 
        desc={"If you enjoy watching competitors launch better apps faster, keep postponing your project. But if you secretly want to modernize your business and own your market, maybe we should talk."} 
      />
    </div>
  );
};

export default WebAppDevelopment;