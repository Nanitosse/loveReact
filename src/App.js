import React from 'react';
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
//import { Container, Navbar, NavbarBrand } from 'reactstrap';
import NucampLogo from './app/assets/img/logo.png';
//import NucampLogo from './app/assets//logo.png';
import './App.css';
import CampsitesList from './features/campsites/CampsitesList';
//import {CAMPSITES} from './app/shared /CAMPSITES';
//import {CAMPSITES} from './features/campsites/CAMPSITES'
import Header from "./components/Header"
import Footer from './components/Footer';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <CampsitesDirectoryPage />
      <Footer/>
    </div>
  );
}

export default App;
