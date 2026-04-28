import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '/assets/shared/logo.svg'
import hamburger from '/assets/shared/icon-hamburger.svg'

const Header = ({ setIsOpen }) => {
  return (
    <div>
    <header className='flex items-center justify-between px-8 md:pr-0 lg:py-6 py-10 md:pt-0 relative'>
        <img src={logo} alt="logo" />

          {/* Divider line (desktop only) */}
  <div className="hidden lg:block absolute left-24 z-20 top-1/2 w-[30%] h-px bg-white/20"></div>

  {/* Tablet + Desktop Nav */}
  <nav className='hidden md:flex ml-auto bg-white/5 backdrop-blur-lg md:px-10 lg:px-20 py-10'>
    
    <ul className='flex items-center gap-8 md:gap-10 lg:gap-12 text-white uppercase tracking-[2.36px] font-barlow-condensed text-sm'>
      
      
      <li className='relative group'>
  <NavLink to="/" end className='flex gap-2'>
    {({ isActive }) => (
      <>
        <span className='font-bold'>00</span> HOME
        <span className={`absolute left-0 -bottom-9 h-0.5 bg-white transition-all duration-300
        ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
      </>
    )}
  </NavLink>
      </li>

      <li className='relative group'>
  <NavLink to="/destination" end className='flex gap-2'>
    {({ isActive }) => (
      <>
        <span className='font-bold'>01</span> DESTINATION
        <span className={`absolute left-0 -bottom-9 h-0.5 bg-white transition-all duration-300
        ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
      </>
    )}
  </NavLink>
      </li>

      <li className='relative group'>
  <NavLink to="/crew" end className='flex gap-2'>
    {({ isActive }) => (
      <>
        <span className='font-bold'>02</span> CREW
        <span className={`absolute left-0 -bottom-9 h-0.5 bg-white transition-all duration-300
        ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
      </>
    )}
  </NavLink>
      </li>

      <li className='relative group'>
  <NavLink to="/technology" end className='flex gap-2'>
    {({ isActive }) => (
      <>
        <span className='font-bold'>03</span> TECHNOLOGY
        <span className={`absolute left-0 -bottom-9 h-0.5 bg-white transition-all duration-300
        ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
      </>
    )}
  </NavLink>
      </li>

    </ul>
  </nav>

        <button onClick={() => setIsOpen(true)}>
          <img className='w-8 md:hidden' src={hamburger} alt="menu" />
        </button>
      </header>
    </div>
  )
}

export default Header