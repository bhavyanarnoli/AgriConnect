import React from 'react';
import { HomeScreen, About, FarmingForecast, Tutorials } from './index';
import Carousel from './carousel';

const LandingPage = ({ language }) => {
  // console.log(`Current language: ${language}. I am in landingPage.jsx`);

  return (
    <div className="relative z-0 bg-transparent">

      <div className="bg-heo-pattern bg-cover bg-no-repeat bg-center"></div>
      <HomeScreen language={language} />
      <About language={language} />
      <Carousel language = {language}/>
      <FarmingForecast language={language} />
      <Tutorials/>
    </div>
    
  );
};

export default LandingPage;
