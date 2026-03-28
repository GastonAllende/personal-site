'use client';

import { motion } from 'motion/react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

const socialLinks = [
  { icon: GithubIcon, label: 'GitHub', url: 'https://github.com/GastonAllende' },
  { icon: LinkedinIcon, label: 'LinkedIn', url: 'https://www.linkedin.com/in/gaston-allende-520b1734' },
  { icon: Mail, label: 'Email', url: 'mailto:gaston.saavedra@me.com' },
];

const Footer: React.FC = () => {
  const t = useTranslations('Footer');
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const navLinks = [
    { label: t('home'), path: '/' as const },
    { label: t('about'), path: '/about' as const },
    { label: t('projects'), path: '/projects' as const },
    { label: t('contact'), path: '/contact' as const },
  ];

  const connectLinks = [
    { label: 'GitHub', url: 'https://github.com/GastonAllende' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/gaston-allende-520b1734' },
    { label: 'Email', url: 'mailto:gaston.saavedra@me.com' },
  ];

  const footerSections = [
    { title: t('navigation'), links: navLinks },
    { title: t('connect'), links: connectLinks },
  ];

  return (
    <footer className="relative bg-linear-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl mb-4 font-medium">Gaston Allende</h3>
            <p className="text-gray-400 mb-6">
              {t('tagline')}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (sectionIndex + 1) * 0.1 }}
            >
              <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, index) => (
                  <li key={index}>
                    {'path' in link ? (
                      <Link href={link.path}>
                        <motion.span
                          whileHover={{ x: 4 }}
                          className="text-gray-300 hover:text-white transition-colors inline-block"
                        >
                          {link.label}
                        </motion.span>
                      </Link>
                    ) : (
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        <motion.span
                          whileHover={{ x: 4 }}
                          className="text-gray-300 hover:text-white transition-colors inline-block"
                        >
                          {link.label}
                        </motion.span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            {t('copyright', { year: new Date().getFullYear() })}
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label={t('scrollToTop')}
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
