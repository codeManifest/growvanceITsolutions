"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function PriceCard() {
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: ""
  });

  const plans = [
    {
      name: "Basic Package",
      price: "₹ 20,000",
      description: "For individuals and small Business",
      features: [
        "8 custom posts per month", 
        "Basic email marketing",
        "SEO for 5 pages",
        "Monthly report and performance review",
        "Basic Support"
      ],
      btnText: "Get Started",
    },
    {
      name: "Standard Package",
      price: "₹ 50,000",
      description: "For medium size agencies and businesses",
      features: [
        "15 posts/month + paid ads",
        "2 campaigns & strategy review",
        "2 blogs/month",
        "SEO for 10 pages",
        "Monthly performance report",
        "Google Ads setup & management"
      ],
      btnText: "Upgrade Now",
      popular: true,
    },
    {
      name: "Advance Package",
      price: "₹1,00,000",
      description: "For large organizations",
      features: [
        "20 posts/month + influencers",
        "Weekly newsletter",
        "4 blogs/month with stories",
        "Advanced audit & optimization",
        "Monthly performance report",
        "UX & mobile optimization"
      ],
      btnText: "Contact Sales",
    },
    {
      name: "Premium Package",
      price: "₹2,00,000",
      description: "Customize your own plan",
      features: [
        "30 posts/month with reels & influencers",
        "Weekly automated newsletter",
        "6 blogs/month on insights & launches",
        "30+ page optimization",
        "Monthly performance report",
        "High-budget Google & FB ads",
        "A/B testing, UX & conversion optimization"
      ],
      btnText: "Contact Sales",
    },
  ];

  const customServices = [
    { 
      name: "Social Media Management", 
      options: [
        { name: "5 Posts/Month", price: 5000 },
        { name: "10 Posts/Month", price: 9000 },
        { name: "20 Posts/Month", price: 15000 }
      ]
    },
    { 
      name: "Content Creation", 
      options: [
        { name: "1 Blog Article", price: 3000 },
        { name: "4 Blog Articles", price: 10000 },
        { name: "1 Video Content", price: 8000 }
      ]
    },
    { 
      name: "Advertising", 
      options: [
        { name: "Google Ads Setup", price: 10000 },
        { name: "Facebook Ads Management", price: 15000 },
        { name: "Full Funnel Campaign", price: 25000 }
      ]
    },
    { 
      name: "SEO Services", 
      options: [
        { name: "5-Page SEO", price: 12000 },
        { name: "Website Audit", price: 8000 },
        { name: "Local SEO", price: 15000 }
      ]
    },
    { 
      name: "Email Marketing", 
      options: [
        { name: "Basic Newsletter", price: 5000 },
        { name: "Automated Campaigns", price: 12000 }
      ]
    }
  ];

  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const sendWhatsAppMessage = (packageName, packagePrice, packageFeatures) => {
    const message = `*Package Inquiry*%0A%0A*Package:* ${packageName}%0A*Price:* ${packagePrice}%0A%0A*Features:*%0A${packageFeatures.map(f => `- ${f}`).join('%0A')}%0A%0A*Interested in this package!*`;
    window.open(`https://wa.me/917002191866?text=${message}`, '_blank');
  };

  const toggleService = (service, option) => {
    const serviceKey = `${service.name} - ${option.name}`;
    if (selectedServices.some(s => s.key === serviceKey)) {
      setSelectedServices(selectedServices.filter(s => s.key !== serviceKey));
    } else {
      setSelectedServices([...selectedServices, {
        key: serviceKey,
        name: service.name,
        option: option.name,
        price: option.price
      }]);
    }
  };

  const calculateTotal = () => {
    return selectedServices.reduce((total, service) => total + service.price, 0);
  };

  const handleSubmit = () => {
    const message = `*Custom Package Inquiry*%0A%0A*Name:* ${customerInfo.name}%0A*Business:* ${customerInfo.business}%0A*Email:* ${customerInfo.email}%0A*Phone:* ${customerInfo.phone}%0A%0A*Selected Services:*%0A${selectedServices.map(s => `- ${s.name} (${s.option}) - ₹${s.price}`).join('%0A')}%0A%0A*Total Estimated Cost:* ₹${calculateTotal()}%0A%0A*Additional Notes:*%0A${customerInfo.message}`;

    window.open(`https://wa.me/917002191866?text=${message}`, '_blank');
    setShowCustomForm(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      viewport={{ once: false, amount:.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center my-12 px-4"
    >
      <h1 className="text-4xl font-bold text-zinc-800 mb-6">Choose Your Plan</h1>
      <p className="text-lg text-zinc-600 mb-8">Find the perfect plan for your business growth</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className={`relative flex flex-col p-6 rounded-xl border ${plan.popular ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-white'} shadow-sm transition-all`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white py-1 px-3 text-xs font-bold rounded-full">
                MOST POPULAR
              </div>
            )}
            
            <h2 className="text-xl font-bold mb-2">{plan.name}</h2>
            <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
            
            <div className="my-4">
              <span className="text-3xl font-extrabold">{plan.price}</span>
              <span className="text-gray-500 text-sm">/month</span>
            </div>
            
            <ul className="text-left space-y-2 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <svg className="w-4 h-4 mt-1 mr-2 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button
              onClick={() => {
                handleConfetti();
                sendWhatsAppMessage(plan.name, plan.price, plan.features);
              }}
              className={`mt-auto py-2 px-4 rounded-lg font-medium transition-colors ${plan.popular ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-white hover:bg-gray-100 border border-gray-300'}`}
            >
              {plan.btnText}
            </button>
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto mt-8">
        <button 
          onClick={() => setShowCustomForm(true)}
          className="py-3 px-6 bg-amber-400 hover:bg-amber-500 text-black font-semibold rounded-lg shadow-md transition-all hover:scale-105"
        >
          Build Your Custom Package +
        </button>
      </div>

      {/* Custom Package Modal */}
      {showCustomForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Build Your Custom Package</h2>
              <button 
                onClick={() => setShowCustomForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Select Services</h3>
                <div className="space-y-6">
                  {customServices.map((service, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden">
                      <div className="bg-gray-50 p-3 border-b">
                        <h4 className="font-medium">{service.name}</h4>
                      </div>
                      <div className="p-3 space-y-2">
                        {service.options.map((option, i) => {
                          const isSelected = selectedServices.some(
                            s => s.key === `${service.name} - ${option.name}`
                          );
                          return (
                            <div
                              key={i}
                              onClick={() => toggleService(service, option)}
                              className={`p-3 rounded cursor-pointer transition-colors ${isSelected ? 'bg-green-50 border border-green-200' : 'hover:bg-gray-50 border border-transparent'}`}
                            >
                              <div className="flex justify-between items-center">
                                <span className="font-medium">{option.name}</span>
                                <span className="text-green-600 font-bold">₹{option.price}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="sticky top-0">
                  <h3 className="text-lg font-semibold mb-4">Your Package</h3>
                  
                  {selectedServices.length > 0 ? (
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                      <div className="space-y-3 mb-4">
                        {selectedServices.map((service, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">{service.name}</p>
                              <p className="text-sm text-gray-600">{service.option}</p>
                            </div>
                            <span className="font-bold">₹{service.price}</span>
                          </div>
                        ))}
                      </div>
                      <div className="border-t pt-3">
                        <div className="flex justify-between font-bold text-lg">
                          <span>Total:</span>
                          <span>₹{calculateTotal()}</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gray-50 rounded-lg p-8 text-center mb-6">
                      <p className="text-gray-500">No services selected yet</p>
                      <p className="text-sm text-gray-400 mt-2">Select services from the left panel</p>
                    </div>
                  )}

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Contact Information</h3>
                    <input
                      type="text"
                      placeholder="Your Name*"
                      className="w-full p-3 border rounded-lg"
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email Address*"
                      className="w-full p-3 border rounded-lg"
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number*"
                      className="w-full p-3 border rounded-lg"
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Business Name"
                      className="w-full p-3 border rounded-lg"
                      value={customerInfo.business}
                      onChange={(e) => setCustomerInfo({...customerInfo, business: e.target.value})}
                    />
                    <textarea
                      placeholder="Any special requirements?"
                      className="w-full p-3 border rounded-lg"
                      rows="3"
                      value={customerInfo.message}
                      onChange={(e) => setCustomerInfo({...customerInfo, message: e.target.value})}
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={selectedServices.length === 0 || !customerInfo.name || !customerInfo.email || !customerInfo.phone}
                    className={`w-full mt-6 py-3 px-4 rounded-lg font-bold text-white transition-colors ${selectedServices.length > 0 ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'}`}
                  >
                    Submit via WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}