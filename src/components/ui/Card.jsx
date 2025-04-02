import { motion } from 'framer-motion';

export default function Card({ title, desc, img }) {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col border border-gray-100 hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
    >
      {/* Image with hover zoom effect */}
      {img && (
        <div className="overflow-hidden h-48">
          <motion.img 
            src={img} 
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          
        </div>
        
        <p className="text-gray-600 mb-6 flex-grow">{desc}</p>

        {/* Learn More Button */}
        <motion.button 
          className="w-full px-4 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
}