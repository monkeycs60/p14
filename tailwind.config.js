/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				times: ['"Times New Roman"', 'serif'],
			},
			screens: {
				'3xl': '1740px',
			},
		},
	},
	plugins: [],
};
