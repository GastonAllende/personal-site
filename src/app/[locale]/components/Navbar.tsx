'use client';

import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { useEffect, useState, useMemo } from 'react';
import { Sun, Moon, Menu, X, Globe } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Link } from '@/i18n/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { useRouter } from '@/i18n/navigation';

const localeLabels: Record<string, string> = {
	en: 'EN',
	sv: 'SV',
	es: 'ES',
};

const Navbar: React.FC = () => {
	const t = useTranslations('Navbar');
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();
	const [scrolled, setScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [langMenuOpen, setLangMenuOpen] = useState(false);
	const { theme, toggleTheme } = useTheme();

	const navItems = useMemo(() => [
		{ path: '/' as const, label: t('home') },
		{ path: '/about' as const, label: t('about') },
		{ path: '/projects' as const, label: t('projects') },
		{ path: '/contact' as const, label: t('contact') },
	], [t]);

	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Strip locale prefix from pathname for active link matching
	const pathnameWithoutLocale = useMemo(
		() => pathname.replace(new RegExp(`^/${locale}`), '') || '/',
		[pathname, locale]
	);

	const switchLocale = (newLocale: string) => {
		router.replace(pathnameWithoutLocale as '/', { locale: newLocale });
		setLangMenuOpen(false);
	};

	return (
		<>
			{/* Scroll Progress Indicator */}
			<motion.div
				className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-60"
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
								const isActive = pathnameWithoutLocale === item.path;
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

							{/* Language Switcher */}
							<div className="relative">
								<motion.button
									onClick={() => setLangMenuOpen(!langMenuOpen)}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
									aria-label="Change language"
								>
									<Globe className="w-4 h-4 text-gray-700 dark:text-gray-300" />
								</motion.button>
								<AnimatePresence>
									{langMenuOpen && (
										<motion.div
											initial={{ opacity: 0, y: 8 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: 8 }}
											className="absolute right-0 mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden"
										>
											{routing.locales.map((loc) => (
												<button
													key={loc}
													onClick={() => switchLocale(loc)}
													className={`block w-full px-4 py-2 text-sm text-left transition-colors ${locale === loc
														? 'bg-gray-100 dark:bg-gray-700 text-black dark:text-white font-medium'
														: 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
														}`}
												>
													{localeLabels[loc]}
												</button>
											))}
										</motion.div>
									)}
								</AnimatePresence>
							</div>

							{/* Theme Toggle */}
							<motion.button
								onClick={toggleTheme}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
								aria-label={t('toggleTheme')}
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
							{/* Mobile Language Switcher */}
							<div className="relative">
								<motion.button
									onClick={() => setLangMenuOpen(!langMenuOpen)}
									whileTap={{ scale: 0.95 }}
									className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
									aria-label="Change language"
								>
									<Globe className="w-4 h-4 text-gray-700 dark:text-gray-300" />
								</motion.button>
								<AnimatePresence>
									{langMenuOpen && (
										<motion.div
											initial={{ opacity: 0, y: 8 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: 8 }}
											className="absolute right-0 mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden z-50"
										>
											{routing.locales.map((loc) => (
												<button
													key={loc}
													onClick={() => switchLocale(loc)}
													className={`block w-full px-4 py-2 text-sm text-left transition-colors ${locale === loc
														? 'bg-gray-100 dark:bg-gray-700 text-black dark:text-white font-medium'
														: 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
														}`}
												>
													{localeLabels[loc]}
												</button>
											))}
										</motion.div>
									)}
								</AnimatePresence>
							</div>

							<motion.button
								onClick={toggleTheme}
								whileTap={{ scale: 0.95 }}
								className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
								aria-label={t('toggleTheme')}
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
								aria-label={t('toggleMenu')}
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
								const isActive = pathnameWithoutLocale === item.path;
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
