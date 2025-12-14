import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Collection from './components/Collection';
import Process from './components/Process';
import Contact from './components/Contact';
import Runway from './components/Runway';
import Timeline from './components/Timeline';
import Campaign from './components/Campaign';
import Editorial from './components/Editorial';

function App() {
  return (
    <div className="bg-aura-cream min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Runway />
        <Campaign />
        <About />
        <Editorial />
        <Collection />
        <Process />
        <Timeline />
        <Contact />
      </main>
    </div>
  );
}

export default App;