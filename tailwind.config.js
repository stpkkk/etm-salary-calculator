/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#FFF8DB',
				secondary: '#1F8A70',
				dark: '#00425A',
			},
			screens: {
				sm: { max: '768px' },
				md: { max: '1024px' },
				lg: { max: '1280px' },
			},
			fontFamily: {
				nunito: ['Nunito', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
