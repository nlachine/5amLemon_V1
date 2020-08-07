import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/landingpage/navbar/Navbar';
import Banner from './components/landingpage/banner/Banner';
import Search from './components/landingpage/search/Search';
import Contact from './components/landingpage/contact/Contact';
import Occasion from './components/landingpage/occasion/Occasion';
import Footer from './components/landingpage/footer/Footer';


function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Banner />
        <Occasion/>
        <Search />
        <Contact />
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
