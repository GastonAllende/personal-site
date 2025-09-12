import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gaston-allende.com'), // Replace with your actual domain
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
