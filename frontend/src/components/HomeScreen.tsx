import React from 'react'
import AboutUsScreen from './AboutUsScreen'
import OurServices from './OurServices'
import ContactUs from './ContackUs'
import { Link } from 'react-router-dom'
const Home: React.FC = () => {
  return (
    <>
      <div className="flex flex-col bg-[#1EE2] h-screen w-full items-center justify-center">
        <div className="text-gray-800 p-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            We Design and Develop <br />
            <span className="text-[#0250F1]">Innovative Products</span> <br />
            for Businesses and Startups
          </h1>
          <div className="text-base md:text-lg lg:text-xl text-center mb-4 font-serif">
            <p>
              At Cypheria71, we specialize in designing and developing innovative products for businesses and startups.
            </p>
            <p>
              As a digital transformation and product development consulting firm, our core expertise lies in marketing,
              design, sales, and software development.
            </p>
          </div>
          <button className="bg-[#0250F1] hover:bg-blue-400 text-white font-bold py-4 px-8 rounded-full mt-4">
            <Link to="./contact-us">start now</Link>
          </button>
        </div>
      </div>
      <AboutUsScreen />
      <OurServices />
      <ContactUs />
    </>
  )
}

export default Home
