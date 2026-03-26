'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Sparkles, Zap, Target } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

const features = [
	{
		icon: Sparkles,
		title: 'Creative Design',
		description: 'Crafting beautiful and intuitive user experiences with attention to every detail.',
	},
	{
		icon: Zap,
		title: 'Fast Performance',
		description: 'Optimized builds using modern tooling for speed and efficiency.',
	},
	{
		icon: Target,
		title: 'Precision',
		description: 'Clean, maintainable code driven by best practices and real-world experience.',
	},
];

export function HomeContent() {
	const heroRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ['start start', 'end start'],
	});
	const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

	return (
		<div className="pt-16">
			{/* Hero Section */}
			<section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900" />

				{/* Animated Background Blobs */}
				<div className="absolute inset-0 z-0">
					<motion.div
						animate={{ y: [0, -30, 0] }}
						transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
						className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
					/>
					<motion.div
						animate={{ y: [0, 30, 0] }}
						transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
						className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl"
					/>
				</div>

				<motion.div
					style={{ opacity }}
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="relative z-10 text-center px-6 max-w-5xl mx-auto"
				>
					<motion.h1
						className="text-7xl md:text-8xl tracking-tight mb-6 text-black dark:text-white font-medium"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3, duration: 1 }}
					>
						Frontend Developer
					</motion.h1>

					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5, duration: 0.8 }}
						className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto"
					>
						Building exceptional digital experiences with modern technologies and over 10 years of industry expertise.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.7, duration: 0.8 }}
						className="flex gap-4 justify-center flex-wrap"
					>
						<Link href="/projects">
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center gap-2 hover:bg-gray-900 dark:hover:bg-gray-100 transition-colors"
							>
								View Projects
								<ArrowRight className="w-5 h-5" />
							</motion.button>
						</Link>

						<Link href="/contact">
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="px-8 py-4 border-2 border-black dark:border-white text-black dark:text-white rounded-full hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors"
							>
								Get in Touch
							</motion.button>
						</Link>
					</motion.div>
				</motion.div>

				{/* Scroll Indicator */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.5, duration: 1 }}
					className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
				>
					<motion.div
						animate={{ y: [0, 10, 0] }}
						transition={{ duration: 2, repeat: Infinity }}
						className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center p-2"
					>
						<motion.div
							className="w-1.5 h-1.5 bg-gray-600 dark:bg-gray-400 rounded-full"
							animate={{ y: [0, 12, 0] }}
							transition={{ duration: 2, repeat: Infinity }}
						/>
					</motion.div>
				</motion.div>
			</section>

			{/* Features Section */}
			<section className="py-32 px-6 bg-white dark:bg-gray-950">
				<div className="max-w-7xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="text-center mb-20"
					>
						<h2 className="text-5xl md:text-6xl tracking-tight mb-4 text-black dark:text-white font-medium">
							What I Do
						</h2>
						<p className="text-xl text-gray-600 dark:text-gray-400">
							Combining creativity with technical expertise
						</p>
					</motion.div>

					<div className="grid md:grid-cols-3 gap-8">
						{features.map((feature, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: '-100px' }}
								transition={{ delay: index * 0.2, duration: 0.8 }}
								whileHover={{ y: -5 }}
								className="p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border border-gray-100 dark:border-gray-800 hover:shadow-xl dark:hover:shadow-gray-900/50 transition-all duration-300"
							>
								<div className="w-14 h-14 rounded-2xl bg-black dark:bg-white flex items-center justify-center mb-6">
									<feature.icon className="w-7 h-7 text-white dark:text-black" />
								</div>
								<h3 className="text-2xl mb-4 text-black dark:text-white">{feature.title}</h3>
								<p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-32 px-6 bg-gradient-to-br from-gray-900 to-black text-white">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="max-w-4xl mx-auto text-center"
				>
					<h2 className="text-5xl md:text-6xl tracking-tight mb-6 font-medium">Let&#39;s Work Together</h2>
					<p className="text-xl text-gray-400 mb-12">
						Ready to bring your ideas to life? Let&#39;s create something amazing.
					</p>
					<Link href="/contact">
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="px-10 py-5 bg-white text-black rounded-full text-lg hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto"
						>
							Start a Conversation
							<ArrowRight className="w-5 h-5" />
						</motion.button>
					</Link>
				</motion.div>
			</section>
		</div>
	);
}
