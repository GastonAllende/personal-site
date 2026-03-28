import { getTranslations, setRequestLocale } from 'next-intl/server';
import { HomeContent } from './components/HomeContent';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: 'Home' });
	return {
		title: t('metadata.title'),
		description: t('metadata.description'),
	};
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = await params;
	setRequestLocale(locale);
	return <HomeContent />;
}
