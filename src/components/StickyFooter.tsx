"use client";

import React from 'react';
import { Share2, ArrowRight, Phone, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { ContactForms } from './Form';

interface StickyFooterProps {
  onGetDetailsClick?: () => void;
}

export const StickyFooter: React.FC<StickyFooterProps> = ({ onGetDetailsClick }) => {
const [showForm, setShowForm] = React.useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-[9999] overflow-hidden md:hidden pointer-events-auto">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex gap-4 items-center justify-center ">
            {/* Share Button */}


            {/* Get Franchise Details Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowForm(true)}
              className=" bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <span className='text-sm'>Get Franchise Details</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = 'tel:+9324590515')}
              className=" bg-gray-100 hover:bg-gray-200 font-bold py-3 px-6 rounded-lg "
            >
              <Phone size={20} className='text-green-700 ' />
            </motion.button>
          </div>
        </div>
      </div>


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
