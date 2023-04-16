import React from 'react';
import {HomeScreen,About,FarmingForecast } from './index';

const LandinPage = () => {
  return (
    <div className="relative z-0 bg-transparent">

      <div className="bg-heo-pattern bg-cover bg-no-repeat bg-center">
      </div>
      <HomeScreen />
      <About />
      <FarmingForecast />
    </div>

  );
}

export default LandinPage;
