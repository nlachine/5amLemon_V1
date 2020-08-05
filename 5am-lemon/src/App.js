import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Search from './components/search/Search';
import Explore from './components/explore/Explore';
import Adventure from './components/adventure/Adventure';
import Gallery from './components/gallery/Gallery';
import Contact from './components/contact/Contact';


function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Banner />
        <Search />
        <Explore />
        <Adventure />
        <Gallery />
        <Contact />
      </Fragment>
    </Router>
  );
}

export default App;
