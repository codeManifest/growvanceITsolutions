import React from 'react'
import { motion } from "framer-motion";


export function Buttons_bg( {lebel,link}) {
  return (
    <motion.a 
                
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300"
                href={link}
                >
                  {lebel}
                </motion.a>
  )
}
 export function Button_outline(lebel,link) {
  return(
    <motion.a
    href={link}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-white text-green-700 hover:bg-green-50 font-bold py-3 px-8 rounded-lg shadow-lg border-2 border-green-600 transition duration-300"
  >
    {lebel}
  </motion.a>
  )

  
 }
const Buttons={ Buttons_bg,Button_outline }
export default Buttons