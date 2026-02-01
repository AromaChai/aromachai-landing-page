"use client";

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';

const faqs = [
  {
    question: 'What is the total investment required to start an Aroma Chai franchise?',
    answer:
      'The total investment typically ranges between ₹6-12 lakhs depending on the location tier, outlet size (Kiosk vs Café), and local interior costs. This includes franchise fee, machinery, initial stock, and branding.',
  },
  {
    question: 'Is there any royalty or profit-sharing with Aroma Chai?',
    answer:
      "No, we take pride in our 'Zero Royalty' model. You keep 100% of your profits. We only earn through our proprietary raw materials and setup support.",
  },
  {
    question: 'What kind of support will I receive as a franchisee?',
    answer:
      'We provide end-to-end support including site selection assistance, staff training, marketing collateral, proprietary recipes (premix), and ongoing operational guidance.',
  },
  {
    question: 'How long does it take to open a franchise after signing up?',
    answer: 'Generally, it takes 15-25 days from signing the agreement to the grand opening, provided the location is ready.',
  },
  {
    question: 'Do I need prior experience in the food & beverage industry?',
    answer:
      'Not at all. Our chef-less model and detailed SOPs are designed so that anyone with passion and business sense can operate the café successfully.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-stone-50" id="faq">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="h-1.5 w-24 bg-green-600 mx-auto rounded-full" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left transition-colors hover:bg-stone-50"
              >
                <span className="text-lg font-bold text-gray-900 pr-8">{faq.question}</span>
                <div className="shrink-0">{openIndex === i ? <Minus className="text-green-600" /> : <Plus className="text-gray-400" />}</div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 pt-0 text-gray-600 leading-relaxed border-t border-stone-100 mt-[-1px]">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

