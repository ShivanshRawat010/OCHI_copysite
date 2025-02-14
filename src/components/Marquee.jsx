import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-speed='0.1' className="rounded-t-3xl bg-[#004D43] py-[10vh] ]">
      <div className='text-white border-t-[1px] border-b-[1px] border-white text-[45vh] flex whitespace-nowrap overflow-hidden font-semibold font-founders-grotesk leading-[28vh] pb-[5vh]'>
        <motion.h1 initial={{x:0}} animate={{x: '-100%'}} transition={{ease: 'linear', duration: 10, repeat: Infinity}} className='uppercase pr-10'>We are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x: '-100%'}} transition={{ease: 'linear', duration: 10, repeat: Infinity}} className='uppercase pr-10'>We are ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
