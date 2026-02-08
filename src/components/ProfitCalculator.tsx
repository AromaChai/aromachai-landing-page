"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, IndianRupee, Store } from 'lucide-react';

export const ProfitCalculator: React.FC = () => {
  const formats = [
    {
      icon: <Store className="text-green-600" />,
      investment: '₹8 Lakhs+',
      area: 'Approx. 100–150 sq ft',
      focus: 'High-volume takeaway & delivery',
      brands: 'All 3 brands operational',
    },
    {
      icon: <Building2 className="text-blue-600" />,
      investment: '₹15 Lakhs+',
      area: 'Approx. 250–400 sq ft',
      focus: 'Seating + takeaway + delivery',
      brands: 'Higher average ticket size and margins',
    },
  ];

  return (
    <>
      <h1 className="text-2xl md:text-5xl font-bold text-gray-900 md:mb-12 mb-2 text-center p-2">
        Investment: <span className="text-green-700">EXPRESS Model</span> / <span className="text-blue-700">Cafe Model</span></h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 items-stretch md:gap-8 '>
        <section className="md:py-24 py-4 bg-white flex flex-col h-full" id="express">
          <div className="max-w-7xl mx-auto px-4 flex-1 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-stone-50 rounded-3xl p-8 md:p-12 border border-stone-200 hover:shadow-xl transition-all md:mb-12 mb-6 h-full flex flex-col"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">

                {/* LEFT: EXPRESS FORMAT */}
                <div className="flex-1">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                    <Store className="text-green-600" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    EXPRESS Model
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Investment</p>
                      <p className="text-2xl font-bold text-green-700">₹8 Lakhs+</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500 mb-1">Area</p>
                      <p className="text-lg font-semibold text-gray-900">
                        Approx. 100–150 sq ft
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500 mb-1">Focus</p>
                      <p className="text-lg font-semibold text-gray-900">
                        High-volume takeaway & delivery
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500 mb-1">Brands</p>
                      <p className="text-lg font-semibold text-gray-900">
                        All 3 brands operational
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </section>

        <section className="md:py-24 py-4 bg-white flex flex-col h-full" id="cafe">
          <div className="max-w-7xl mx-auto px-4 flex-1 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-stone-50 rounded-3xl p-8 md:p-12 border border-stone-200 hover:shadow-xl transition-all mb-12 h-full flex flex-col"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">

                {/* LEFT: EXPRESS FORMAT */}
                <div className="flex-1">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                     <Building2 className="text-blue-600" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    CAFÉ Model
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Investment</p>
                      <p className="text-2xl font-bold text-blue-700">₹15 Lakhs+</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500 mb-1">Area</p>
                      <p className="text-lg font-semibold text-gray-900">
                        Approx. 250–400 sq ft
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500 mb-1">Focus</p>
                      <p className="text-lg font-semibold text-gray-900">
                        Seating + takeaway + delivery
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500 mb-1">Brands</p>
                      <p className="text-lg font-semibold text-gray-900">
                        All 3 brands operational
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </section>

      </div>

      <div className="bg-green-50 rounded-2xl p-6 md:p-8 border border-green-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Payback Explanation
        </h3>

        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Most single-brand cafés take <strong>24–36 months</strong> for payback.
          This model is structured for potentially faster returns because
          <strong> three brands operate from one setup</strong>, increasing revenue
          per square foot.
        </p>

        <p className="text-sm text-gray-600 italic">
          Disclaimer: Payback depends on location, execution, and market conditions.
          Results may vary by outlet.
        </p>
      </div>
    </>
  );
};

