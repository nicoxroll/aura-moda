import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, PanInfo, AnimatePresence } from 'framer-motion';
import { Grid, Box, StretchHorizontal } from 'lucide-react';
import { COLLECTION } from '../constants';

type ViewMode = 'grid' | '3d' | 'full';

const Collection: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

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

          {/* View Switcher Controls */}
          <div className="flex gap-4 mt-6 md:mt-0">
            <ViewButton 
              active={viewMode === 'grid'} 
              onClick={() => setViewMode('grid')} 
              icon={<Grid size={18} />} 
              label="Grid"
            />
            <ViewButton 
              active={viewMode === '3d'} 
              onClick={() => setViewMode('3d')} 
              icon={<Box size={18} />} 
              label="360°"
            />
            <ViewButton 
              active={viewMode === 'full'} 
              onClick={() => setViewMode('full')} 
              icon={<StretchHorizontal size={18} />} 
              label="Full"
            />
          </div>
        </div>
      </div>

      <div className="flex-grow relative">
        <AnimatePresence mode="wait">
          {viewMode === 'grid' && (
            <GridView key="grid" />
          )}
          {viewMode === '3d' && (
            <CylinderView key="3d" />
          )}
          {viewMode === 'full' && (
            <FullView key="full" />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

// --- Sub-components for Views ---

const ViewButton: React.FC<{ active: boolean; onClick: () => void; icon: React.ReactNode; label: string }> = ({ active, onClick, icon, label }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2 text-xs font-sans uppercase tracking-widest transition-all duration-300 border ${
      active 
        ? 'bg-aura-black text-white border-aura-black' 
        : 'bg-transparent text-stone-500 border-stone-300 hover:border-aura-black hover:text-aura-black'
    }`}
  >
    {icon}
    <span className="hidden md:inline">{label}</span>
  </button>
);

const GridView = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="container mx-auto px-6 md:px-12"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
      {COLLECTION.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="group cursor-pointer"
        >
          <div className="relative overflow-hidden aspect-[3/4] mb-4">
            <div className="absolute inset-0 bg-aura-black/0 group-hover:bg-aura-black/10 transition-colors duration-500 z-10" />
            <motion.img 
              src={item.imageUrl} 
              alt={item.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
          </div>
          <div className="text-center">
            <span className="block font-sans text-xs text-stone-500 uppercase tracking-widest mb-1">{item.category}</span>
            <h3 className="font-serif text-xl text-aura-black group-hover:text-aura-gold transition-colors">{item.title}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

// Reuse the logic from Editorial but adapted for Collection items
const CylinderView = () => {
  // We duplicate items to have enough faces for a nice cylinder (4 items is too square)
  const ITEMS = [...COLLECTION, ...COLLECTION]; 
  const CARD_WIDTH = 280;
  const CARD_HEIGHT = 480;
  const FACE_COUNT = ITEMS.length;
  const THETA = 360 / FACE_COUNT;
  const RADIUS = Math.round((CARD_WIDTH / 2) / Math.tan(Math.PI / FACE_COUNT)) + 40;

  const rotation = useMotionValue(0);
  const smoothRotation = useSpring(rotation, { stiffness: 150, damping: 20, mass: 1.2 });

  const handlePan = (_: any, info: PanInfo) => {
    rotation.set(rotation.get() + info.delta.x * 0.2);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-[600px] flex flex-col items-center justify-center cursor-grab active:cursor-grabbing overflow-hidden"
    >
        <p className="mb-8 font-sans text-xs text-stone-400 uppercase tracking-widest animate-pulse">( Arrastra para girar )</p>
      <div 
        className="relative w-full h-full flex items-center justify-center"
        style={{ perspective: '1200px' }}
      >
        <motion.div
          className="relative w-0 h-0"
          style={{ transformStyle: 'preserve-3d', rotateY: smoothRotation }}
          onPan={handlePan}
        >
          {ITEMS.map((item, index) => {
            const angle = index * THETA;
            return (
              <motion.div
                key={`${item.id}-${index}`}
                className="absolute bg-white shadow-xl overflow-hidden group border border-stone-100"
                style={{
                  width: CARD_WIDTH,
                  height: CARD_HEIGHT,
                  transform: `rotateY(${angle}deg) translateZ(${RADIUS}px)`,
                  transformOrigin: 'center',
                  left: -CARD_WIDTH / 2,
                  top: -CARD_HEIGHT / 2,
                }}
              >
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-white/70 text-xs uppercase tracking-widest">{item.category}</span>
                  <h3 className="text-white font-serif text-xl">{item.title}</h3>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

const FullView = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="w-full h-[70vh] flex flex-col md:flex-row overflow-hidden"
  >
    {COLLECTION.map((item) => (
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