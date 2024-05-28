import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss/types';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			xs: '560px',
			...defaultTheme.screens
		},
		extend: {}
	},
	plugins: [typography]
} satisfies Config;
