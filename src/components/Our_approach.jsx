import React from 'react'

export default function OurApproach() {
  return (
    <div className='py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
      <div className='text-center mb-12'>
        <h1 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>Our Approach</h1>
        <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
          We combine innovation with expertise to deliver exceptional results.
        </p>
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {[
          {
            title: "Research",
            description: "Thorough analysis to understand your needs and market opportunities.",
            icon: "🔍"
          },
          {
            title: "Strategy",
            description: "Customized plans tailored to your specific goals and objectives.",
            icon: "📊"
          },
          {
            title: "Execution",
            description: "Precision implementation with attention to every detail.",
            icon: "⚡"
          },
          {
            title: "Results",
            description: "Measurable outcomes that drive growth and success.",
            icon: "🎯"
          }
        ].map((step, index) => (
          <div 
            key={index}
            className='bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300 border border-gray-100'
          >
            <div className='text-3xl mb-4'>{step.icon}</div>
            <h3 className='text-xl font-semibold text-gray-900 mb-2'>{step.title}</h3>
            <p className='text-gray-600'>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}