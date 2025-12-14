import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TIMELINE_DATA } from '../constants';

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-32 bg-aura-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-100/50 -skew-x-12 z-0" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="font-sans text-xs tracking-[0.3em] text-aura-gold uppercase">Historia</span>
          <h2 className="font-serif text-5xl md:text-6xl text-aura-black mt-4">Nuestro Legado</h2>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-stone-300 transform md:-translate-x-1/2" />

          <div className="space-y-24 md:space-y-40">
            {TIMELINE_DATA.map((item, index) => (
              <TimelineRow key={item.year} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface TimelineRowProps {
  item: typeof TIMELINE_DATA[0];
  index: number;
}

const TimelineRow: React.FC<TimelineRowProps> = ({ item, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  // Parallax Logic
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // La imagen se mueve verticalmente un 20% en dirección opuesta o conjunta al scroll
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col md:flex-row items-center ${
        isEven ? 'md:flex-row-reverse' : ''
      } gap-8 md:gap-0 group`}
    >
      {/* Content Box */}
      <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-16 text-left relative z-10">
        <div className={`md:text-${isEven ? 'left' : 'right'}`}>
          <span className="font-serif text-6xl md:text-8xl text-stone-200 font-bold block -mb-4 md:-mb-6 transition-colors duration-500 group-hover:text-aura-gold/20">
            {item.year}
          </span>
          <h3 className="font-serif text-2xl text-aura-black mb-3 relative z-10">
            {item.title}
          </h3>
          <p className="font-sans text-stone-500 font-light leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>

      {/* Dot on Line */}
      <div className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 mt-2 z-20">
        <div className="w-2 h-2 bg-aura-black rounded-full ring-4 ring-aura-cream transition-all duration-500 group-hover:scale-150 group-hover:bg-aura-gold" />
      </div>
      
      {/* Image on the other side with Parallax */}
      <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-16">
         <div className={`relative overflow-hidden aspect-[4/5] md:aspect-[3/4] shadow-xl ${isEven ? 'origin-left' : 'origin-right'}`}>
            <motion.div style={{ y, scale: 1.2 }} className="w-full h-full">
                <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
            </motion.div>
         </div>
      </div>
    </motion.div>
  );
};

export default Timeline;