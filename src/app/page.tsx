import type { Metadata } from 'next';
import { HomeContent } from './components/HomeContent';

export const metadata: Metadata = {
  title: 'Gaston Allende - Frontend Developer',
  description:
    'Passionate Frontend developer with a touch of backend and design skills. Over 10 years of industry experience.',
};

export default function Home() {
  return <HomeContent />;
}
