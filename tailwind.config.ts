import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
    	container: {
    		center: true,
    		padding: '2rem',
    		screens: {
    			'2xl': '1400px'
    		}
    	},
    	extend: {
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))',
    				50: '#f0f9ff',
    				100: '#e0f2fe',
    				200: '#bae6fd',
    				300: '#7dd3fc',
    				400: '#38bdf8',
    				500: '#0ea5e9',
    				600: '#0284c7',
    				700: '#0369a1',
    				800: '#075985',
    				900: '#0c4a6e',
    				950: '#082f49',
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			border: 'hsl(var(--border))'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			},
    			'gradient-x': {
    				'0%, 100%': {
    					'background-size': '200% 200%',
    					'background-position': 'left center'
    				},
    				'50%': {
    					'background-size': '200% 200%',
    					'background-position': 'right center'
    				}
    			},
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out',
    			'gradient-x': 'gradient-x 15s ease infinite',
    			'pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    		}
    	}
    },
    plugins: [require("tailwindcss-animate")],
};

export default config;
