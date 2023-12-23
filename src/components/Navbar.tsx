// src/Navbar.tsx
import React, { useState } from 'react';

const Navbar: React.FC = () => {



  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold">Logo</div>
        <div className="lg:hidden">
          
        </div>
        <div className="lg-flex: ,">
          <a href="#" className="text-white p-2">Home</a>
          <a href="#" className="text-white p-2">About</a>
          <a href="#" className="text-white p-2">Services</a>
          <a href="#" className="text-white p-2">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
