import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Process from '../components/Process';
import Contact from '../components/Contact';
import Runway from '../components/Runway';
import Timeline from '../components/Timeline';
import Campaign from '../components/Campaign';
import Editorial from '../components/Editorial';
import Collection from '../components/Collection';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Runway />
      <Campaign />
      <About />
      <Editorial />
      <Collection />
      <Process />
      <Timeline />
      <Contact />
    </>
  );
};

export default Home;
