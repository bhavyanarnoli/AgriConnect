import React from 'react';
import {HomeScreen,About } from '.';

const LandinPage = () => {
  return (
    <div className="relative z-0 bg-transparent">

      <div className="bg-heo-pattern bg-cover bg-no-repeat bg-center">
      </div>
      <HomeScreen />
      <About />
    </div>

  );
}

export default LandinPage;
