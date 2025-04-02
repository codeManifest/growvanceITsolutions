import React from 'react';
import { FaChartLine, FaSearch, FaMapMarkerAlt, FaCogs, FaCheck, FaQuoteLeft } from 'react-icons/fa';

const Seo = () => {
  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-20 px-4 md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800/80 mb-4">
            SEO is a Waste of Time… <span className='text-black' >Said No Successful Business Ever!</span> 
            </h1>
            <p className="text-xl text-green-700 mb-8">
            Want to remain undetectable on the internet?  Ideal!  While you relax on Google’s 10th page, let your rivals relish the traffic, sales, and recognition.  Sounds like a solid plan… unless you really want to grow? 
            </p>
            <a href='https://wa.me/+919876543210?text=Hey!%20I’m%20ready%20to%20elevate%20to%20the%20top%20spot!%20Let’s%20do%20this!%20💪' className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300">
            Book a free Consultation
            </a>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/images/SEOhead.webp" 
              alt="SEO Illustration" 
              className="w-full  h-auto"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
          Avoid Hiring Growvance IT Solutions for SEO…  <span className='text-green-500/70' >(Unless You Prefer to Win)</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-6">
            {[
              { icon: <FaCheck className="text-green-600 text-2xl" />, title: "Our SEO takes too long…", desc: "Because #1 rankings aren’t built overnight—they’re built to last." },
              { icon: <FaCheck className="text-green-600 text-2xl" />, title: "We’re expensive…", desc: "Just like your dream customers - totally worth it." },
              { icon: <FaCheck className="text-green-600 text-2xl" />, title: "We make competitors jealous…", desc: "Watch them scramble to copy your success." },
              { icon: <FaCheck className="text-green-600 text-2xl" />, title: "Clients become addicted…", desc: "To traffic surges and ringing cash registers." }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-green-100 hover:shadow-lg transition duration-300">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-green-700 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <a href='tel://7086742160/' className='py-2 px-3 inline-block bg-green-600/90 text-white rounded-md mt-6 hover:bg-green-600 cursor-pointer' >Keep wasting money on ads… or own Google’s first page! 🤙🏻</a >
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-green-50 py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
            Comprehensive SEO Solutions for Your Business
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FaSearch className="text-green-600 text-3xl mb-4" />, title: "On-page SEO", desc: "Keyword optimization, meta tags, content structuring" },
              { icon: <FaChartLine className="text-green-600 text-3xl mb-4" />, title: "Off-page SEO", desc: "Backlink building, guest posting, brand mentions" },
              { icon: <FaMapMarkerAlt className="text-green-600 text-3xl mb-4" />, title: "Local SEO", desc: "Google My Business optimization, local citations" },
              { icon: <FaCogs className="text-green-600 text-3xl mb-4" />, title: "Technical SEO", desc: "Site speed, mobile optimization, schema markup" }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                {service.icon}
                <h3 className="text-xl font-semibold text-green-700 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
            Our Proven SEO Process
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>
            <div className="space-y-12 md:space-y-0">
              {[
                { step: "1", title: "Discovery & Audit", desc: "Analyze your website's SEO health",img:"/images/SeoAudit.webp" },
                { step: "2", title: "Strategy Development", desc: "Custom plan based on your niche",img:"/images/StrategyDevelopment.webp" },
                { step: "3", title: "Implementation", desc: "On-page, off-page & technical optimizations",img:"/images/Implementation.webp" },
                { step: "4", title: "Monitoring & Reporting", desc: "Monthly performance reports",img:"/images/Monitoring.webp" }
              ].map((process, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-8`}>
                  <div className="md:w-1/2 p-6">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
                      <span className="text-green-800 font-bold text-xl">{process.step}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-green-700 mb-2 text-center md:text-left">{process.title}</h3>
                    <p className="text-gray-600 text-center md:text-left">{process.desc}</p>
                  </div>
                  <div className="md:w-1/2 p-6">
                    <div className="bg-gray-100 h-48 rounded-lg">
                      <img src={process.img} alt="image" className='object-cover h-full w-full' />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-green-800 text-white py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { quote: "Growvance's SEO strategies doubled our organic traffic in just 4 months!", author: "John D., E-commerce Business Owner" },
              { quote: "Their transparent reporting and expert approach made all the difference.", author: "Sarah K., SaaS Startup Founder" }
            ].map((testimonial, index) => (
              <div key={index} className="bg-green-700 p-8 rounded-lg">
                <FaQuoteLeft className="text-green-400 text-2xl mb-4" />
                <p className="text-lg italic mb-6">{testimonial.quote}</p>
                <p className="font-semibold">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 md:px-10 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Still Happy Losing to Competitors?
          </h2>
          <p className="text-xl mb-8">
          Every day you wait, your rivals steal more customers. How much longer will you let them outrank you?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href='https://pagespeed.web.dev/' className="bg-white text-green-700 hover:bg-green-300 cursor-pointer font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300">
              Check Your Website Performance
            </a>
            <a href='tel://7086742160' className="bg-transparent border-2 border-white cursor-pointer hover:bg-green-800 font-bold py-3 px-8 rounded-lg transition duration-300">
              Talk to an Expert
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Seo;