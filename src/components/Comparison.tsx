"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Coffee, ShoppingBag, Utensils } from 'lucide-react';

export const Comparison: React.FC = () => {
  const brands = [
    {
      icon: <Coffee className="text-green-600" />,
      name: 'Aroma Chai – Offline QSR + Cloud Kitchen',
      desc: 'Walk-in customers for chai, bun maska, samosa and snacks. High-frequency, low-ticket orders create steady daily cash flow + online sales.',
    },
    {
      icon: <ShoppingBag className="text-blue-600" />,
      name: 'The Bread Hub – Cloud Kitchen',
      desc: 'Online-only sandwich brand running from the same kitchen. Higher average order value without additional rent.',
    },
    {
      icon: <Utensils className="text-amber-600" />,
      name: 'My Fries – Cloud Kitchen',
      desc: 'High-margin fries and combo meals. Popular category on food delivery platforms.',
    },
  ];

  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            How the 3-Brand Model <span className="text-green-700">Improves Profit Potential</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            One setup. Three brands. Better utilisation of space, staff, and time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {brands.map((brand, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-stone-100 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center mb-6">
                {brand.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{brand.name}</h3>
              <p className="text-gray-600 leading-relaxed">{brand.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-green-900 rounded-[3rem] p-8 md:p-12 text-white text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">One rent. One team. Three brands.</h3>
            <p className="text-green-100 text-lg">
              Offline + online demand working together to improve ROI potential compared to single-brand outlets.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

