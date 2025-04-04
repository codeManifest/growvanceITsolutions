import React from "react";
import { motion } from "framer-motion";

const SuccessStorySection = () => {
  // Success story data object
  const storyData = {
    title: "Client Success Stories",
    description: "See how we've helped businesses like yours achieve remarkable growth",
    testimonial: {
      quote: "We were stuck at ₹50K/month. Growvance helped us hit ₹5L in just 4 months!",
      highlight: "₹5L in just 4 months!",
      client: {
        initials: "AB",
        name: "Amit Bansal",
        position: "E-commerce Business Owner"
      }
    },
    cta: "Want a similar success story? Let's talk →"
  };

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Title and Description */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-bold text-green-800 mb-4"
        >
          {storyData.title}
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={fadeUp}
          className="text-lg text-green-700 max-w-3xl mx-auto"
        >
          {storyData.description}
        </motion.p>
      </div>

      {/* Success Story Card */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.4 }}
        variants={fadeUp}
        className="max-w-4xl mx-auto bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 shadow-lg border border-green-200 relative"
      >
        {/* Quote Section */}
        <div className="relative mb-6">
          <div className="absolute -top-4 -left-4 text-5xl text-green-200 opacity-80">
            "
          </div>
          <p className="text-lg md:text-xl text-gray-800 pl-6">
            {storyData.testimonial.quote.split(storyData.testimonial.highlight)[0]}
            <span className="font-bold text-green-700">
              {storyData.testimonial.highlight}
            </span>
          </p>
        </div>

        {/* Client Info */}
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold mr-4">
            {storyData.testimonial.client.initials}
          </div>
          <div>
            <h4 className="font-medium text-green-800">{storyData.testimonial.client.name}</h4>
            <p className="text-sm text-green-600">{storyData.testimonial.client.position}</p>
          </div>
        </div>

        {/* CTA Button */}
        <motion.a
          href="https://wa.me/+919876543210?text=can%20you%20help%20me%20to%20grow%20my%20business"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full md:w-auto md:px-12 leading-2 py-3 px-6 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md transition-all duration-300"
        >
          {storyData.cta}
        </motion.a>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-green-200 rounded-full opacity-20 -mr-10 -mb-10" />
        <div className="absolute top-0 left-0 w-16 h-16 bg-green-300 rounded-full opacity-10 -ml-8 -mt-8" />
      </motion.div>

      {/* Background decorative elements */}
      <div className="hidden lg:block absolute left-0 top-1/4 w-32 h-32 bg-green-100 rounded-full opacity-20 -ml-16" />
      <div className="hidden lg:block absolute right-0 bottom-1/4 w-40 h-40 bg-green-200 rounded-full opacity-10 -mr-20" />
    </section>
  );
};

export default React.memo(SuccessStorySection);