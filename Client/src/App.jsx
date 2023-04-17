// import React from 'react';
// import {NavBar,HomeScreen,About } from './components';

// const App = () => {
//   return (
//     <div className="relative z-0 bg-gradient-to-r from-green-800 to-teal-700 bg-transparent">

//       <div className="bg-heo-pattern bg-cover bg-gradient-to-r from-green-800 to-teal-700 bg-no-repeat bg-center">
//         <NavBar />
//       </div>
//       <HomeScreen />
//       <About />
//     </div>

//   );
// }

// export default App;
import {NavBar,LandingPage,Market_Info,Contact,Tutorials} from './components';
import { Route, Routes as BaseRoutes } from "react-router-dom";
import { useState, useEffect } from 'react';
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
        <Route path= "/market-info" element={<Market_Info />} />
        <Route path= "/connect-with-farmers" element={<Contact />} />
        <Route path= "/tutorials" element={<Tutorials />} />


        {/* <Route path="/info-page/:type/:id" element={<InfoPage/>} /> */}

      </BaseRoutes>
    </div>
  );
}

export default App;
