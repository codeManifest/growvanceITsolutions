import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ConsultationForm from '../components/ConsultationForm';
import AnimatedSection from '../components/AnimatedSection/AnimatedSection';

export default function CTA_Model({title1,title2,title3,desc,}) {
  const [showModal, setShowModal] = useState(false);

 const [showBox,setShowBox]=useState(false)

  return (
    <>
      <section className="py-20 px-4 md:px-10 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
               {title1} <span className="text-green-200">{title2} </span> {title3} 
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <p className="text-xl mb-8">
              {desc}
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4}>
            
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
              href='tel://+919876543210'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-700 hover:bg-green-50 font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300"
              >
                Get Started Today
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white hover:bg-green-800 font-bold py-3 px-8 rounded-lg transition duration-300"
                onClick={() => setShowModal(true)}
              >
                Book a Free Consultation
              </motion.button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Consultation Form Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
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
    </>
  );
}