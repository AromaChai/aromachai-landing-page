"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const testimonials = [
  { id: '9py0bUasUEk', thumb: '/images/review1.png' },
  { id: 'kyG8XO6TJi4', thumb: '/images/review2.png' },
  { id: 'PJ0T678r-bY', thumb: '/images/review3.png' },
];

export const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);
  const playingSet = useRef(new Set<string>());
  const intervalRef = useRef<number | null>(null);
  const playersRef = useRef<Record<string, any>>({});

  // advance function
  const advance = () => setIndex((i) => (i + 1) % testimonials.length);

  // start rotation
  const startRotation = () => {
    if (intervalRef.current) return;
    intervalRef.current = window.setInterval(() => {
      // only advance if no players are playing
      if (playingSet.current.size === 0) advance();
    }, 5000);
  };

  const stopRotation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startRotation();
    return () => stopRotation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // load YouTube IFrame API if not loaded
    if (!('YT' in window)) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
    }

    // expose global ready handler
    (window as any).onYouTubeIframeAPIReady = () => {
      testimonials.forEach((t, idx) => {
        const el = document.getElementById(`yt-player-${idx}`) as HTMLIFrameElement | null;
        if (el && !(t.id in playersRef.current)) {
          playersRef.current[t.id] = new (window as any).YT.Player(el, {
            events: {
              onStateChange: (e: any) => {
                const state = e.data; // 1 = playing, 2 = paused, 0 = ended
                if (state === 1) {
                  playingSet.current.add(t.id);
                  stopRotation();
                } else {
                  playingSet.current.delete(t.id);
                  if (playingSet.current.size === 0) startRotation();
                }
              },
            },
          });
        }
      });
    };

    // if API already present, call ready manually
    if ((window as any).YT && (window as any).YT.Player) {
      (window as any).onYouTubeIframeAPIReady();
    }

    return () => {
      // destroy players
      Object.values(playersRef.current).forEach((p: any) => p && p.destroy && p.destroy());
      playersRef.current = {};
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
             <span className="text-green-700">Frenchise Partners Review</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Don't Just Take Our Word For It</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-stone-50 rounded-3xl p-4 md:p-12 shadow-xl relative z-0 overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500 pointer-events-none z-0" />
          <div className="flex items-center gap-4 mb-6 relative z-0">
            <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center">
              <Users className="text-white" size={24} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900">Owners Review</h4>
              <p className="text-sm text-gray-600">Hear from franchise owners across outlets</p>
            </div>
          </div>

          <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100 relative z-0">
            {/* Render only the active iframe (enablejsapi=1 so we can listen to state) */}
            {testimonials.map((t, idx) => (
              <iframe
                key={t.id}
                id={`yt-player-${idx}`}
                className={`w-full h-full transition-opacity duration-500 ${idx === index ? 'opacity-100' : 'opacity-0 pointer-events-none absolute inset-0'}`}
                src={`https://www.youtube.com/embed/${t.id}?enablejsapi=1&origin=${typeof window !== 'undefined' ? encodeURIComponent(window.location.origin) : ''}`}
                title={`testimonial-${t.id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

