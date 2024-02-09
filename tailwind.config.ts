import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				black: 'hsla(0, 0%, 8%, 1)',
				'dark-grey': 'hsla(0, 0%, 14%, 1)',
				green: 'hsla(154, 71%, 59%, 1)',
				grey: 'hsla(0, 0%, 85%, 1)',
				red: 'hsla(7, 100%, 68%, 1)',
			},
		},
	},
	plugins: [],
}
export default config
