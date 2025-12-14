import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-aura-cream">
      {/* Background Parallax Image */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img 
          src="https://images.pexels.com/photos/247204/pexels-photo-247204.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Aura Background" 
          className="w-full h-full object-cover object-[center_20%]"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase mb-4 block text-white/80">
            Alta Costura
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-tight mb-6"
        >
          AURA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-serif text-xl md:text-2xl font-light italic max-w-lg mx-auto text-white/90 mb-10"
        >
          "Donde la tela se encuentra con el alma."
        </motion.p>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
        >
          <a 
            href="#runway" 
            className="inline-block border border-white/50 bg-white/10 backdrop-blur-sm px-8 py-3 font-sans text-sm tracking-widest hover:bg-white hover:text-aura-black transition-all duration-300"
          >
            VER PASARELA
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        style={{ opacity: useTransform(scrollY, [0, 200], [1, 0]) }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest uppercase opacity-70">Scroll</span>
        <div className="w-[1px] h-12 bg-white/50" />
      </motion.div>
    </section>
  );
};

export default Hero;