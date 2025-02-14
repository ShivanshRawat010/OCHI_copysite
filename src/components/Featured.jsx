import { easeIn, easeInOut, motion } from 'framer-motion';
import React, { useState } from 'react'
import { GoDotFill } from "react-icons/go";

function Featured() {

  const [isHovering1, setHover1] = useState(false);
  const [isHovering2, setHover2] = useState(false);

  return (
    <div data-scroll data-scroll-speed='-.4' className='p-[1px] bg-zinc-400 rounded-t-3xl'>
      <div className='pt-[12vh] px-[4vw] pb-[6vh] border-b-[1px] border-zinc-500 mb-10'>
        <h1 className='text-white font-neue-montreal text-5xl'>Featured projects</h1>
      </div>
      <div className='mb-20 px-[3vw] text-white font-neue-montreal flex gap-x-[1.5vw]'>
        <div className='w-1/2 relative'>
          <h1 className='absolute flex text-[9vw] left-full top-1/2 -translate-y-1/2 -translate-x-1/2 z-[9] text-[#c6ea47] font-bold font-founders-grotesk overflow-hidden'>
            {"FYDE".split('').map((item, index) => (
              <motion.span initial={{y:'100%'}} animate={isHovering1 ? {y: '0%'} : {y:'100%'}} transition={{ease:easeIn ,delay: index*0.04}}  className='inline-block' >{item}</motion.span>
            ))}
          </h1>
          <GoDotFill className='inline mr-[.4vw]' /><h3 className='text-[13px] inline'>FYDE</h3>
          <div onMouseEnter={() => setHover1(true)} onMouseLeave={() => setHover1(false)} className='card-container bg-zinc-500 w-[full] h-[62vh] rounded-xl overflow-hidden mt-[2vh]'>
            <div className='card w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png")] bg-cover'>

            </div>
          </div>
          <div className='buttons mt-3'>
            {["Audit", "Copywriting", "Sales Deck", "Slides Design"].map((items, index) => (
              <button className='px-[1vw] py-[.7vh] border-[1px] border-zinc-500 rounded-full font-light text-sm text-white uppercase mr-2' key={index}>
                {items}
              </button>
            ))}
          </div>
        </div>

        <div className='w-1/2 relative'>
          <h1 className='absolute text-[9vw] right-full top-1/2 -translate-y-1/2 translate-x-1/2 z-[9] text-[#c6ea47] font-bold font-founders-grotesk flex overflow-hidden'>
          {"VISE".split('').map((item, index) => (
              <motion.span initial={{y:'100%'}} animate={isHovering2 ? {y: '0%'} : {y:'100%'}} transition={{ease:easeIn ,delay: index*0.02}}  className='inline-block' >{item}</motion.span>
            ))}
          </h1>
          <GoDotFill className='inline mr-[.4vw]' /><h3 className='text-[13px] inline'>VISE</h3>
          <div onMouseEnter={() => setHover2(true)} onMouseLeave={() => setHover2(false)} className='card-container bg-zinc-500 w-[full] h-[62vh] rounded-xl overflow-hidden mt-[2vh]'>
            <div className='card w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg")] bg-cover'>

            </div>
          </div>
          <div className='buttons mt-3'>
            {["Agency", "Company Presentation"].map((items, index) => (
              <button className='px-[1vw] py-[.7vh] border-[1px] border-zinc-500 rounded-full font-light text-sm text-white uppercase mr-2' key={index}>
                {items}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
