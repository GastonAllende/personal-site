import type { Metadata } from 'next';
import { AboutContent } from '../components/AboutContent';

export const metadata: Metadata = {
  title: 'About - Gaston Allende',
  description: 'Learn more about Gaston Allende, his background, experience, and education in frontend development.',
};

export default function About() {
  return <AboutContent />;
}
