import React, { useState } from 'react'
import data from '../data/data.json'


const Technology = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const technology = data.technology
  const activeTechnology = technology[activeIndex]


  return (
    <div className='flex flex-col gap-8 md:gap-14 pb-14 text-white '>
      <div className='pl-6'>
        <p className='font-barlow-condensed uppercase text-xl text-center md:text-left tracking-[0.15em]'><span className='pr-2 font-bold text-white/25'>03</span>space launch 101</p>
    </div>
    
      <div className='lg:flex lg:flex-row-reverse'>

        <div className='flex w-full h-45 md:h-78 '>
          <img className='w-full h-full object-contain md:object-none ' src={activeTechnology.images.landscape} alt={activeTechnology.name} />
        </div>

        <div className='flex flex-col lg:flex-row px-6 text-center items-center'>
          <nav>
  <ul className="flex lg:flex-col justify-center gap-4 mt-8 md:mt-14">
    
    <li>
      <button
        onClick={() => setActiveIndex(0)}
        className={`w-12 h-12 md:w-15 md:h-15 rounded-full transition-all duration-300 ${
          activeIndex === 0 ? "bg-white text-black" : "bg-transparent border hover:bg-white/60"
        }`}
      >1</button>
    </li>

    <li>
      <button
        onClick={() => setActiveIndex(1)}
        className={`w-12 h-12 md:w-15 md:h-15 rounded-full transition-all duration-300 ${
          activeIndex === 1 ? "bg-white text-black" : "bg-transparent border hover:bg-white/60"
        }`}
      >2</button>
    </li>

    <li>
      <button
        onClick={() => setActiveIndex(2)}
        className={`w-12 h-12 md:w-15 md:h-15 rounded-full transition-all duration-300 ${
          activeIndex === 2 ? "bg-white text-black" : "bg-transparent border hover:bg-white/60"
        }`}
      >3</button>
    </li>

  </ul>
         </nav>

         <div className='mt-6 md:mt-11 md:w-130'>
      <h1 className='uppercase text-[14px] md:text-lg text-[#D0D6F9] font-bellefair pb-2.5'>the terminology...</h1>
      <h3 className='uppercase text-3xl md:text-4xl font-bellefair'>{activeTechnology.name}</h3>
      <p className='text-[15px] text-[#D0D6F9] font-barlow leading-6.5 md:leading-7.5 md:text-[18px] mt-4'>{activeTechnology.description}</p>
         </div>
        </div>
      </div>
    </div>
  )

}

export default Technology