'use client';

import { motion } from 'motion/react';
import { Code2, Palette, Rocket, Users } from 'lucide-react';
import Image from 'next/image';
import profilePic from '../../../public/images/gaston-me.png';

const skills = [
	{
		icon: Code2,
		title: 'Development',
		items: ['React', 'TypeScript', 'Node.js', 'Next.js'],
	},
	{
		icon: Palette,
		title: 'Design',
		items: ['UI/UX', 'Figma', 'Adobe XD', 'Prototyping'],
	},
	{
		icon: Rocket,
		title: 'Tools',
		items: ['Git', 'AWS', 'Docker', 'CI/CD'],
	},
	{
		icon: Users,
		title: 'Soft Skills',
		items: ['Leadership', 'Communication', 'Problem Solving', 'Teamwork'],
	},
];

const experience = [
	{
		year: '2022 - Present',
		title: 'Senior Frontend Developer',
		company: 'Tech Company',
		description: 'Leading frontend development of large-scale web applications using React, TypeScript and Next.js.',
	},
	{
		year: '2018 - 2022',
		title: 'Frontend Developer',
		company: 'Digital Agency',
		description: 'Built and maintained client projects across multiple industries using modern frameworks.',
	},
	{
		year: '2014 - 2018',
		title: 'Junior Frontend Developer',
		company: 'Startup Inc.',
		description: 'Developed responsive user interfaces and improved performance across key products.',
	},
];

export function AboutContent() {
	return (
		<div className="pt-32 pb-20">
			{/* Hero */}
			<section className="px-6 mb-32">
				<div className="max-w-7xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center mb-20"
					>
						<h1 className="text-6xl md:text-7xl tracking-tight mb-6 text-black dark:text-white font-medium">
							About Me
						</h1>
						<p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
							A passionate developer and designer focused on creating impactful digital experiences
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 gap-16 items-center">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.2, duration: 0.8 }}
							className="relative"
						>
							<div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100 dark:bg-gray-800">
								<Image
									src={profilePic}
									alt="Gaston Allende - Frontend Developer"
									className="w-full h-full object-cover"
								/>
							</div>

							{/* Floating badge */}
							<motion.div
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 0.6, duration: 0.8 }}
								className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700"
							>
								<div className="text-4xl font-bold text-black dark:text-white">10+</div>
								<div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
							</motion.div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.4, duration: 0.8 }}
						>
							<h2 className="text-4xl tracking-tight mb-6 text-black dark:text-white font-medium">
								Creating Digital Excellence
							</h2>
							<div className="space-y-4 text-gray-600 dark:text-gray-400">
								<p>
									With over 10 years of experience in web development and design, I specialize in building modern,
									scalable applications that delight users and drive business results.
								</p>
								<p>
									My approach combines technical expertise with creative thinking, ensuring every project not only looks
									great but performs exceptionally well across all devices and platforms.
								</p>
								<p>
									I believe in clean code, intuitive design, and continuous learning. When I&#39;m not coding, you&#39;ll
									find me exploring new technologies or contributing to open-source projects.
								</p>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Skills */}
			<section className="px-6 py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
				<div className="max-w-7xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<h2 className="text-5xl tracking-tight mb-4 text-black dark:text-white font-medium">Skills &amp; Expertise</h2>
						<p className="text-xl text-gray-600 dark:text-gray-400">Tools and technologies I work with</p>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						{skills.map((skill, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1, duration: 0.8 }}
								whileHover={{ y: -5 }}
								className="p-8 rounded-3xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
							>
								<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center mb-6">
									<skill.icon className="w-6 h-6 text-black dark:text-white" />
								</div>
								<h3 className="text-xl mb-4 text-black dark:text-white">{skill.title}</h3>
								<ul className="space-y-2">
									{skill.items.map((item, i) => (
										<li key={i} className="text-gray-600 dark:text-gray-400 text-sm">
											• {item}
										</li>
									))}
								</ul>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Experience Timeline */}
			<section className="px-6 py-32">
				<div className="max-w-4xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<h2 className="text-5xl tracking-tight mb-4 text-black dark:text-white font-medium">Experience</h2>
					</motion.div>

					<div className="space-y-12">
						{experience.map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: -30 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.2, duration: 0.8 }}
								className="flex gap-8 items-start"
							>
								<div className="text-sm text-gray-600 dark:text-gray-400 min-w-[140px]">{item.year}</div>
								<div className="flex-1 border-l border-gray-200 dark:border-gray-700 pl-8">
									<h3 className="text-2xl mb-1 text-black dark:text-white">{item.title}</h3>
									<p className="text-gray-600 dark:text-gray-400 mb-2">{item.company}</p>
									<p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
