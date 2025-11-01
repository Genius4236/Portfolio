/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backdropBlur: {
				sm: '4px',
			  },
			colors: {
				'neon-green': '#00ff00',
				'electric-blue': '#00ffff',
				'magenta': '#ff00ff',
				'cyber-red': '#ff073a',
				'dark-bg': '#0a0a0a',
				'hack-gray': '#1a1a1a',
				'neon-yellow': '#ffff00',
				'cyber-purple': '#8a2be2',
			},
			animation: {
				'glow': 'glow 2s ease-in-out infinite alternate',
				'pulse-neon': 'pulse-neon 1.5s ease-in-out infinite',
			},
			keyframes: {
				glow: {
					'0%': { boxShadow: '0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00' },
					'100%': { boxShadow: '0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00' },
				},
				'pulse-neon': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' },
				},
			},
		  },
		},
	plugins: [],
}
