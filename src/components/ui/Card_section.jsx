import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Card from "./Card";

export default function Card_section() {
  const [showAll, setShowAll] = useState(false);
  const [displayedServices, setDisplayedServices] = useState([]);

  // All services
  const our_services = [
    {
      title: "SEO (Search Engine Optimization)",
      desc: "Boost your website’s visibility and rank higher on search engines with our expert SEO strategies.",
      img: "/images/seo.jpg",
      link:'/seo'
    },
    {
      title: "PPC (Pay-Per-Click) Advertising",
      desc: "Get instant traffic and maximize ROI with data-driven Google Ads, Facebook Ads, and more.",
      img: "/images/ppc.jpg",
      link:'/ppc-advertising'
    },
    {
      title: "Social Media Marketing (SMM)",
      desc: "Engage your audience, build brand loyalty, and grow your presence on platforms like Facebook, Instagram, and LinkedIn.",
      img: "/images/socialmedia.jpg",
      link:'/social-media-marketing'
    },
    {
      title: "Content Marketing",
      desc: "Attract and retain customers with high-quality, SEO-friendly blogs, articles, and social media content.",
      img: "/images/content.jpg",
      link:'/content-marketing'
    },
    {
      title: "Email Marketing",
      desc: "Convert leads into loyal customers with personalized email campaigns and automation.",
      img: "/images/email.jpg",
      link:'/email-marketing'
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      desc: "Improve user experience and increase conversions with our data-backed optimization techniques.",
      img: "/images/cro.jpg",
      link:'/seo'
    },
    {
      title: "Content Marketing",
      desc: "Crafting compelling, audience-focused content to boost engagement and conversions.",
      img: "/images/local-seo.jpg",
      link:'/content-writing'
    },
    {
      title: "Graphics Design",
      desc: "Creating visually stunning designs that enhance brand identity and communication.",
      img: "/images/influencer.jpg",
      link:'/graphics-design'
    },
    {
      title: "Affiliate Marketing",
      desc: "Promoting products through partnerships to earn commissions on sales.",
      img: "/images/affiliate.jpg",
      link:'/affiliate-marketing'
    },
  ];

  // Handle showing more services when clicking "View All"
  useEffect(() => {
    setDisplayedServices(showAll ? our_services : our_services.slice(0, 3));
  }, [showAll]);

  return (
    <motion.section
      className="px-4 sm:px-8 md:px-16 lg:px-32"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1
        className="text-1xl sm:text-4xl font-bold text-center pt-10 sm:pt-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        Don’t Settle for Less <span className="text-white bg-green-800 px-3 py-2 rounded-full" >Choose Excellence</span> 
      </motion.h1>

      {/* Card Grid */}
      <div className="pt-8 sm:pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedServices.map((item, index) => (
          <motion.div
            key={index}
            className="h-full flex"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
          >
            <Card title={item.title} desc={item.desc} img={item.img} />
          </motion.div>
        ))}
      </div>

      {/* View All / Hide Button */}
      <motion.div
        className="flex justify-center mt-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-3 bg-white border text-black font-semibold rounded-lg shadow-md hover:bg-white transition duration-300"
        >
          {showAll ? "Hide All" : "View All Services"}
        </button>
      </motion.div>
    </motion.section>
  );
}