import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiX, FiArrowRight } from 'react-icons/fi';

const ServiceForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);

  const services = [
    { id: 'seo', name: 'SEO Services' },
    { id: 'ppc', name: 'PPC Advertising' },
    { id: 'web', name: 'Web Development' },
    { id: 'social', name: 'Social Media Marketing' },
    { id: 'content', name: 'Content Marketing' }
  ];

  const budgets = [
    { id: '1k', range: '₹1,000 - ₹5,000' },
    { id: '5k', range: '₹5,000 - ₹10,000' },
    { id: '10k', range: '₹10,000 - ₹20,000' },
    { id: '20k+', range: '₹20,000+' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  if (submitStatus === 'success') {
    return (
      <SuccessMessage onClose={() => setSubmitStatus(null)} />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-extrabold text-green-800 sm:text-4xl"
          >
            Apply for Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-lg text-green-600"
          >
            Complete this form and our team will contact you within 24 hours
          </motion.p>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Progress Bar */}
          <div className="bg-green-100 h-2">
            <div 
              className="bg-green-600 h-full transition-all duration-500"
              style={{ width: `${(currentStep / 3) * 100}%` }}
            ></div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-8">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-medium text-green-700 mb-1">Full Name*</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-green-700 mb-1">Email*</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-green-700 mb-1">Phone Number*</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="w-full flex justify-center items-center bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200"
                    >
                      Continue <FiArrowRight className="ml-2" />
                    </button>
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-medium text-green-700 mb-3">Service Needed*</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {services.map(service => (
                        <div key={service.id} className="flex items-center">
                          <input
                            id={service.id}
                            name="service"
                            type="radio"
                            value={service.id}
                            checked={formData.service === service.id}
                            onChange={handleChange}
                            required
                            className="h-4 w-4 text-green-600 focus:ring-green-500 border-green-300"
                          />
                          <label htmlFor={service.id} className="ml-3 block text-sm text-green-800">
                            {service.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-green-700 mb-3">Estimated Budget*</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {budgets.map(budget => (
                        <div key={budget.id} className="flex items-center">
                          <input
                            id={budget.id}
                            name="budget"
                            type="radio"
                            value={budget.id}
                            checked={formData.budget === budget.id}
                            onChange={handleChange}
                            required
                            className="h-4 w-4 text-green-600 focus:ring-green-500 border-green-300"
                          />
                          <label htmlFor={budget.id} className="ml-3 block text-sm text-green-800">
                            {budget.range}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-3 border border-green-300 text-green-700 rounded-lg hover:bg-green-50 transition duration-200"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex justify-center items-center bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200"
                    >
                      Continue <FiArrowRight className="ml-2" />
                    </button>
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-medium text-green-700 mb-1">Additional Details</label>
                    <textarea
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Tell us more about your project..."
                    ></textarea>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      required
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-green-300 rounded"
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-green-700">
                      I agree to the <a href="#" className="text-green-600 hover:underline">terms and conditions</a>
                    </label>
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-3 border border-green-300 text-green-700 rounded-lg hover:bg-green-50 transition duration-200"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex justify-center items-center bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200 disabled:opacity-70"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </div>
  );
};

const SuccessMessage = ({ onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full text-center relative"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      >
        <FiX className="h-6 w-6" />
      </button>
      
      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
        <FiCheckCircle className="h-6 w-6 text-green-600" />
      </div>
      
      <h3 className="text-2xl font-bold text-green-800 mb-2">Application Submitted!</h3>
      <p className="text-green-600 mb-6">
        Thank you for your interest. Our team will contact you within 24 hours to discuss your project.
      </p>
      
      <button
        onClick={onClose}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
      >
        Close
      </button>
    </motion.div>
  </div>
);

export default ServiceForm;