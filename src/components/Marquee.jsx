import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div  data-scroll data-scroll-selection data-scroll-speed= ".2" className='w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
      <div className="text border-t-2 border-b-2 border-zinc-300 flex   overflow-hidden whitespace-nowrap">
        < motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear" ,repeat: Infinity , duration:15}} className='text-[20vw] leading-none pt-1 mb-[7vw] font-semibold pr-20'>We are ochi</motion.h1>
        <motion.h1  initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear" ,repeat: Infinity , duration:15}} className='text-[20vw] leading-none pt-1 mb-[7vw] font-semibold pr-20'>We are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}}  transition={{ease: "linear" ,repeat: Infinity , duration:15}} className='text-[20vw] leading-none pt-1 mb-[7vw] font-semibold pr-20'>We are ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
