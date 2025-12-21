import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { COLLECTION } from '../constants';

const CollectionPage: React.FC = () => {
  const navigate = useNavigate();

  const handleItemClick = (id: number) => {
    navigate(`/collection/${id}`);
  };

  return (
    <div className="bg-stone-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={COLLECTION[0].imageUrl} 
            alt="Collection Hero" 
            className="w-full h-full object-cover filter brightness-75"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6 bg-black/20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-sm tracking-[0.3em] uppercase mb-4"
          >
            Nueva Temporada
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-serif text-6xl md:text-8xl mb-6"
          >
            Colección Etérea
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="font-sans text-lg font-light max-w-xl mx-auto opacity-90"
          >
            Donde la elegancia se encuentra con la atemporalidad. Una exploración de formas, texturas y emociones.
          </motion.p>
        </div>
      </section>

      {/* Gallery Section (FullView style) */}
      <section className="py-24 container mx-auto px-6 md:px-12">
        <div className="mb-12 text-center">
            <span className="font-sans text-xs tracking-[0.2em] text-stone-500 uppercase">Galería</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 text-aura-black">Explora los Detalles</h2>
        </div>
        
        <div className="flex flex-col rounded-lg shadow-2xl overflow-hidden">
            {[COLLECTION.slice(0, 4), COLLECTION.slice(4)].map((rowItems, rowIndex) => (
            <div key={rowIndex} className="w-full h-[50vh] flex flex-col md:flex-row overflow-hidden border-b border-white/20 last:border-b-0">
                {rowItems.map((item) => (
                <motion.div
                    key={item.id}
                    layout
                    onClick={() => handleItemClick(item.id)}
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
                    <p className="font-sans text-white/80 text-sm font-light max-w-md mb-4">
                        Click para ver en detalle
                    </p>
                    </div>
                </motion.div>
                ))}
            </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default CollectionPage;
