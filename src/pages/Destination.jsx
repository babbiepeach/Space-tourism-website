import React, { useState } from 'react'
import data from '../data/data.json'


const Destination = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const destinations = data.destinations
  const activePlanet = destinations[activeIndex]


  return (
    <div className='flex flex-col gap-8 md:gap-14 px-6 lg:px-27 pb-14 text-white '>
      <div>
        <p className='font-barlow-condensed uppercase text-xl text-center md:text-left tracking-[0.15em] '><span className='pr-2 font-bold uppercase text-white/25'>01</span>PICK YOUR DESTINATION</p>
      </div>
      <div className='flex flex-col lg:flex-row lg:justify-between gap-6.5 md:gap-13.25 items-center text-center '>
          <div className=' flex justify-center items-center w-45 h-45 md:w-75 md:h-75 lg:w-md lg:h-112 animate-float-rotate'>
          <img src={activePlanet.images.png} alt={activePlanet.name} />
        </div>
        <div>
          <nav>
  <ul className="flex font-barlow-condensed text-[15px] md:text-lg tracking-widest mb-5 md:mb-10 justify-center lg:justify-start gap-6">
    
    <li>
      <button
        onClick={() => setActiveIndex(0)}
        className={`cursor-pointer ${
          activeIndex === 0 ? "border-b-2 border-white" : ""
        }`}
      >MOON</button>
    </li>

    <li>
      <button
        onClick={() => setActiveIndex(1)}
        className={`cursor-pointer ${
          activeIndex === 1 ? "border-b-2 border-white" : ""
        }`}
      > MARS</button>
    </li>

    <li>
      <button
        onClick={() => setActiveIndex(2)}
        className={`cursor-pointer ${
          activeIndex === 2 ? "border-b-2 border-white" : ""
        }`}
      >EUROPA</button>
    </li>

    <li>
      <button
        onClick={() => setActiveIndex(3)}
        className={`cursor-pointer ${
          activeIndex === 3 ? "border-b-2 border-white" : ""
        }`}
      >TITAN</button>
    </li>

  </ul>
</nav>
<div className='mb-8 md:mb-10 md:w-125 lg:text-left '>
  <h1 className='uppercase text-6xl md:text-[80px] font-bellefair pb-2 '>{activePlanet.name}</h1>
<p className='text-[15px] md:text-lg md:leading-8 text-[#D0D6F9] font-barlow leading-6.5 '>{activePlanet.description}</p>
</div>
      <div className='border border-[#383B4B] mb-8 '></div> 
      <div className='flex flex-col md:flex-row justify-center lg:justify-start lg:text-left uppercase gap-8'>
        <div>
          <h4 className='font-barlow-condensed text-lg text-[#D0D6F9] tracking-widest '>avg. distance</h4>
         <p className='font-bellefair text-3xl md:text-4xl mt-1 '>{activePlanet.distance}</p> 
        </div>
        <div>
          <h4 className='font-barlow-condensed text-lg text-[#D0D6F9] tracking-widest'>est. travel time</h4>
          <p className='font-bellefair text-3xl md:text-4xl mt-1 '>{activePlanet.travel}</p>
        </div>
        </div>
        </div> 
      </div>
    </div>
  )
}

export default Destination