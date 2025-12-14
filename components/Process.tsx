import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Scissors, Gift, Calendar } from 'lucide-react';
import { PROCESS_STEPS } from '../constants';

const iconMap: Record<string, React.ReactNode> = {
  'Calendar': <Calendar strokeWidth={1} size={32} />,
  'PenTool': <PenTool strokeWidth={1} size={32} />,
  'Scissors': <Scissors strokeWidth={1} size={32} />,
  'Gift': <Gift strokeWidth={1} size={32} />,
};

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-aura-black text-aura-cream">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-aura-cream">El Proceso Creativo</h2>
          <div className="w-16 h-0.5 bg-aura-gold mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-6 rounded-full border border-stone-700 group-hover:border-aura-gold group-hover:bg-white/5 transition-all duration-300 text-aura-gold">
                {iconMap[step.icon]}
              </div>
              <h3 className="font-serif text-2xl mb-3 text-white">{step.title}</h3>
              <p className="font-sans text-sm text-stone-400 font-light leading-relaxed px-2">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;