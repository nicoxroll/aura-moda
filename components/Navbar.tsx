import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsMobileOpen(false);

    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      if (location.pathname === '/') {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/');
        // Wait for navigation to complete
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      navigate(href);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-aura-cream/95 backdrop-blur-md py-4 shadow-sm text-aura-black' 
            : 'bg-transparent py-6 text-white'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a 
            href="/" 
            onClick={(e) => handleNavigation(e, '/#hero')}
            className="font-serif text-3xl md:text-4xl tracking-widest font-semibold z-50"
          >
            AURA
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavigation(e, item.href)}
                className={`font-sans text-sm tracking-widest transition-colors duration-300 relative group ${
                    isScrolled ? 'hover:text-aura-gold' : 'hover:text-white/70'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                    isScrolled ? 'bg-aura-gold' : 'bg-white'
                }`} />
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden z-50 p-2 ${isMobileOpen ? 'text-aura-black' : (isScrolled ? 'text-aura-black' : 'text-white')}`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 z-40 bg-aura-cream flex flex-col justify-center items-center md:hidden"
          >
            <div className="flex flex-col space-y-8 text-center">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item.href)}
                  className="font-serif text-3xl text-aura-black hover:text-aura-gold transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;