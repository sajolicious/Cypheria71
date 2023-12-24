import React from 'react';

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-[#FFF8F1] font-custom'>
      <h6 className='text-8xl text-center mb-10'>WE BUILD FOR <br/> THE WEB </h6>
      <h6 className='text-2xl text-center mb-2'>Web development and startegic technical <br/>
      consultancy for creative agencies and teams
      </h6>
      <button className='bg-[#1C1A1A] hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full mt-4'>Talk to Us</button>
    </div>
  );
};

export default Home;
