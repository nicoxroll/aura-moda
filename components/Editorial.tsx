import React from 'react';
import { motion } from 'framer-motion';
import { BRANDS } from '../constants';

const Editorial: React.FC = () => {
  // We duplicate the brands array to create a seamless infinite loop
  const duplicatedBrands = [...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section className="bg-aura-black py-16 md:py-24 overflow-hidden flex flex-col justify-center relative border-t border-white/10">
      
      <div className="container mx-auto px-6 mb-12 text-center">
        <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-white/40 block mb-2">
            As Seen In
        </span>
      </div>

      <div className="relative w-full overflow-hidden mask-fade-sides">
        {/* Shadow Overlay for depth at edges (optional) */}
        <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-aura-black to-transparent z-10" />
        <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-aura-black to-transparent z-10" />

        <motion.div
          className="flex items-center gap-16 md:gap-32 w-max"
          animate={{ x: ["0%", "-33.33%"] }} // Move 1/3 of the width (since we tripled the array)
          transition={{
            ease: "linear",
            duration: 25, // Adjust speed here
            repeat: Infinity,
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <div 
                key={`${brand.id}-${index}`} 
                className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-500 cursor-default group"
            >
              {/* Simulate Logo with Typography */}
              <h3 className={`${brand.font} text-4xl md:text-6xl text-white font-bold tracking-tighter whitespace-nowrap group-hover:text-aura-gold transition-colors`}>
                {brand.name}
              </h3>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Editorial;