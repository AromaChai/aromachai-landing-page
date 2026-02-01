"use client";

import React, { useEffect, useState } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Menu', href: '#menu' },
    { name: 'Featured Outlet', href: '#about' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          
          <span className={`text-2xl font-serif font-bold ${scrolled ? 'text-green-900' : 'text-white'}`}>
            <Image src="/images/logo.png" width={600} height={600} className='w-36' alt='logo' />
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors hover:text-green-600 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button onClick={()=>{ window.location.href="#contact"  }}  className="bg-green-700 text-white px-6 py-2 rounded-full font-bold hover:bg-green-800 transition-all shadow-lg">
            Apply Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className={`md:hidden p-2 ${scrolled ? 'text-gray-900' : 'text-white'}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-gray-700 text-lg font-medium" onClick={() => setIsOpen(false)}>
                  {link.name}
                </a>
              ))}
              <button onClick={()=>{ window.location.href="#contact" , setIsOpen(false)  }} className="bg-green-700 text-white w-full py-3 rounded-xl font-bold">Apply for Franchise</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

