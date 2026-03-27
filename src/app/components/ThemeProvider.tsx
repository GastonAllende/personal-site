'use client';

import { createContext, useCallback, useContext, useEffect, useSyncExternalStore } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
	theme: Theme;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
	theme: 'light',
	toggleTheme: () => { },
});

let listeners: Array<() => void> = [];

function emitChange() {
	for (const listener of listeners) {
		listener();
	}
}

function subscribe(listener: () => void) {
	listeners = [...listeners, listener];
	return () => {
		listeners = listeners.filter((l) => l !== listener);
	};
}

function getSnapshot(): Theme {
	return (localStorage.getItem('theme') as Theme) ??
		(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}

function getServerSnapshot(): Theme {
	return 'light';
}

export function ThemeProvider({ children }: { children: React.ReactNode; }) {
	const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

	useEffect(() => {
		document.documentElement.classList.toggle('dark', theme === 'dark');
	}, [theme]);

	const toggleTheme = useCallback(() => {
		const next: Theme = theme === 'light' ? 'dark' : 'light';
		localStorage.setItem('theme', next);
		emitChange();
	}, [theme]);

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
