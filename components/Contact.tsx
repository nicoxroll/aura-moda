import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative bg-aura-cream pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Info Side */}
          <div className="md:w-5/12 bg-aura-black text-white p-10 md:p-12 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-3xl mb-8">Hablemos</h3>
              <p className="font-sans text-stone-300 font-light mb-8">
                Agenda tu cita para comenzar a crear algo extraordinario.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="text-aura-gold" size={20} />
                  <span className="font-sans text-sm tracking-wide">hola@aura-atelier.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-aura-gold" size={20} />
                  <span className="font-sans text-sm tracking-wide">Av. Alvear 1890, Buenos Aires</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Instagram className="text-aura-gold" size={20} />
                  <span className="font-sans text-sm tracking-wide">@aura.atelier</span>
                </div>
              </div>
            </div>
            
            <div className="mt-12 md:mt-0">
               <span className="font-serif italic text-2xl text-stone-500 opacity-50">"Elegancia es rechazo."</span>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:w-7/12 p-10 md:p-12 bg-white">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="font-sans text-xs uppercase tracking-wider text-stone-500 mb-2">Nombre</label>
                  <input type="text" className="border-b border-stone-300 py-2 outline-none focus:border-aura-black transition-colors bg-transparent" />
                </div>
                <div className="flex flex-col">
                  <label className="font-sans text-xs uppercase tracking-wider text-stone-500 mb-2">Apellido</label>
                  <input type="text" className="border-b border-stone-300 py-2 outline-none focus:border-aura-black transition-colors bg-transparent" />
                </div>
              </div>
              
              <div className="flex flex-col">
                <label className="font-sans text-xs uppercase tracking-wider text-stone-500 mb-2">Email</label>
                <input type="email" className="border-b border-stone-300 py-2 outline-none focus:border-aura-black transition-colors bg-transparent" />
              </div>

              <div className="flex flex-col">
                <label className="font-sans text-xs uppercase tracking-wider text-stone-500 mb-2">Mensaje</label>
                <textarea rows={4} className="border-b border-stone-300 py-2 outline-none focus:border-aura-black transition-colors bg-transparent resize-none"></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-aura-black text-white px-8 py-3 font-sans text-xs uppercase tracking-[0.2em] w-full md:w-auto hover:bg-aura-gold transition-colors duration-300 mt-4"
              >
                Enviar Mensaje
              </motion.button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Simple Footer */}
      <div className="mt-20 text-center pb-8">
        <p className="font-sans text-xs text-stone-400 tracking-widest uppercase">
          © {new Date().getFullYear()} Aura Atelier. Todos los derechos reservados.
        </p>
      </div>
    </section>
  );
};

export default Contact;