// App.tsx (or any other parent component)
import React from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Home from './components/Home';
const App: React.FC = () => {
  const backgroundColor = 'red';

  return (
    <div>
      <Navbar backgroundColor={backgroundColor} />
      <Home/>
      <Slider/>
    </div>
  );
};

export default App;
