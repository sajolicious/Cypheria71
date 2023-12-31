import React from 'react'
import { Link } from 'react-router-dom'
import cyperia71 from '../assets/cyperia71.png'

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#F4F4F4] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="./">
          <img src={cyperia71} alt="cyperiaLogo" className="w-[124px] h-[32px]" />
        </Link>
        <div className="lg:hidden"></div>
        <div className="lg:flex">
          <Link to="/" className="text-black p-2">
            Home
          </Link>
          <Link to="/about-us" className="text-black p-2">
            About
          </Link>
          <Link to="/our-services" className="text-black p-2">
            Services
          </Link>
          <Link to="/contact-us" className="text-black p-2">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
