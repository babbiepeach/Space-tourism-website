import React from 'react'
import closeIcon from '/assets/shared/icon-close.svg'
import { Link } from 'react-router-dom'

const SideBar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-[70%] max-w-100 z-9999 backdrop-blur-xl bg-white/10 text-white
      transform transition-transform duration-300
      ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      {/* Close Button */}
      <div className="flex items-center justify-end p-8">
        <button onClick={onClose}>
          <img src={closeIcon} alt="close" className="w-8" />
        </button>
      </div>

      {/* Links */}
<ul className="mt-10 space-y-8 px-6 font-barlow-condensed text-2xl font-light tracking-[2.36px]">
  <li>
    <Link to="/" onClick={onClose} className="flex gap-4 items-center">
      <span className="font-bold">00</span> HOME
    </Link>
  </li>

  <li>
    <Link to="/destination" onClick={onClose} className="flex gap-4 items-center">
      <span className="font-bold">01</span> DESTINATION
    </Link>
  </li>

  <li>
    <Link to="/crew" onClick={onClose} className="flex gap-4 items-center">
      <span className="font-bold">02</span> CREW
    </Link>
  </li>

  <li>
    <Link to="/technology" onClick={onClose} className="flex gap-4 items-center">
      <span className="font-bold">03</span> TECHNOLOGY
    </Link>
  </li>
</ul>
    </div>
  )
}


export default SideBar