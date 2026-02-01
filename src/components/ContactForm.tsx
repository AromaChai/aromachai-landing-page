"use client";

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp, CheckCircle2, FileText, X } from 'lucide-react';
import { ContactForms } from './Form';


export const ContactForm: React.FC = () => {
  const [showForm, setShowForm] = React.useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
    <section className="py-24 bg-green-950 text-white" id="contact">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Explore the <span className="text-green-400">Franchise Opportunity</span>
          </h2>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            Get detailed investment breakdowns, location requirements, support structure, and agreement details. No pressure. No obligation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="text-green-700" size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">What Happens Next</h3>
            </div>

            <div className="space-y-6 mb-8">
              {[
                { step: '1', text: 'You submit the form' },
                { step: '2', text: 'Our team contacts you within 24 hours' },
                { step: '3', text: 'Documents and details are shared' },
                { step: '4', text: 'Outlet visit scheduled (if interested)' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold shrink-0">
                    {item.step}
                  </div>
                  <p className="text-gray-900 font-medium">{item.text}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowForm(true)}
              className="w-full bg-green-700 hover:bg-green-800 text-white py-5 rounded-2xl font-bold text-xl transition-all shadow-xl flex items-center justify-center gap-3 group"
            >
              Get Franchise Details Now
              <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
            </button>
            <p className="text-center text-gray-500 text-sm mt-4">
              (Button scrolls to top form to get complete franchise information)
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    



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
              className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative no-scrollbar"
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
</>

  );
};

