import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { COLLECTION } from '../constants';

const Collection: React.FC = () => {
  return (
    <section id="collection" className="py-24 bg-stone-100 min-h-screen flex flex-col">
      <div className="container mx-auto px-6 md:px-12 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-stone-300 pb-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <span className="font-sans text-xs tracking-[0.2em] text-stone-500 uppercase">Selección Exclusiva</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 text-aura-black">Colección Etérea</h2>
          </motion.div>
          
          <Link to="/collection" className="hidden md:inline-block font-sans text-sm uppercase tracking-widest hover:text-stone-600 transition-colors pb-2 border-b border-transparent hover:border-stone-600">
            Ver completa
          </Link>
        </div>
      </div>

      <div className="flex-grow relative">
        <FullView />
      </div>
    </section>
  );
};

// --- Sub-components for Views ---

const FullView = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="w-full h-[70vh] flex flex-col md:flex-row overflow-hidden rounded-lg shadow-2xl"
  >
    {COLLECTION.slice(0, 4).map((item) => (
      <motion.div
        key={item.id}
        layout
        className="relative flex-1 h-full min-h-[200px] group transition-[flex] duration-700 ease-in-out hover:flex-[3] cursor-pointer border-r border-white/20 last:border-r-0"
      >
        <img 
          src={item.imageUrl} 
          alt={item.title} 
          className="absolute inset-0 w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-aura-black/40 group-hover:bg-aura-black/10 transition-colors duration-500" />
        
        {/* Vertical Text (Default) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
            <h3 className="font-serif text-2xl md:text-4xl text-white opacity-80 rotate-0 md:-rotate-90 whitespace-nowrap tracking-widest">
                {item.title}
            </h3>
        </div>

        {/* Expanded Info (Hover) */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-10 group-hover:translate-y-0">
          <span className="inline-block px-3 py-1 border border-white/50 text-white text-[10px] uppercase tracking-[0.2em] mb-4">
            {item.category}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-2">{item.title}</h2>
          <p className="font-sans text-white/80 text-sm font-light max-w-md">
            Diseño exclusivo confeccionado a medida. Disponible en nuestro atelier.
          </p>
        </div>
      </motion.div>
    ))}
  </motion.div>
);

export default Collection;