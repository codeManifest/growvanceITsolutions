import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowTrendUp } from "react-icons/fa6";


export default function Para_card({ title, desc, img, main_bg, title_color, desc_color, btn_color }) {

  
  return (
    <div className="w-full p-6   sm:p-10">
      <div className={`${main_bg} rounded-md flex flex-wrap lg:flex-nowrap justify-between items-center gap-6 px-6 py-8 w-full`}>
        
        {/* Left Column - Text Section */}
        <div className="w-full lg:w-1/2 px-4 text-center lg:text-left">
          <h2 className={`text-[28px] sm:text-[34px] font-bold antialiased ${title_color}`}>
          Don't work with us unless you're ready to <span className=' text-green-600/70 font-extrabold' >3X </span> <FaArrowTrendUp className=' text-green-600/70 text-7xl -mt-3 inline-block ' /> your business.
          </h2>
          <p className={`font-medium text-[14px] sm:text-[16px] text-gray-500 ${desc_color}`}>
          We only partner with businesses committed to explosive growth—if you're satisfied with incremental progress, we're not the right fit. But if you're ready to transform your results, let's begin.
          </p>
        </div>

        {/* Middle Column - Floating Image Section */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <motion.img
            src={img || "/images/fly.webp"} 
            alt="Business Growth"
            className="h-auto max-h-60 md:max-h-70"
            initial={{ y: 0 }} 
            animate={{ y: [0, -10, 0] }}  
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} 
          />
        </div>

        {/* Right Column - Button Section */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
          <a href='https://wa.me/+919876543210?text=I%20am%20a%20intrested%20' className={`${btn_color} flex items-center gap-4 px-5 py-3 rounded-full  text-white`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
            </svg>
            Challenge Accepted
          </a>
        </div>

      </div>
    </div>
  )
}