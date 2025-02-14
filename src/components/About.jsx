import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-speed="-0.5" className='w-full bg-[#CDEA68] p-[1px] font-neue-montreal rounded-3xl'>
      <h1 className=' text-[6vh] leading-[6vh] mb-[8vh] mt-[10vh] ml-[4vw] mr-[20vw]'>
        Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
      </h1>

      <div className='border-t-[1px] border-zinc-500 mb-10 py-[1.5vh] text-[6vh] px-[4vw] flex justify-between'>
            <div>
                <h1 className=''>Our approach:</h1>
                <button className='bg-zinc-900 rounded-full flex items-center justify-center py-[2vh] px-[1.5vw] gap-x-[2.5vw]'>
                    <h3 className='text-[30%] text-white uppercase'>Read more</h3>
                    <div className='w-2 h-2 rounded-full bg-white'></div>
                </button>
            </div>
            <div className='w-[45vw] h-[53vh] rounded-xl flex justify-center items-center font-serif text-zinc-600 overflow-hidden'>
              <img className='w-full object-cover rounded-xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
            </div>
        </div>
    </div>
    
  )
}

export default About
