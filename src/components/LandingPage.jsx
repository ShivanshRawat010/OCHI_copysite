import { motion } from 'framer-motion';
import React from 'react';
import { GoArrowUpRight } from "react-icons/go";

function LandingPage() {
  return (
    <div data-scroll data-scroll-speed='-0.1'  className='w-full h-screen bg-zinc-900 overflow-hidden '>
      <div className='textStructure mt-[12vw] px-10 text-white'>
        {["WE CREATE", "EYE OPENING", "PRESENTATIONS"].map((item,index)=>(
          <div className='masker'>
            <div className='flex items-center'>
              {index ===1 && (
                <motion.div initial={{width: 0}} animate={{width: '8.5vw'}} transition={{ease: [0.65, 0, 0.35, 1],duration: 1}} className='h-[5.8vw] w-[8.5vw] bg-green-500 mr-[1vw] rounded-md mt-[1vw]'>
                  
                </motion.div>)}
              <h1 className='uppercase text-[9vw] font-medium font-founders-grotesk leading-[6.8vw]' 
                key={index}>{item}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className='border-t-[1px] mt-[20vh] border-zinc-600 flex px-12 py-2 justify-between items-center'>
        {["For public and private companies", "From the first pitch to IPO"].map((item, index)=>(
          <p key={index} className='text-white font-neue-montreal text-sm'>{item}</p>
        ))}

            <div className='start flex items-center gap-x-2'>
              <div className='px-[1vw] py-[.7vw] border-[1px] border-zinc-500 rounded-full font-light text-sm text-white uppercase'>
                Start The Project
              </div>
              <div className='border-[1px] border-zinc-500 rounded-full w-[3vw] h-[3vw] flex items-center justify-center text-white'>
                <GoArrowUpRight className='h-[2vw] w-[2vw]'/>
              </div>
            </div>
      </div>
    </div>
  )
}

export default LandingPage