import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';
import { Analytics } from "@vercel/analytics/next";

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

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (

    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-950 min-h-screen transition-colors duration-300" suppressHydrationWarning>
        <ThemeProvider>
          <Analytics />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
