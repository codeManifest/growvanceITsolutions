import React from 'react';

const StatsSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video/vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Side - Text Content */}
          <div className="lg:w-1/2 text-white mb-10 lg:mb-0 lg:pr-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Data-Driven Growth Solutions
            </h2>
            <p className="text-lg mb-8 opacity-90">
              We leverage advanced analytics and market intelligence to deliver 
              measurable results for your business. Our approach combines 
              technology with strategic insights.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
              Explore Our Solutions
            </button>
          </div>

          {/* Right Side - Bar Chart */}
          <div className="lg:w-1/2 bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-xl">
            <h3 className="text-white text-2xl font-semibold mb-6">Our Performance Metrics</h3>
            <div className="space-y-6">
              {/* Bar 1 */}
              <div>
                <div className="flex justify-between text-white mb-1">
                  <span>Client Growth</span>
                  <span>78%</span>
                </div>
                <div className="w-full bg-gray-300 bg-opacity-30 rounded-full h-3">
                  <div 
                    className="bg-blue-500 h-3 rounded-full" 
                    style={{ width: '78%' }}
                  ></div>
                </div>
              </div>
              
              {/* Bar 2 */}
              <div>
                <div className="flex justify-between text-white mb-1">
                  <span>ROI Improvement</span>
                  <span>92%</span>
                </div>
                <div className="w-full bg-gray-300 bg-opacity-30 rounded-full h-3">
                  <div 
                    className="bg-green-500 h-3 rounded-full" 
                    style={{ width: '92%' }}
                  ></div>
                </div>
              </div>
              
              {/* Bar 3 */}
              <div>
                <div className="flex justify-between text-white mb-1">
                  <span>Customer Satisfaction</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-gray-300 bg-opacity-30 rounded-full h-3">
                  <div 
                    className="bg-purple-500 h-3 rounded-full" 
                    style={{ width: '85%' }}
                  ></div>
                </div>
              </div>
              
              {/* Bar 4 */}
              <div>
                <div className="flex justify-between text-white mb-1">
                  <span>Market Penetration</span>
                  <span>67%</span>
                </div>
                <div className="w-full bg-gray-300 bg-opacity-30 rounded-full h-3">
                  <div 
                    className="bg-yellow-500 h-3 rounded-full" 
                    style={{ width: '67%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;