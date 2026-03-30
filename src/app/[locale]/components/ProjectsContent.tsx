'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState, useMemo } from 'react';
import { X, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { GithubIcon } from './BrandIcons';
import { useTranslations } from 'next-intl';

const MotionImage = motion(Image);

interface Project {
	title: string;
	category: string;
	description: string;
	fullDescription: string;
	image: string;
	technologies: string[];
	link?: string;
	github?: string;
}

const projectMeta = [
	{
		image: 'https://images.unsplash.com/photo-1707836868495-3307d371aba4?w=800&q=80',
		technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
		link: 'https://example.com',
		github: 'https://github.com/GastonAllende',
	},
	{
		image: 'https://images.unsplash.com/photo-1760071744047-5542cbfda184?w=800&q=80',
		technologies: ['Figma', 'React', 'Storybook', 'TypeScript'],
		link: 'https://example.com',
	},
	{
		image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=800&q=80',
		technologies: ['React', 'TypeScript', 'D3.js', 'FastAPI', 'Redis'],
		link: 'https://example.com',
	},
	{
		image: 'https://images.unsplash.com/photo-1695067440629-b5e513976100?w=800&q=80',
		technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'Redis', 'WebSocket'],
		github: 'https://github.com/GastonAllende',
	},
	{
		image: 'https://images.unsplash.com/photo-1658806283210-6d7330062704?w=800&q=80',
		technologies: ['React Native', 'Firebase', 'Node.js', 'MongoDB'],
		github: 'https://github.com/GastonAllende',
	},
	{
		image: 'https://images.unsplash.com/photo-1644337540803-2b2fb3cebf12?w=800&q=80',
		technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Storybook'],
		github: 'https://github.com/GastonAllende',
	},
];

export function ProjectsContent() {
	const t = useTranslations('Projects');
	const translatedItems = t.raw('items') as Array<{
		title: string;
		category: string;
		description: string;
		fullDescription: string;
	}>;

	const projects: Project[] = useMemo(
		() => translatedItems.map((item, i) => ({ ...item, ...projectMeta[i] })),
		[translatedItems]
	);

	const [selectedProject, setSelectedProject] = useState<Project | null>(null);

	return (
		<div className="pt-32 pb-20 px-6">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-20"
				>
					<h1 className="text-6xl md:text-7xl tracking-tight mb-6 text-black dark:text-white font-medium">
						{t('header.title')}
					</h1>
					<p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
						{t('header.subtitle')}
					</p>
				</motion.div>

				{/* Projects Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1, duration: 0.8 }}
							whileHover={{ y: -5 }}
							onClick={() => setSelectedProject(project)}
							className="group cursor-pointer"
						>
							<div className="rounded-3xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-gray-900/50 transition-all duration-300">
								<div className="relative aspect-4/3 overflow-hidden bg-gray-100 dark:bg-gray-700">
									<MotionImage
										whileHover={{ scale: 1.05 }}
										transition={{ duration: 0.4 }}
										src={project.image}
										alt={project.title}
										fill
										sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
										className="object-cover"
									/>
								</div>
								<div className="p-6">
									<div className="text-sm text-gray-600 dark:text-gray-400 mb-2">{project.category}</div>
									<h3 className="text-2xl mb-2 text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
										{project.title}
									</h3>
									<p className="text-gray-600 dark:text-gray-400">{project.description}</p>
									<div className="mt-4 flex flex-wrap gap-2">
										{project.technologies.slice(0, 3).map((tech, i) => (
											<span
												key={i}
												className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs"
											>
												{tech}
											</span>
										))}
										{project.technologies.length > 3 && (
											<span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs">
												+{project.technologies.length - 3}
											</span>
										)}
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Project Modal */}
			<AnimatePresence>
				{selectedProject && (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setSelectedProject(null)}
							className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
						/>

						<div className="fixed inset-0 z-50 overflow-y-auto">
							<div className="min-h-full flex items-center justify-center p-4">
								<motion.div
									initial={{ opacity: 0, scale: 0.95, y: 20 }}
									animate={{ opacity: 1, scale: 1, y: 0 }}
									exit={{ opacity: 0, scale: 0.95, y: 20 }}
									transition={{ duration: 0.3 }}
									className="relative bg-white dark:bg-gray-800 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl"
									onClick={(e) => e.stopPropagation()}
								>
									{/* Close Button */}
									<button
										onClick={() => setSelectedProject(null)}
										className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 transition-colors"
									>
										<X className="w-5 h-5 text-black dark:text-white" />
									</button>

									{/* Modal Image */}
									<div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-700">
										<Image
											src={selectedProject.image}
											alt={selectedProject.title}
											fill
											sizes="(max-width: 768px) 100vw, 50vw"
											className="object-cover"
										/>
									</div>

									{/* Modal Content */}
									<div className="p-8 md:p-12">
										<div className="text-sm text-gray-600 dark:text-gray-400 mb-2">{selectedProject.category}</div>
										<h2 className="text-4xl mb-4 text-black dark:text-white font-medium">{selectedProject.title}</h2>
										<p className="text-gray-600 dark:text-gray-400 mb-8">{selectedProject.fullDescription}</p>

										<div className="flex flex-wrap gap-2 mb-8">
											{selectedProject.technologies.map((tech, i) => (
												<span
													key={i}
													className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
												>
													{tech}
												</span>
											))}
										</div>

										<div className="flex gap-4">
											{selectedProject.link && (
												<a
													href={selectedProject.link}
													target="_blank"
													rel="noopener noreferrer"
													className="flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-gray-900 dark:hover:bg-gray-100 transition-colors"
												>
													<ExternalLink className="w-4 h-4" />
													{t('liveDemo')}
												</a>
											)}
											{selectedProject.github && (
												<a
													href={selectedProject.github}
													target="_blank"
													rel="noopener noreferrer"
													className="flex items-center gap-2 px-6 py-3 border-2 border-black dark:border-white text-black dark:text-white rounded-full hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors"
												>
													<GithubIcon className="w-4 h-4" />
													GitHub
												</a>
											)}
										</div>
									</div>
								</motion.div>
							</div>
						</div>
					</>
				)}
			</AnimatePresence>
		</div>
	);
}
