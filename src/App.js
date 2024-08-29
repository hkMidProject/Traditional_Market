import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Home from '../src/Subpages/Home.js';
import About from '../src/Subpages/About.js';
import Services from '../src/Subpages/Services.js';
import Contact from '../src/Subpages/Contact.js';
import SignIn from '../src/Subpages/SignIn.js';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/SignIn" element={<SignIn />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
