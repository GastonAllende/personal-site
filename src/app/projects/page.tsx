import type { Metadata } from 'next';
import { ProjectsContent } from '../components/ProjectsContent';

export const metadata: Metadata = {
	title: 'Projects - Gaston Allende',
	description: 'Explore the projects built by Gaston Allende — from web apps to design systems.',
};

export default function Projects() {
	return <ProjectsContent />;
}
