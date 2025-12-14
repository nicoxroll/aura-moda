import React from 'react';
import { motion } from 'framer-motion';

const Campaign: React.FC = () => {
  return (
    <section id="campaign" className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-0">
             <img 
                src="https://images.pexels.com/photos/7945660/pexels-photo-7945660.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Campaña Otoño Invierno" 
                className="w-full h-full object-cover opacity-60"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <h2 className="font-serif text-5xl md:text-7xl text-white mb-4 tracking-tight">Otoño / Invierno</h2>
                <p className="font-sans text-white/80 tracking-[0.3em] uppercase text-sm md:text-base">
                    La belleza está en el movimiento
                </p>
                <button className="mt-8 border border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-colors duration-300 font-sans tracking-widest text-xs uppercase">
                    Ver Campaña Completa
                </button>
            </motion.div>
        </div>
    </section>
  );
};

export default Campaign;