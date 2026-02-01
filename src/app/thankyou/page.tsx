"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import confetti from 'canvas-confetti';


export default function ThankYouPage() {
	const [showConfetti, setShowConfetti] = useState(true);

	useEffect(() => {
		const duration = 5000; // 5 seconds
		const interval = setInterval(() => {
			confetti({
				particleCount: 40,
				spread: 70,
				origin: { y: 0.6 },
			});
		}, 300);

		const timeout = setTimeout(() => {
			clearInterval(interval);
			setShowConfetti(false);
		}, duration);

		return () => {
			clearInterval(interval);
			clearTimeout(timeout);
		};
	}, []);
	return (
		<main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 p-6">
			<motion.div
				initial={{ opacity: 0, y: 20, scale: 0.98 }}
				animate={{ opacity: 1, y: 0, scale: 1 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
				className="bg-white rounded-3xl shadow-2xl max-w-xl w-full p-10 text-center"
			>
				<div className="flex items-center justify-center mb-6">
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ type: 'spring', stiffness: 260, damping: 20 }}
						className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center"
					>
						<CheckCircle2 className="text-green-600" size={44} />
					</motion.div>
				</div>

				{showConfetti && (
					<motion.p initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} className="text-green-600 font-semibold mb-3">
						Celebration! 🎉
					</motion.p>
				)}

				<h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Thank you for contacting us!</h1>
				<p className="text-gray-600 mb-6">
					We have received your enquiry. Our franchise team will review your details and get back to you within 24 hours.
				</p>

				<motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
					<Link href="/" className="inline-block bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold">
						Back to Home
					</Link>
				</motion.div>
			</motion.div>
		</main>
	);
}

