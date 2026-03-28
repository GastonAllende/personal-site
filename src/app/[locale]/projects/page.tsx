import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ProjectsContent } from '../components/ProjectsContent';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: 'Projects' });
	return {
		title: t('metadata.title'),
		description: t('metadata.description'),
	};
}

export default async function Projects({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = await params;
	setRequestLocale(locale);
	return <ProjectsContent />;
}
