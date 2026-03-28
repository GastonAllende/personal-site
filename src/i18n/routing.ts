import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
	locales: ['en', 'sv', 'es'],
	defaultLocale: 'en',
});
