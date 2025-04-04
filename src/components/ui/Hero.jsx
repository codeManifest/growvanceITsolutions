import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone } from "react-icons/fa";
import AnimatedComponent from "../lottie/AnimatedComponent";
import ConsultationForm from "../ConsultationForm";

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  // Toggle scroll lock when modal opens/closes
  useEffect(() => {
    if (showModal) {
      document.body.classList.add('overflow-hidden', 'fixed', 'w-full');
    } else {
      document.body.classList.remove('overflow-hidden', 'fixed', 'w-full');
    }

    return () => {
      document.body.classList.remove('overflow-hidden', 'fixed', 'w-full');
    };
  }, [showModal]);

  return (
    <div className="bg-black flex items-center justify-center">
      <div className="relative isolate overflow-hidden bg-[#113a31] px-6 shadow-2xl w-full min-h-[100vh] lg:min-h-[85vh] flex flex-col lg:flex-row items-center justify-center lg:px-24">
        
        {/* Background Shape */}
        <svg
          viewBox="0 0 1024 1024"
          aria-hidden="true"
          className="absolute  top-1/2 left-1/2 -z-99 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        >
          <circle
            r={512}
            cx={512}
            cy={512}
            className="-mt-10 overflow-hidden"
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="1"
          />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#00A655" />
              <stop offset={1} stopColor="#1f6e5e" />
            </radialGradient>
          </defs>
        </svg>

        {/* Text Section */}
        <div className="max-w-2xl text-center lg:text-left lg:w-[45%] flex flex-col justify-center items-center lg:items-start h-full">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold tracking-tight text-white">
            Your Competitor is Scaling Faster{" "}
            <span className="text-primary-mid">What's Holding You Back?</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 sm:text-xl">
            Every day, businesses are growing, increasing sales, and dominating markets. If you're still figuring things out, you're already behind. But there's a fix.
          </p>
          <div className="mt-8 relative z-30 flex flex-col sm:flex-row items-center gap-4 sm:gap-x-6">
            <button
              onClick={() => setShowModal(true)}
              className="rounded-md cursor-pointer  bg-white px-5 py-3 text-lg font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus:outline-none"
            >
              Let's Build Your Growth Plan
            </button>
            <a href="tel://+919876543210" className="text-lg font-semibold text-white flex items-center gap-2">
              <FaPhone className="inline cursor-pointer " /> Free Strategy Call 
            </a>
          </div>
        </div>

        {/* Lottie Animation */}
        <div className="relative w-full lg:w-[50%] h-[50vh] lg:h-[500px] flex items-center justify-center">
          <AnimatedComponent className="w-full h-full object-contain scale-100 sm:scale-110 lg:scale-125" />
        </div>
      </div>

      {/* Consultation Form Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative bg-white rounded-lg max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="p-6 md:p-8">
                <ConsultationForm 
                  onSuccess={() => {
                    setTimeout(() => setShowModal(false), 2000);
                  }} 
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}