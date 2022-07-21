import React from 'react';
import NucampLogo from './app/assets/img/logo.png';
import './App.css';
import CampsitesList from './features/campsites/CampsitesList';

import Header from "./components/Header"
import Footer from './components/Footer';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import {Routes, Route } from "react-router-dom";
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route  path='/'  element={<HomePage/>}/>
        <Route path='contact' element={<ContactPage/>}/>
        <Route path='directory' element={<CampsitesDirectoryPage/>}/>
      </Routes>
    
      <Footer/>
    </div>
  );
}

export default App;
