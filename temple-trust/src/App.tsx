import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthenticationRoutes from './Routes/AuthenticationRoutes';
import HomePage from './Pages/HomePage';
import AuthenticatedNavbar from './Components/Navbar/AuthenticatedNavbar';
import NonAuthenticatedNavbar from './Components/Navbar/NonAuthenticatedNavbar';
import { Provider } from 'react-redux';
import Store from './Store/Store';
import Footer from './Components/Footer';

function App() {
  const profile = false;

  return (
    <Provider store={Store}>
      <BrowserRouter>
        {
          profile ?
          (
            <div className="container">
              <AuthenticatedNavbar/>
              <HomePage/>
              <Footer/>
            </div>
          ) : (
            <div className="container">
              <NonAuthenticatedNavbar/>
              <AuthenticationRoutes/>
              <Footer/>
            </div>
          )
        }
      </BrowserRouter>
    </Provider>
  );
}

export default App;
