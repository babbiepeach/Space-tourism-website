import React, { useState } from 'react'
import data from '../data/data.json'

const Crew = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const crew = data.crew
  const activeCrew = crew[activeIndex]


  return (
    <div className='flex flex-col gap-8 md:gap-14 px-6 lg:px-27 text-white '>
      <div>
        <p className='font-barlow-condensed uppercase text-xl text-center md:text-left tracking-[0.15em] '><span className='pr-2 font-bold uppercase text-white/25'>02</span>Meet your crew</p>
    </div>
      <div className='text-center flex flex-col lg:flex-row-reverse lg:justify-between md:flex-col-reverse items-center gap-8'>
        <div className='flex justify-center items-center w-82 h-65 border-b md:w-114.25 md:h-full md:border-none '>
          <img className='w-full h-full object-contain' src={activeCrew.images.png} alt={activeCrew.name} />
        </div>
        <div className='flex flex-col md:flex-col-reverse lg:items-start lg:text-left md:gap-10'>
          <nav>
  <ul className="flex justify-center gap-4 pb-8">
    
    <li>
      <button
        onClick={() => setActiveIndex(0)}
        className={`rounded-full transition-all duration-300 ${
          activeIndex === 0 ? "bg-white w-4 h-4" : "bg-white/30 w-3 h-3 hover:bg-white/60"
        }`}
      ></button>
    </li>

    <li>
      <button
        onClick={() => setActiveIndex(1)}
        className={`rounded-full transition-all duration-300 ${
          activeIndex === 1 ? "bg-white w-4 h-4" : "bg-white/30 w-3 h-3 hover:bg-white/60"
        }`}
      ></button>
    </li>

    <li>
      <button
        onClick={() => setActiveIndex(2)}
        className={`rounded-full transition-all duration-300 ${
          activeIndex === 2 ? "bg-white w-4 h-4" : "bg-white/30 w-3 h-3 hover:bg-white/60"
        }`}
      ></button>
    </li>

    <li>
      <button
        onClick={() => setActiveIndex(3)}
        className={`rounded-full transition-all duration-300 ${
          activeIndex === 3 ? "bg-white w-4 h-4" : "bg-white/30 w-3 h-3 hover:bg-white/60"
        }`}
      ></button>
    </li>

  </ul>
</nav>
<div className='w-130'>
  <h1 className='uppercase text-xl md:text-2xl text-white/50 font-bellefair pb-2 '>{activeCrew.role}</h1>
  <h3 className='uppercase text-3xl md:text-[40px] font-bellefair'>{activeCrew.name}</h3>
<p className='font-barlow text-[15px] md:text-lg leading-7 text-[#D0D6F9] text-center lg:text-left mt-4.5 '>{activeCrew.bio}</p>
</div>
        </div>
      </div>
    </div>
  )
}

export default Crew