// App.tsx (or any other parent component)
import React from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Home from './components/Home';
import WhatWeDo from './components/WhatWeDo';
import Footer from './components/Footer';
const App: React.FC = () => {
  const backgroundColor = 'red';

  return (
    <div>
      <Navbar backgroundColor={backgroundColor} />
      <Home/>
      <Slider/>
      <WhatWeDo/>
      <Footer/>
    </div>
  );
};

export default App;
