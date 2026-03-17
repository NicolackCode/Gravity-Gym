/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        carbon: {
          DEFAULT: '#09090b', // zinc-950
          dark: '#000000',
          light: '#27272a', // zinc-800
        },
        concrete: {
          DEFAULT: '#e4e4e7', // zinc-200
          light: '#fafafa', // zinc-50
        },
        brass: '#f59e0b', // amber-500
        nature: '#10b981', // emerald-500
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-nature': '0 0 20px rgba(16, 185, 129, 0.4)',
        'glow-brass': '0 0 20px rgba(245, 158, 11, 0.4)',
        'glass': '0 4px 30px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
