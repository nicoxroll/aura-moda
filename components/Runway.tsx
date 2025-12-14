import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'framer-motion';
import { RUNWAY_ITEMS } from '../constants';
import { X } from 'lucide-react';

const Runway: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Add physics to the scroll for fluidity using useSpring
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 1
  });

  // Transform scroll progress to horizontal movement
  // Adjusted range to ensure all items are seen smoothly
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-85%"]);
  
  // Optional: subtle parallax for the text
  const textX = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);

  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedItem = RUNWAY_ITEMS.find(item => item.id === selectedId);

  return (
    <section id="runway" ref={targetRef} className="h-[400vh] bg-aura-black relative">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Section Title Background (Static feel but moves slightly) */}
        <motion.div 
            style={{ x: textX }}
            className="absolute top-10 left-10 z-10 mix-blend-difference text-white pointer-events-none whitespace-nowrap"
        >
          <h2 className="font-serif text-6xl md:text-9xl opacity-20">PASARELA</h2>
          <p className="font-sans text-sm tracking-[0.5em] mt-2 uppercase opacity-60 ml-2">Colección Otoño / Invierno</p>
        </motion.div>

        {/* Horizontal Container */}
        <div className="w-full flex items-center">
            <motion.div style={{ x }} className="flex gap-12 pl-[10vw] pr-[10vw]">
            {RUNWAY_ITEMS.map((item) => (
                <motion.div
                key={item.id}
                layoutId={`card-container-${item.id}`}
                onClick={() => setSelectedId(item.id)}
                className="relative w-[300px] h-[500px] md:w-[450px] md:h-[700px] flex-shrink-0 overflow-hidden cursor-pointer grayscale hover:grayscale-0 transition-all duration-700 ease-out group"
                >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <motion.img
                    layoutId={`card-image-${item.id}`}
                    src={item.imageUrl}
                    alt={item.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
                <motion.div 
                    className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                    <span className="text-white font-sans text-xs tracking-widest uppercase border-b border-white pb-1">Ver Look</span>
                </motion.div>
                </motion.div>
            ))}
            </motion.div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedId && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
            onClick={() => setSelectedId(null)}
          >
             <button className="absolute top-6 right-6 text-white hover:text-aura-gold transition-colors z-50">
                <X size={32} />
             </button>

            <motion.div
              layoutId={`card-container-${selectedId}`}
              className="relative max-h-[90vh] max-w-[90vw] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                layoutId={`card-image-${selectedId}`}
                src={selectedItem.imageUrl}
                alt={selectedItem.alt}
                className="max-h-[85vh] w-auto object-contain"
              />
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white"
              >
                  <p className="font-serif text-2xl italic">Look #{selectedId}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Runway;