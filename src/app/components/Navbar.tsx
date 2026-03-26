'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const navItems = [
	{ path: '/', label: 'HOME' },
	{ path: '/about', label: 'ABOUT' },
	{ path: '/projects', label: 'PROJECTS' },
	{ path: '/contact', label: 'CONTACT' },
];

const Navbar: React.FC = () => {
	const pathname = usePathname();
	const [scrolled, setScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const { theme, toggleTheme } = useTheme();

	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			{/* Scroll Progress Indicator */}
			<motion.div
				className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-[60]"
				style={{ scaleX }}
			/>

			{/* Navigation */}
			<motion.nav
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
					? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl shadow-sm'
					: 'bg-transparent'
					}`}
			>
				<div className="max-w-7xl mx-auto px-6 py-4">
					<div className="flex items-center justify-between">
						<Link href="/">
							<motion.div
								whileHover={{ scale: 1.05 }}
								className="text-2xl font-semibold tracking-tight text-black dark:text-white"
							>
								Gaston Allende
							</motion.div>
						</Link>

						{/* Desktop Navigation */}
						<div className="hidden md:flex items-center gap-8">
							{navItems.map((item) => {
								const isActive = pathname === item.path;
								return (
									<Link key={item.path} href={item.path}>
										<motion.div whileHover={{ scale: 1.05 }} className="relative">
											<span
												className={`text-sm tracking-wide transition-colors ${isActive
													? 'text-black dark:text-white'
													: 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
													}`}
											>
												{item.label}
											</span>
											{isActive && (
												<motion.div
													layoutId="activeNav"
													className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black dark:bg-white"
													transition={{ type: 'spring', stiffness: 380, damping: 30 }}
												/>
											)}
										</motion.div>
									</Link>
								);
							})}

							{/* Theme Toggle */}
							<motion.button
								onClick={toggleTheme}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
								aria-label="Toggle theme"
							>
								<motion.div
									initial={false}
									animate={{ rotate: theme === 'dark' ? 180 : 0 }}
									transition={{ duration: 0.3 }}
								>
									{theme === 'light' ? (
										<Moon className="w-4 h-4 text-gray-700" />
									) : (
										<Sun className="w-4 h-4 text-yellow-400" />
									)}
								</motion.div>
							</motion.button>
						</div>

						{/* Mobile Header Buttons */}
						<div className="flex md:hidden items-center gap-4">
							<motion.button
								onClick={toggleTheme}
								whileTap={{ scale: 0.95 }}
								className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
								aria-label="Toggle theme"
							>
								{theme === 'light' ? (
									<Moon className="w-4 h-4 text-gray-700" />
								) : (
									<Sun className="w-4 h-4 text-yellow-400" />
								)}
							</motion.button>

							<motion.button
								onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
								whileTap={{ scale: 0.95 }}
								className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
								aria-label="Toggle menu"
							>
								{mobileMenuOpen ? (
									<X className="w-5 h-5 dark:text-white" />
								) : (
									<Menu className="w-5 h-5 dark:text-white" />
								)}
							</motion.button>
						</div>
					</div>
				</div>
			</motion.nav>

			{/* Mobile Menu */}
			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, x: '100%' }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: '100%' }}
						transition={{ type: 'spring', damping: 25, stiffness: 200 }}
						className="fixed inset-0 z-40 md:hidden bg-white dark:bg-gray-950"
					>
						<div className="flex flex-col items-center justify-center h-full gap-8">
							{navItems.map((item, index) => {
								const isActive = pathname === item.path;
								return (
									<Link key={item.path} href={item.path} onClick={() => setMobileMenuOpen(false)}>
										<motion.div
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: index * 0.1 }}
											whileTap={{ scale: 0.95 }}
										>
											<span
												className={`text-3xl tracking-wide transition-colors ${isActive
													? 'text-black dark:text-white font-semibold'
													: 'text-gray-600 dark:text-gray-400'
													}`}
											>
												{item.label}
											</span>
										</motion.div>
									</Link>
								);
							})}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Navbar;

