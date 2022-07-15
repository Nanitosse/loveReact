import React from 'react';
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import NucampLogo from './app/assets/img/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color='primary' sticky='top' expand='md'>
                <Container>
                    <NavbarBrand href='/'>
                        <img src={NucampLogo} alt='nucamp logo' />
                    </NavbarBrand>
                </Container>
            </Navbar>
      
    </div>
  );
}

export default App;
