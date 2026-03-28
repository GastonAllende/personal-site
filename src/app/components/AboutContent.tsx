'use client';

import { motion } from 'motion/react';
import { Code2, Server, Brain, Users, GraduationCap } from 'lucide-react';
import Image from 'next/image';
import profilePic from '../../../public/images/gaston-me.png';

const skills = [
	{
		icon: Code2,
		title: 'Frontend',
		items: ['Angular', 'TypeScript', 'RxJS', 'React'],
	},
	{
		icon: Server,
		title: 'Backend & Tools',
		items: ['C#', 'REST APIs', 'Docker', 'Azure DevOps'],
	},
	{
		icon: Brain,
		title: 'AI & Python',
		items: ['Python', 'Generative AI', 'LLMs', 'Machine Learning'],
	},
	{
		icon: Users,
		title: 'Methodology',
		items: ['Agile / Scrum', 'Kanban', 'Git', 'Jira'],
	},
];

const education = [
	{
		period: 'Sep 2024 - Nov 2024',
		school: 'Nackademin',
		degree: 'Prompt Engineering and Generative AI for Developers',
		highlights: ['Prompt Engineering', 'Generative AI', 'LLMs'],
	},
	{
		period: '2016 - 2018',
		school: 'Lernia Yrkeshögskola',
		degree: 'Backend Development - C#/.NET',
		highlights: ['C#', '.NET', 'RESTful API', 'SQL Server', 'Agile Methods'],
	},
	{
		period: '2013 - 2015',
		school: 'JENSEN yrkeshögskola',
		degree: 'Web Development',
		highlights: ['JavaScript', 'Node.js', 'HTML/CSS/SASS', 'PHP', 'MySQL', 'Responsive Design'],
	},
	{
		period: '2012 - 2013',
		school: 'Jensen Education / Komvux',
		degree: 'Programming',
		highlights: ['Programming fundamentals'],
	},
];

const experience = [
	{
		year: 'Jan 2026 - Present',
		title: 'Software Developer (Frontend Focus)',
		company: 'Enity Bank Group',
		description: 'Leading frontend development with Angular and TypeScript in a financial sector environment, focusing on stable, maintainable enterprise applications.',
	},
	{
		year: 'May 2023 - Dec 2025',
		title: 'Frontend Developer',
		company: 'Enity Bank Group',
		description: 'Built and maintained user-facing features for banking applications using Angular, TypeScript, RxJS, and Angular Material.',
	},
	{
		year: 'Jan 2023 - May 2023',
		title: 'Frontend Developer (consultant)',
		company: 'Invidem',
		description: 'Consulting assignment delivering frontend solutions with Angular and TypeScript.',
	},
	{
		year: 'Jan 2020 - May 2023',
		title: 'Frontend Developer',
		company: 'FreeCode AB',
		description: 'Developed frontend applications for multiple clients including Xylem Water Solutions, working with Angular and TypeScript in an Agile environment.',
	},
	{
		year: 'Feb 2020 - Jan 2023',
		title: 'Frontend Developer (consultant)',
		company: 'Xylem Water Solutions Sweden',
		description: 'Consulting assignment building and maintaining frontend features with Angular, RxJS, and REST APIs.',
	},
	{
		year: 'Apr 2017 - Jan 2020',
		title: 'System Developer',
		company: 'Handelsbanken',
		description: 'Full-stack development in a banking environment using AngularJS, C#, SQL DB2, and IBM WebSphere technologies.',
	},
	{
		year: 'Dec 2015 - Apr 2017',
		title: 'Frontend Developer',
		company: 'Bigspin',
		description: 'Frontend development with JavaScript, AngularJS, HTML, CSS, and SASS for digital products.',
	},
	{
		year: 'Jan 2015 - Dec 2015',
		title: 'Frontend Developer (Freelance)',
		company: 'Yid - Digitalbyrå',
		description: 'Freelance frontend development including WordPress, jQuery, HTML, and CSS for client websites.',
	},
	{
		year: 'Sep 2014 - Nov 2014',
		title: 'Frontend Developer',
		company: 'Klirr Stockholm AB',
		description: 'Frontend development with HTML, CSS, JavaScript, and jQuery.',
	},
	{
		year: 'Jul 2014 - Aug 2014',
		title: 'Frontend Developer',
		company: 'Situs Media AB',
		description: 'Frontend development with HTML, CSS, PHP, and JavaScript.',
	},
	{
		year: 'Apr 2014 - Jun 2014',
		title: 'Frontend Developer',
		company: 'Situs Media AB',
		description: 'Frontend development with HTML, CSS, PHP, and JavaScript.',
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
							Frontend specialist with 12+ years of experience building enterprise applications, now expanding into AI and Python
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
								<div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
							</motion.div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.4, duration: 0.8 }}
						>
							<h2 className="text-4xl tracking-tight mb-6 text-black dark:text-white font-medium">
								Building for the Long Term
							</h2>
							<div className="space-y-4 text-gray-600 dark:text-gray-400">
								<p>
									I&#39;ve been working as a developer for over 12 years, mainly focused on frontend development
									with Angular in enterprise environments. Over time, I&#39;ve also explored the backend side
									with C# and .NET, which has helped me understand how systems fit together beyond just the UI.
								</p>
								<p>
									Today, I work in the financial sector building stable and maintainable applications, and I enjoy
									being part of teams that care about long-term quality rather than quick fixes.
								</p>
								<p>
									Recently, I&#39;ve started moving toward AI and generative AI, learning Python and gradually
									building knowledge in that space, step by step &#8212; especially where frontend, backend, and AI intersect.
								</p>
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
								<div className="w-12 h-12 rounded-2xl bg-linear-to-br from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center mb-6">
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
								<div className="text-sm text-gray-600 dark:text-gray-400 min-w-35">{item.year}</div>
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
						<h2 className="text-5xl tracking-tight mb-4 text-black dark:text-white font-medium">Education</h2>
					</motion.div>

					<div className="space-y-8">
						{education.map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: -30 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.15, duration: 0.8 }}
								className="flex gap-8 items-start"
							>
								<div className="text-sm text-gray-600 dark:text-gray-400 min-w-35">{item.period}</div>
								<div className="flex-1 border-l border-gray-200 dark:border-gray-700 pl-8">
									<div className="flex items-center gap-3 mb-1">
										<GraduationCap className="w-5 h-5 text-gray-400 dark:text-gray-500 shrink-0" />
										<h3 className="text-2xl text-black dark:text-white">{item.degree}</h3>
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
		</div>
	);
}
