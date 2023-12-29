// Navbar.tsx
import React from 'react';
import cyperia71 from '../assets/cyperia71.png';

interface NavbarProps {
  backgroundColor: string;
}

const Navbar: React.FC<NavbarProps> = ({ backgroundColor }) => {
  return (
    <nav className="bg-[#F4F4F4] p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <img src={cyperia71} alt='cyperiaLogo' className='w-[124px] h-[32px]'/>
        <div className="lg:hidden"></div>
        <div className="lg:flex">
          <a href="#" className="text-black p-2">
            Home
          </a>
          <a href="#" className="text-black p-2">
            About
          </a>
          <a href="#" className="text-black p-2">
            Services
          </a>
          <a href="#" className="text-black p-2">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
