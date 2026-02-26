import { browser } from '$app/environment';

class Theme {
	current = $state<'light' | 'dark'>(
		(browser && (localStorage.getItem('theme') as 'light' | 'dark')) ||
			(browser && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') ||
			'light'
	);

	constructor() {
		this.init();
	}

	toggle() {
		this.current = this.current === 'light' ? 'dark' : 'light';
		if (browser) {
			localStorage.setItem('theme', this.current);
			this.apply();
		}
	}

	apply() {
		if (browser) {
			document.documentElement.classList.toggle('dark', this.current === 'dark');
			document.documentElement.classList.toggle('light', this.current === 'light');
		}
	}

	init() {
		if (browser) {
			const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
			if (savedTheme) {
				this.current = savedTheme;
			} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				this.current = 'dark';
			}
			this.apply();
		}
	}
}

export const theme = new Theme();
