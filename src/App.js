import React from 'react';
<<<<<<< Updated upstream
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Home from '../src/Subpages/Home.js';
import About from '../src/Subpages/About.js';
import Services from '../src/Subpages/Services.js';
import Contact from '../src/Subpages/Contact.js';
import SignIn from '../src/Subpages/SignIn.js';
=======
import Header from './components/Header';
import Footer from './components/Footer';
import Map from './components/Map';
import RegionSelector from './components/MainContent';
import { AppContainer, ContentContainer, MapWrapper, RightContainer, MarketListContainer } from './styles';
import MarketList from './components/MarketList';
>>>>>>> Stashed changes

const App = () => {
  return (
<<<<<<< Updated upstream
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
=======
    <AppContainer>
      <Header />
      <ContentContainer>
        <MapWrapper>
          <Map />
        </MapWrapper>
        <RightContainer>
          {/* <div id="region-section"> */}
            <RegionSelector />
          {/* </div> */}
          <MarketListContainer>
            <MarketList />
          </MarketListContainer>
        </RightContainer>
      </ContentContainer>
      <Footer />
    </AppContainer>
>>>>>>> Stashed changes
  );
};

export default App;