import adapter from '@sveltejs/adapter-static';
import { existsSync } from 'node:fs';

const dev = process.argv.includes('dev');
const hasCustomDomain = existsSync('static/CNAME');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		appDir: 'app',
		paths: {
			// Custom domains should deploy at the root even if CI exports BASE_PATH for project pages.
			base: dev ? '' : hasCustomDomain ? '' : (process.env.BASE_PATH ?? '')
		}
	}
};

export default config;
