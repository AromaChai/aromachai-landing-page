"use client";

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, FileText, PhoneCall, X } from 'lucide-react';
import { ContactForms } from './Form';

const slides = [
  {
    tag: 'Chefless Operating Model',
    image: '/images/banner1.png',
    title: '3 Brands. 1 Kitchen. Multiple Revenue Streams.',
    subtitle:
      "Run Aroma Chai (offline QSR + Online) along with BreadHub & My Fries (cloud kitchens) from one setup. One investment. Offline + online demand. Scalable food business.",
  },
  {
    tag: 'Chefless Operating Model',
    image: '/images/banner2.png',
    title: 'Be Your Own Boss with Aroma Chai',
    subtitle:
      'A high-ROI business model designed for the modern entrepreneur. Low investment, high returns, and scalable operations.',
  },
  {
    tag: 'Chefless Operating Model',
    image: '/images/banner3.png',
    title: 'Revolutionary Chef-Less Kitchen Model',
    subtitle:
      'Operate a full-service café without professional chefs. Our proprietary premix systems ensure consistent quality every single time.',
  },
];

export const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen min-h-150 overflow-hidden">

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 gradient-overlay" />
          <img src={slides[current].image} alt="Hero Background" className="w-full h-full object-cover" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center md:px-4 px-2">
        <motion.h2
          key={`tag-${current}`}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="sm:text-base text-sm md:text-base text-green-100 font-bold mb-1 bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full md:w-max-w-[300px] text-center"

        >
          {slides[current].tag}
        </motion.h2>



        <motion.h1
          key={`title-${current}`}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="sm:text-4xl text-xl md:text-6xl lg:text-7xl font-bold text-white max-w-5xl leading-tight mb-2"
        >
          {slides[current].title}
        </motion.h1>

        <motion.p
          key={`sub-${current}`}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="sm:text-lg text-xs md:text-lg text-gray-200 max-w-3xl md:block hidden"
        >
          {slides[current].subtitle}
        </motion.p>

        {/* Investment Snapshot */}
        <motion.div
          key={`invest-snap-${current}`}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className=" rounded-2xl px-2 py-1 max-w-lg w-full mb-8"
        >
          <h3 className="md:text-2xl text-lg font-bold text-white ">Investment Start from ₹8 Lakhs+</h3>
          <div className="flex  justify-center  gap-2  text-sm">
            <button
              type="button"
              onClick={() => document.getElementById('express')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-green-600 hover:bg-green-700 text-white md:px-3 md:py-1.5 p-1
              rounded-full w-full sm:w-auto text-center transition-colors cursor-pointer text-base "
            >
              Express Model
            </button>
            <button
              type="button"
              onClick={() => document.getElementById('cafe')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-green-600 hover:bg-green-700 text-white md:px-3 md:py-1.5 p-1
              rounded-full w-full sm:w-auto text-center transition-colors cursor-pointer text-base"
            >
              Café Model
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto max-w-lg px-4 sm:px-0"
        >
          {/* Details Button */}
          <div
            onClick={() => setShowForm(true)}
            className="
      bg-green-700 hover:bg-green-800 
      px-6 md:px-8 py-3 md:py-3 text-white
      rounded-full font-semibold
      text-sm md:text-base
      transition-all
      flex items-center justify-center gap-2
      w-full cursor-pointer
    "
          >
            <FileText className="size-5 md:size-6" />
            <span>Get Franchise Details</span>
          </div>


        </motion.div>


      </div>


      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 transition-all rounded-full ${i === current ? 'w-10 bg-white' : 'w-4 bg-white/40'}`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}


      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/20 text-white hover:bg-black/50 
          transition-all z-20 hidden md:block"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/20 text-white hover:bg-black/50 
         transition-all z-20 hidden md:block"
      >
        <ChevronRight size={32} />
      </button>

      {/* Form Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowForm(false)}
            className="fixed inset-0 bg-black/30  z-50 flex items-center justify-center md:p-4 "
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white/20 backdrop-blur-xl rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative no-scrollbar"
            >
              <button
                onClick={() => setShowForm(false)}
                className=" sticky top-6 left-6 p-2 hover:bg-gray-100 rounded-full transition-all z-10 "
              >
                <X size={24} className="text-gray-600" />
              </button>
              <div className="p-4 md:p-7">
                <ContactForms />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

