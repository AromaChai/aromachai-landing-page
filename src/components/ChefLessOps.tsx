"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Award, MapPin, Star, Store } from 'lucide-react';

export const ChefLessOps: React.FC = () => {
  const indicators = [
    { icon: <Star className="text-amber-500" />, label: '4.6+ Google Rating', description: '1000+ Reviews' },
    { icon: <Award className="text-blue-500" />, label: '4.5+ Swiggy/Zomato Rating' , description: 'All Outlets'},
    { icon: <Store className="text-green-500" />, label: '10+ Active Outlets across Maharashtra' , description: 'Across India' },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Proof & <span className="text-green-700">Credibility</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {indicators.map((indicator, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-stone-50 p-8 rounded-3xl border border-stone-100 text-center"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                {indicator.icon}
              </div>
              <p className="text-xl font-bold text-gray-900">{indicator.label}</p>
              <p className="text-sm text-gray-600">{indicator.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="aspect-square rounded-2xl overflow-hidden"
            >
              <img
                src={`/images/store${i}.png`}
                alt={`Outlet ${i}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

