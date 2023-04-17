import {NavBar,LandingPage,Market_Info,Contact,Tutorials} from './components';
import { Route, Routes as BaseRoutes } from "react-router-dom";
import { useState} from 'react';
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
        <Route path= "/market-info" element={<Carousel language={language} />} />
        <Route path= "/connect-with-farmers" element={<Contact />} />
        <Route path= "/tutorials" element={<Tutorials />} />


        {/* <Route path="/info-page/:type/:id" element={<InfoPage/>} /> */}

      </BaseRoutes>
    </div>
  );
}

export default App;
