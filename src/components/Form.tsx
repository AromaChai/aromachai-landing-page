"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export const ContactForms: React.FC = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsappNumber: '',
    city: '',
    investmentCapacity: '',
  });

  

  const investmentOptions = [
    '₹ 8 Lakhs+ (Express)',
    '₹15 Lakhs+ (Café)',
    '₹40 Lakhs+ (Master Franchise)',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  (async () => {
    try {
      setIsSubmitting(true);

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const payload = await res.json().catch(() => ({}));
        console.error('Submission error:', payload);
        alert(payload.error || 'Submission failed');
        setIsSubmitting(false);
        return;
      }

      // ✅ GTM EVENT — THIS IS THE KEY
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'form_success',
        form_name: 'Franchise Lead Form',
        page: '/thankyou',
      });

      // slight delay so GTM can process
      setTimeout(() => {
        router.push('/thankyou');
      }, 100);

    } catch (err) {
      console.error('Submit failed:', err);
      alert('Submission failed. Please try again later.');
      setIsSubmitting(false);
    }
  })();
};


  return (
    <section className="bg-transparent relative w-full">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl p-6 md:p-8 bg-white/95 backdrop-blur-sm"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Get Franchise Details
            </h2>
            <p className="text-gray-700 text-base md:text-lg hidden md:block">
              Takes 30 seconds. Our team will connect within 24 hours.
            </p>
          </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-800 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Enter your email"
                />
              </div>

              {/* WhatsApp Number */}
              <div>
                <label htmlFor="whatsappNumber" className="block text-sm font-semibold text-gray-800 mb-2">
                  WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="whatsappNumber"
                  name="whatsappNumber"
                  maxLength={10}
                  value={formData.whatsappNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Enter your WhatsApp number"
                />
              </div>

              {/* City */}
              <div>
                <label htmlFor="city" className="block text-sm font-semibold text-gray-800 mb-2">
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Enter your city"
                />
              </div>

              {/* Investment Capacity */}
              <div>
                <label htmlFor="investmentCapacity" className="block text-sm font-semibold text-gray-800 mb-2">
                  Investment Capacity <span className="text-red-500">*</span>
                </label>
                <select
                  id="investmentCapacity"
                  name="investmentCapacity"
                  value={formData.investmentCapacity}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white"
                >
                  <option value="">Select your investment capacity</option>
                  {investmentOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg mt-6"
              >
               {isSubmitting ? "Submitting..." : "Get Complete Franchise Info"}
              </motion.button>

              {/* Privacy Note */}
              <p className="text-center text-xs text-gray-600 mt-4">
                We respect your privacy. No spam. Only franchise information.
              </p>
            </form>

        </motion.div>
      </div>
    </section>
  );
};
