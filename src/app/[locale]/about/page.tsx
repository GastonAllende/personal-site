import { getTranslations, setRequestLocale } from 'next-intl/server';
import { AboutContent } from '../components/AboutContent';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: 'About' });
	return {
		title: t('metadata.title'),
		description: t('metadata.description'),
	};
}

export default async function About({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = await params;
	setRequestLocale(locale);
	return <AboutContent />;
}
