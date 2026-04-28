import { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
        <div className='flex flex-col lg:flex-row lg:justify-center gap-20 md:gap-40 items-center pb-20 text-white'>
          <div className='flex flex-col px-6 py-12 gap-6 text-center lg:text-left md:max-w-140 '>
            <p className='font-barlow-condensed text-lg md:text-2xl uppercase font-extralight tracking-[2.36px] '>so, you want to travel to</p>
            <h1 className='font-bellefair text-[80px] md:text-[150px] leading-none'>SPACE</h1>
            <p className='text-lg text-[#D0D6F9] font-barlow font-extralight leading-8'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
          </div>
          <div className='flex items-center justify-center'>
            <div className='relative group'>
              <div className="absolute inset-0 rounded-full bg-white/10 scale-0 group-hover:scale-[1.6] opacity-100 transition-all duration-200 ease-out"></div>
              <Link to="/destination"  >
              <button className='relative z-10 w-45 h-45 md:w-65 md:h-65 rounded-full bg-white text-black uppercase tracking-[2px] text-xl md:text-3xl font-bellefair flex items-center justify-center'>explore</button>
              </Link>
            </div>
          </div>
        </div>
  )
}

export default Home