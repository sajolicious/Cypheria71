import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/HomeScreen'
import WhatWeDo from './components/WhatWeDo'
import AboutUs from './components/AboutUsScreen'
import OurServices from './components/OurServices'
import ContackUs from './components/ContackUs'

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/contact-us" element={<ContackUs />} />
      </Routes>
    </Router>
  )
}

export default App
