import React from 'react';
import { HomeScreen, About, FarmingForecast } from './index';

const LandingPage = ({ language }) => {
  // console.log(`Current language: ${language}. I am in landingPage.jsx`);

  return (
    <div className="relative z-0 bg-transparent">

      <div className="bg-heo-pattern bg-cover bg-no-repeat bg-center"></div>
      <HomeScreen language={language} />
      <About language={language} />
      <FarmingForecast language={language} />
    </div>
    
  );
};

export default LandingPage;
