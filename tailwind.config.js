/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				xxxs: "280px",
				xxs: "320px",
				xs: "375px",
				sm: "425px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1440px",
				"3xl": "1920px",
			},
			backgroundColor: {
				light: "#FEFEFE",
				dark: "#070707",
			},
			fontSize: {
				head: 70,
				"sub-head": 45,
				par: 25,
			},
			fontFamily: {
				main: ["Poppins", "sans-serif"],
				head: ["ArupalaGrotesk-Ultra", "sans-serif"],
			},
			textColor: {
				paragraph: "#3C3C3C",
			},
			boxShadow: {
				custom: "0 0 40px rgba(0, 0, 0, 0.5)",
			},
		},
	},
	plugins: [],
};
