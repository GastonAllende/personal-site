import type { Metadata } from 'next';
import '../globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
	metadataBase: new URL('https://gastonallende.com'),
	title: {
		default: 'Gaston Allende - Frontend Developer',
		template: '%s | Gaston Allende',
	},
	description:
		'Passionate Frontend developer with over 10 years of experience in building web applications with modern technologies.',
	keywords: ['Frontend Developer', 'React', 'Next.js', 'TypeScript', 'Web Development'],
	authors: [{ name: 'Gaston Allende' }],
	creator: 'Gaston Allende',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		title: 'Gaston Allende - Frontend Developer',
		description: 'Passionate Frontend developer with over 10 years of experience',
		siteName: 'Gaston Allende Portfolio',
	},
};

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;

	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	setRequestLocale(locale);
	const messages = await getMessages();

	return (
		<html lang={locale} suppressHydrationWarning>
			<body
				className="bg-white dark:bg-gray-950 min-h-screen transition-colors duration-300"
				suppressHydrationWarning
			>
				<NextIntlClientProvider messages={messages}>
					<ThemeProvider>
						<Analytics />
						<SpeedInsights />
						<Navbar />
						{children}
						<Footer />
					</ThemeProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
