import type { Metadata } from 'next';
import { ContactContent } from '../components/ContactContent';

export const metadata: Metadata = {
  title: 'Contact - Gaston Allende',
  description: 'Get in touch with Gaston Allende for frontend development opportunities and collaborations.',
};

export default function Contact() {
  return <ContactContent />;
}
