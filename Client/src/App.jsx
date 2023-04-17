import { NavBar, LandingPage, Contact, Tutorials } from './components';
import { Route, Routes as BaseRoutes } from "react-router-dom";
import { useState } from 'react';
import Carousel from "../src/components/carousel";
function App() {

  const [language, setLanguage] = useState('English');

  const handleLanguageChange = () => {
    setLanguage(language === 'English' ? 'अंग्रेज़ी' : 'English');
    // console.log(`Current language: ${language}. I am in app.jsx`);
  };

  return (
    <div className='text-primary-content bg-gradient-to-r from-[#256A25] to-[#4F902C]' >
      <NavBar language={language} onLanguageChange={handleLanguageChange} />
      <BaseRoutes>

        <Route path="/" element={<LandingPage language={language} />} />
        <Route path="/market-info" element={<Carousel language={language} />} />
        <Route path="/connect-with-farmers" element={<Contact language={language} />} />
        <Route path="/tutorials" element={
          <div className="relative z-0 bg-transparent">
            <div className="bg-heo-pattern bg-cover bg-no-repeat bg-center"></div>
            <Tutorials language={language}/>
          </div>
        } />


        {/* <Route path="/info-page/:type/:id" element={<InfoPage/>} /> */}

      </BaseRoutes>
    </div>
  );
}

export default App;
