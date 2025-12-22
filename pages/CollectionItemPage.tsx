import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Share2, Heart, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { COLLECTION } from '../constants';

const CollectionItemPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const item = COLLECTION.find(i => i.id === Number(id));
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-aura-cream">
        <div className="text-center">
          <h2 className="font-serif text-4xl mb-4">Pieza no encontrada</h2>
          <button 
            onClick={() => navigate('/collection')}
            className="font-sans text-sm uppercase tracking-widest border-b border-black pb-1 hover:text-aura-gold hover:border-aura-gold transition-colors"
          >
            Volver a la colección
          </button>
        </div>
      </div>
    );
  }

  // Define gallery images based on the item (using placeholders + item image for demo)
  const galleryImages = [
    item.imageUrl,
    "/images/2916814.jpg",
    "/images/1536619.jpg",
    item.imageUrl // Repeating for the 4th slot
  ];

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowRight':
          setLightboxIndex((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
          break;
        case 'ArrowLeft':
          setLightboxIndex((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));
          break;
      }
    };

    if (lightboxIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
    }
    
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, galleryImages.length]);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen w-full">
        <div className="absolute inset-0">
          <img 
            src={item.imageUrl} 
            alt={item.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        {/* Navigation & Actions */}
        <div className="absolute top-0 left-0 right-0 p-6 md:p-12 flex justify-between items-start z-20">
          <button 
            onClick={() => navigate('/collection')}
            className="text-white hover:text-aura-gold transition-colors flex items-center gap-2 group"
          >
            <ArrowLeft size={24} />
            <span className="font-sans text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0">
              Volver
            </span>
          </button>
          
          <div className="flex gap-4">
            <button className="text-white hover:text-aura-gold transition-colors">
              <Share2 size={24} />
            </button>
            <button className="text-white hover:text-aura-gold transition-colors">
              <Heart size={24} />
            </button>
          </div>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-3 py-1 border border-white/50 text-white text-xs uppercase tracking-[0.2em] mb-6">
              {item.category}
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6">
              {item.title}
            </h1>
            <p className="font-sans text-white/90 text-lg font-light max-w-xl leading-relaxed">
              Una pieza única que encarna la filosofía de Aura. Diseñada para trascender las tendencias y celebrar la belleza atemporal.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Details Section */}
      <div className="container mx-auto px-6 md:px-24 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          {/* Left Column: Description */}
          <div className="md:col-span-5">
            <span className="block font-sans text-xs text-stone-500 uppercase tracking-widest mb-6">
              La Historia
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-aura-black mb-8 leading-tight">
              Artesanía en cada detalle
            </h2>
            <div className="prose prose-stone font-sans font-light text-stone-600">
              <p className="mb-6">
                Esta creación es el resultado de más de 120 horas de trabajo manual en nuestro atelier. 
                Cada pliegue ha sido modelado sobre maniquí para asegurar una caída perfecta y un movimiento natural.
              </p>
              <p>
                Los materiales han sido seleccionados de proveedores sostenibles, garantizando no solo 
                una calidad excepcional sino también un compromiso con el medio ambiente.
              </p>
            </div>

            <div className="mt-12 pt-12 border-t border-stone-200">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <span className="block font-sans text-xs text-stone-400 uppercase tracking-widest mb-2">Material</span>
                  <span className="font-serif text-lg text-aura-black">Seda Orgánica</span>
                </div>
                <div>
                  <span className="block font-sans text-xs text-stone-400 uppercase tracking-widest mb-2">Origen</span>
                  <span className="font-serif text-lg text-aura-black">Buenos Aires</span>
                </div>
                <div>
                  <span className="block font-sans text-xs text-stone-400 uppercase tracking-widest mb-2">Año</span>
                  <span className="font-serif text-lg text-aura-black">2025</span>
                </div>
                <div>
                  <span className="block font-sans text-xs text-stone-400 uppercase tracking-widest mb-2">Disponibilidad</span>
                  <span className="font-serif text-lg text-aura-black">Bajo Pedido</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Gallery Grid */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-12">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="cursor-pointer overflow-hidden"
                  onClick={() => openLightbox(0)}
                >
                  <img 
                    src={galleryImages[0]} 
                    alt="Detail 1" 
                    className="w-full aspect-[3/4] object-cover hover:opacity-90 transition-opacity"
                  />
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="cursor-pointer overflow-hidden"
                  onClick={() => openLightbox(1)}
                >
                  <img 
                    src={galleryImages[1]} 
                    alt="Detail 2" 
                    className="w-full aspect-square object-cover hover:opacity-90 transition-opacity"
                  />
                </motion.div>
              </div>
              <div className="space-y-4">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="cursor-pointer overflow-hidden"
                  onClick={() => openLightbox(2)}
                >
                  <img 
                    src={galleryImages[2]} 
                    alt="Detail 3" 
                    className="w-full aspect-square object-cover hover:opacity-90 transition-opacity"
                  />
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="cursor-pointer overflow-hidden"
                  onClick={() => openLightbox(3)}
                >
                  <img 
                    src={galleryImages[3]} 
                    alt="Detail 4" 
                    className="w-full aspect-[3/4] object-cover hover:opacity-90 transition-opacity"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-stone-100 py-24 text-center">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl mb-8 text-aura-black">¿Te interesa esta pieza?</h2>
          <p className="font-sans text-stone-600 mb-12 max-w-xl mx-auto">
            Agenda una cita privada en nuestro atelier para probarte este diseño y personalizarlo a tu medida.
          </p>
          <button className="bg-aura-black text-white px-12 py-4 font-sans text-xs uppercase tracking-[0.2em] hover:bg-aura-gold transition-colors duration-300">
            Agendar Cita
          </button>
        </div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>

            <button 
              className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-50 p-2"
              onClick={prevImage}
            >
              <ChevronLeft size={48} />
            </button>

            <button 
              className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-50 p-2"
              onClick={nextImage}
            >
              <ChevronRight size={48} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl max-h-[90vh] w-full h-full p-4 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={galleryImages[lightboxIndex]} 
                alt={`Gallery view ${lightboxIndex + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
            
            <div className="absolute bottom-8 left-0 right-0 text-center text-white/50 font-sans text-xs tracking-widest">
              {lightboxIndex + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CollectionItemPage;
