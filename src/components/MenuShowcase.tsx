"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

export const MenuShowcase: React.FC = () => {
  const rightFor = [
    'You want a business with daily, repeat demand',
    'You are comfortable with a QSR operating model',
    'You can be involved during setup and early operations',
    'You prefer a proven system over starting from scratch',
  ];

  const notFor = [
    'You are looking for completely passive income',
    'You expect guaranteed returns',
    'You are unwilling to follow brand SOPs',
    'You do not have working capital beyond setup costs',
  ];

  return (
    <section className="py-24 bg-stone-50 overflow-hidden" id="menu">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold mb-6">
            Who This <span className="text-green-700">Franchise Is For</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg border-t-8 border-green-600"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-900">This Is Right For You If:</h3>
            </div>
            <ul className="space-y-4">
              {rightFor.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg border-t-8 border-red-200"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <XCircle className="text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">This Is Not For You If:</h3>
            </div>
            <ul className="space-y-4">
              {notFor.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <XCircle className="text-red-400 shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-green-900 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            <strong>Honesty Statement:</strong> This is an operator-driven business, not a passive investment. When executed well, the
            model is designed to become profitable sustainably.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

