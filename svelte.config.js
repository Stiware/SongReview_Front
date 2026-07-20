import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
export default {
	compilerOptions: {
		runes: true
	},

	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),

		paths: {
			base: process.env.BASE_PATH || ''
		},

		prerender: {
			handleHttpError: ({ path }) => {
				if (path === '/' || path === '') return;
				throw new Error(`Failed to prerender ${path}`);
			}
		}
	}
};
