// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Products from './Products';
import Service from './Service';
import Contact from './Contact';
import AccountDetails from './AccountDetails';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/service">Service</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/accountdetails">Account Details</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/accountdetails" element={<AccountDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
