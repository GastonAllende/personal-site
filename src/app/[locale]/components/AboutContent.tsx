'use client';

import { motion } from 'motion/react';
import { Code2, Server, ShieldCheck, Users, GraduationCap, Globe } from 'lucide-react';
import Image from 'next/image';
import profilePic from '../../../../public/images/gaston-me.png';
import { useTranslations } from 'next-intl';

const skillIcons = [Code2, Server, ShieldCheck, Users];

export function AboutContent() {
	const t = useTranslations('About');
	const skillCategories = t.raw('skills.categories') as Array<{ title: string; items: string[]; }>;
	const experienceItems = t.raw('experience.items') as Array<{
		year: string;
		title: string;
		company: string;
		description: string;
	}>;
	const educationItems = t.raw('education.items') as Array<{
		period: string;
		school: string;
		degree: string;
		highlights: string[];
	}>;
	const bioParagraphs = t.raw('bio.paragraphs') as string[];
	const languageItems = t.raw('languages.items') as Array<{
		language: string;
		level: string;
	}>;

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
							{t('hero.title')}
						</h1>
						<p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
							{t('hero.subtitle')}
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 gap-16 items-center">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.2, duration: 0.8 }}
							className="relative"
						>
							<div className="aspect-4/5 rounded-3xl overflow-hidden bg-gray-100 dark:bg-gray-800">
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
								<div className="text-4xl font-bold text-black dark:text-white">12+</div>
								<div className="text-sm text-gray-600 dark:text-gray-400">{t('bio.yearsExperience')}</div>
							</motion.div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.4, duration: 0.8 }}
						>
							<h2 className="text-4xl tracking-tight mb-6 text-black dark:text-white font-medium">
								{t('bio.title')}
							</h2>
							<div className="space-y-4 text-gray-600 dark:text-gray-400">
								{bioParagraphs.map((paragraph, i) => (
									<p key={i}>{paragraph}</p>
								))}
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Skills */}
			<section className="px-6 py-20 bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
				<div className="max-w-7xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<h2 className="text-5xl tracking-tight mb-4 text-black dark:text-white font-medium">{t('skills.title')}</h2>
						<p className="text-xl text-gray-600 dark:text-gray-400">{t('skills.subtitle')}</p>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						{skillCategories.map((skill, index) => {
							const Icon = skillIcons[index];
							return (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1, duration: 0.8 }}
									whileHover={{ y: -5 }}
									className="p-8 rounded-3xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
								>
									<div className="w-12 h-12 rounded-2xl bg-linear-to-br from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center mb-6">
										<Icon className="w-6 h-6 text-black dark:text-white" />
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
							);
						})}
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
						<h2 className="text-5xl tracking-tight mb-4 text-black dark:text-white font-medium">{t('experience.title')}</h2>
					</motion.div>

					<div className="space-y-12">
						{experienceItems.map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: -30 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1, duration: 0.8 }}
								className="flex flex-col md:flex-row md:gap-8"
							>
								<div className="text-sm text-gray-600 dark:text-gray-400 mb-2 md:mb-0 md:min-w-40 md:pt-1">{item.year}</div>
								<div className="flex-1 border-l-2 border-gray-200 dark:border-gray-700 pl-6 md:pl-8 pb-2">
									<h3 className="text-xl md:text-2xl mb-1 text-black dark:text-white">{item.title}</h3>
									<p className="text-gray-600 dark:text-gray-400 mb-2">{item.company}</p>
									<p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Education */}
			<section className="px-6 py-32 bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
				<div className="max-w-4xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<h2 className="text-5xl tracking-tight mb-4 text-black dark:text-white font-medium">{t('education.title')}</h2>
					</motion.div>

					<div className="space-y-8">
						{educationItems.map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: -30 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1, duration: 0.8 }}
								className="flex flex-col md:flex-row md:gap-8"
							>
								<div className="text-sm text-gray-600 dark:text-gray-400 mb-2 md:mb-0 md:min-w-40 md:pt-1">{item.period}</div>
								<div className="flex-1 border-l-2 border-gray-200 dark:border-gray-700 pl-6 md:pl-8 pb-2">
									<div className="flex items-center gap-3 mb-1">
										<GraduationCap className="w-5 h-5 text-gray-400 dark:text-gray-500 shrink-0" />
										<h3 className="text-xl md:text-2xl text-black dark:text-white">{item.degree}</h3>
									</div>
									<p className="text-gray-600 dark:text-gray-400 mb-3">{item.school}</p>
									<div className="flex flex-wrap gap-2">
										{item.highlights.map((tag) => (
											<span
												key={tag}
												className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700"
											>
												{tag}
											</span>
										))}
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Languages */}
			<section className="px-6 py-20">
				<div className="max-w-4xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="text-center mb-12"
					>
						<h2 className="text-5xl tracking-tight mb-4 text-black dark:text-white font-medium">{t('languages.title')}</h2>
					</motion.div>

					<div className="flex flex-wrap justify-center gap-6">
						{languageItems.map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1, duration: 0.6 }}
								className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
							>
								<Globe className="w-5 h-5 text-gray-400 dark:text-gray-500" />
								<div>
									<span className="text-lg text-black dark:text-white font-medium">{item.language}</span>
									<span className="text-gray-600 dark:text-gray-400 ml-2">— {item.level}</span>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
