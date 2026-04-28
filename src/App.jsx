import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'
import Header from './components/Header'
import SideBar from './components/SideBar'


const AppContent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  // Map routes to your CSS background classes
  const getBackgroundClass = () => {
    switch (location.pathname) {
      case '/': return 'bg-hero'
      case '/destination': return 'bg-destination'
      case '/crew': return 'bg-crew'
      case '/technology': return 'bg-tech'
      default: return 'bg-hero'
    }
  }

  return (
    // This div now controls the background for the whole app
    <div className={`${getBackgroundClass()} bg-cover bg-center min-h-screen overflow-x-hidden transition-all duration-500`}>
      <Header setIsOpen={setIsOpen} />
      <SideBar isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App