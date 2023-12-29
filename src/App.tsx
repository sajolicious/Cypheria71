// App.tsx (or any other parent component)
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/HomeScreen';
import WhatWeDo from './components/WhatWeDo';
import AboutUs from './components/AboutUsScreen';
import Footer from './components/Footer';

const App: React.FC = () => {
  const backgroundColor = 'red';

  return (
    <div>
      <Navbar backgroundColor={backgroundColor} />
      <Home/>
      <AboutUs/>
      <WhatWeDo/>
   
      <Footer/>
    </div>
  );
};

export default App;
