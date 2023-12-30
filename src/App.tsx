// App.tsx (or any other parent component)
import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/HomeScreen'
import WhatWeDo from './components/WhatWeDo'
import AboutUs from './components/AboutUsScreen'
import Footer from './components/Footer'
import OurServices from './components/OurServices'
import ContackUs from './components/ContackUs'
const App: React.FC = () => {
 
  return (
    <div>
      <Navbar />
      <Home />
      <AboutUs />

      <WhatWeDo />
      <OurServices />
      <ContackUs />
      <Footer />
    </div>
  )
}

export default App
