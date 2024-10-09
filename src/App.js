import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Tours from './components/Tours';
import Footer from './components/Footer';

const App = () => {
  console.log('Hello');
  return (
    <>
    <Navbar />
    <Hero />
    <Services />
    <Tours />
    <Footer />
    </>
  );
};

export default App;
