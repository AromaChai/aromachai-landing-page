"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Image from 'next/image';

export const SupportSection: React.FC = () => {
  return (
    <section className="py-24 bg-green-50/50" id="about">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Outlet: <span className="text-green-700">Ghansoli, Navi Mumbai</span>
          </h2>
          
        </div>

        <div className="grid grid-cols-1 gap-12 items-center">
          

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-xl relative z-0 overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500 pointer-events-none z-0" />
            <h4 className="text-xl font-bold text-gray-900 mb-4 relative z-0">Outlet Walkthrough</h4>
            <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100 relative z-0">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/rpvNdODDKTU"
                title="Aroma Chai Opens in Ghansoli ☕ | New Outlet Launch | Navi Mumbai"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <p className="text-sm text-gray-500 mt-4 relative z-10">
              Video includes: Kitchen operations, Walk-in + online order flow
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

