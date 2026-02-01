"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Coffee, ShoppingBag, Zap } from 'lucide-react';

export const MarketStats: React.FC = () => {
  const advantages = [
    {
      icon: <Coffee className="text-green-600" />,
      title: 'Chai = Predictable Demand',
      desc: 'Chai is a daily habit. Unlike trend-based food categories, demand stays consistent across seasons and locations.',
    },
    {
      icon: <ShoppingBag className="text-blue-600" />,
      title: 'Built-In Online Revenue',
      desc: 'Aroma Chai, BreadHub and My Fries operate as cloud kitchens from the same setup on Swiggy and Zomato. Same rent. Same team. Additional revenue.',
    },
    {
      icon: <Zap className="text-amber-600" />,
      title: 'Chefless Operations',
      desc: 'No dependency on skilled chefs. Standardised processes. Easier hiring and smoother daily operations.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Why This Isn't Like <span className="text-green-700">Most Café Franchises</span>
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Most cafés depend entirely on walk-in footfall. This model is built to perform even when footfall is average.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {advantages.map((adv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-stone-50 p-8 rounded-3xl border border-stone-100 hover:shadow-xl transition-all group"
            >
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {adv.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{adv.title}</h3>
              <p className="text-gray-600 leading-relaxed">{adv.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

