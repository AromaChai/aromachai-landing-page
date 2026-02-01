
import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-[100] px-6 py-8 pointer-events-none">
      <div className={`max-w-7xl mx-auto flex items-center justify-between pointer-events-auto transition-all duration-500 ${
        scrolled ? 'bg-white/80 backdrop-blur-xl border border-black/5 py-4 px-8 rounded-full shadow-2xl' : 'bg-transparent'
      }`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#0b2b1a] rounded-full flex items-center justify-center">
            <span className="text-white font-serif text-lg">A</span>
          </div>
          <span className={`text-xl font-serif font-bold tracking-tight transition-colors ${scrolled ? 'text-[#0b2b1a]' : 'text-white'}`}>
            Aroma <span className="italic text-[#d4af37]">Chai</span>
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-12">
          {['Opportunity', 'Menu', 'Profit ROI', 'Process'].map((link) => (
            <a 
              key={link} href={`#${link.toLowerCase()}`}
              className={`text-sm font-bold uppercase tracking-[0.2em] transition-colors hover:text-[#d4af37] ${
                scrolled ? 'text-[#0b2b1a]' : 'text-white'
              }`}
            >
              {link}
            </a>
          ))}
          <button className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all ${
            scrolled ? 'bg-[#0b2b1a] text-white' : 'bg-white text-[#0b2b1a]'
          }`}>
            Apply Now <ArrowUpRight size={14} />
          </button>
        </div>

        <button 
          className={`lg:hidden p-2 rounded-full ${scrolled ? 'bg-[#0b2b1a] text-white' : 'bg-white/10 text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 bg-[#0b2b1a] z-[-1] flex flex-col items-center justify-center gap-8 pointer-events-auto"
          >
            {['Opportunity', 'Menu', 'Profit ROI', 'Process'].map((link) => (
              <a 
                key={link} href="#" 
                className="text-white text-4xl font-serif italic hover:text-[#d4af37] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
