import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="atelier" className="py-24 md:py-32 bg-aura-cream overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Image Grid */}
          <div className="w-full md:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative z-10"
            >
              <img 
                src="https://images.pexels.com/photos/4622225/pexels-photo-4622225.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="En el taller" 
                className="w-full h-auto object-cover shadow-xl"
              />
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, delay: 0.3 }}
               className="absolute -bottom-10 -right-10 w-2/3 md:w-1/2 z-0 hidden md:block"
            >
              <img 
                src="https://images.pexels.com/photos/461035/pexels-photo-461035.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Detalle de tela" 
                className="w-full h-auto object-cover opacity-80"
              />
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 md:pl-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-aura-black mb-6">
                El Arte de la <span className="italic text-aura-gold">Confección</span>
              </h2>
              <div className="h-1 w-20 bg-aura-black mb-8" />
              <p className="font-sans text-stone-600 leading-relaxed mb-6 font-light text-lg">
                En un mundo de moda rápida, Aura invita a la pausa. Cada prenda es un diálogo entre la tela y quien la porta. Creemos en la elegancia atemporal, en los cortes que favorecen la silueta natural y en los materiales que respiran.
              </p>
              <p className="font-sans text-stone-600 leading-relaxed mb-8 font-light text-lg">
                Desde mi taller, trabajo mano a mano con cada clienta para dar vida a piezas únicas, imbuidas de carácter y sofisticación. No solo vestimos cuerpos, vestimos momentos.
              </p>
              
              <img 
                src="https://picsum.photos/id/400/100/50" 
                alt="Firma" 
                className="opacity-70 grayscale h-12" 
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;