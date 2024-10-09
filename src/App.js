import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Tours from './components/Tours';
import Footer from './components/Footer';
import About from './components/About';

const App = () => {
  console.log('Hello');
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
};

export default App;
