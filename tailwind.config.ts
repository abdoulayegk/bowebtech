import type { Config } from 'tailwindcss'

const config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          900: '#0F172A',
          800: '#1B2540',
          700: '#1E3A8A',
          500: '#2563EB',
          300: '#60A5FA',
          100: '#E2E8F0',
          accent: '#F97316',
        },
        surface: {
          DEFAULT: '#0B1120',
          foreground: '#0F172A',
          muted: '#1E293B',
        },
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at 20% 20%, rgba(96,165,250,0.3), transparent 45%), radial-gradient(circle at 80% 10%, rgba(249,115,22,0.25), transparent 40%), radial-gradient(circle at 50% 80%, rgba(37,99,235,0.25), transparent 40%)',
      },
      boxShadow: {
        brand: '0 25px 45px -15px rgba(37, 99, 235, 0.45)',
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
