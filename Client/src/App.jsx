import React from 'react';
// import { Route, Routes as BaseRoutes } from 'react-router-dom';
// import { About, Contact, Hero, Navbar, Tech, Works, LeftCol, RightCol } from './components';
import {NavBar,About } from './components';

const App = () => {
  return (
    <div className="relative z-0 bg-gradient-to-r from-green-800 to-teal-700 bg-transparent">

      <div className="bg-heo-pattern bg-cover bg-gradient-to-r from-green-800 to-teal-700 bg-no-repeat bg-center">
        <NavBar />
      </div>
      <About />
    </div>

  );
}

export default App;
