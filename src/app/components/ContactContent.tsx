'use client';

import { motion } from 'motion/react';
import { Mail, MapPin, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './BrandIcons';
import { useState } from 'react';

const contactInfo = [
	{
		icon: Mail,
		label: 'Email',
		value: 'gaston.saavedra@me.com',
		link: 'mailto:gaston.saavedra@me.com',
	},
	{
		icon: MapPin,
		label: 'Location',
		value: 'Argentina',
	},
];

const socialLinks = [
	{ icon: GithubIcon, label: 'GitHub', link: 'https://github.com/GastonAllende' },
	{ icon: LinkedinIcon, label: 'LinkedIn', link: 'https://www.linkedin.com/in/gaston-allende-520b1734' },
	{ icon: TwitterIcon, label: 'Twitter', link: 'https://twitter.com' },
];

export function ContactContent() {
	const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitted(true);
		setTimeout(() => setSubmitted(false), 4000);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

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
						Get In Touch
					</h1>
					<p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
						Have a project in mind? Let&#39;s discuss how we can work together to bring your ideas to life.
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-16">
					{/* Contact Info */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2, duration: 0.8 }}
					>
						<h2 className="text-4xl tracking-tight mb-8 text-black dark:text-white font-medium">
							Let&#39;s Start a Conversation
						</h2>
						<p className="text-gray-600 dark:text-gray-400 mb-12">
							Whether you have a question, want to start a project, or simply want to connect, feel free to reach out.
							I&#39;m always open to discussing new opportunities and ideas.
						</p>

						{/* Contact Details */}
						<div className="space-y-6 mb-12">
							{contactInfo.map((item, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
									className="flex items-center gap-4"
								>
									<div className="w-12 h-12 rounded-2xl bg-linear-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
										<item.icon className="w-5 h-5 text-black dark:text-white" />
									</div>
									<div>
										<div className="text-sm text-gray-600 dark:text-gray-400">{item.label}</div>
										{item.link ? (
											<a
												href={item.link}
												className="text-lg text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
											>
												{item.value}
											</a>
										) : (
											<div className="text-lg text-black dark:text-white">{item.value}</div>
										)}
									</div>
								</motion.div>
							))}
						</div>

						{/* Social Links */}
						<div>
							<h3 className="text-sm uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-4">Follow Me</h3>
							<div className="flex gap-4">
								{socialLinks.map((social, index) => (
									<motion.a
										key={index}
										href={social.link}
										target="_blank"
										rel="noopener noreferrer"
										whileHover={{ scale: 1.1, y: -2 }}
										whileTap={{ scale: 0.95 }}
										className="w-12 h-12 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center hover:bg-gray-900 dark:hover:bg-gray-100 transition-colors"
										aria-label={social.label}
									>
										<social.icon className="w-5 h-5" />
									</motion.a>
								))}
							</div>
						</div>
					</motion.div>

					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.4, duration: 0.8 }}
					>
						<form
							onSubmit={handleSubmit}
							className="bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 md:p-12 rounded-3xl border border-gray-100 dark:border-gray-700"
						>
							<div className="space-y-6">
								<div>
									<label htmlFor="name" className="block text-sm mb-2 text-gray-700 dark:text-gray-300">
										Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-black dark:text-white focus:border-black dark:focus:border-white focus:outline-none transition-colors"
										placeholder="Your name"
									/>
								</div>

								<div>
									<label htmlFor="email" className="block text-sm mb-2 text-gray-700 dark:text-gray-300">
										Email
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-black dark:text-white focus:border-black dark:focus:border-white focus:outline-none transition-colors"
										placeholder="your@email.com"
									/>
								</div>

								<div>
									<label htmlFor="subject" className="block text-sm mb-2 text-gray-700 dark:text-gray-300">
										Subject
									</label>
									<input
										type="text"
										id="subject"
										name="subject"
										value={formData.subject}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-black dark:text-white focus:border-black dark:focus:border-white focus:outline-none transition-colors"
										placeholder="Project inquiry"
									/>
								</div>

								<div>
									<label htmlFor="message" className="block text-sm mb-2 text-gray-700 dark:text-gray-300">
										Message
									</label>
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleChange}
										required
										rows={5}
										className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-black dark:text-white focus:border-black dark:focus:border-white focus:outline-none transition-colors resize-none"
										placeholder="Tell me about your project..."
									/>
								</div>

								<motion.button
									type="submit"
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									className="w-full py-4 bg-black dark:bg-white text-white dark:text-black rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-900 dark:hover:bg-gray-100 transition-colors font-medium"
								>
									{submitted ? 'Message Sent!' : 'Send Message'}
									<Send className="w-4 h-4" />
								</motion.button>
							</div>
						</form>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
