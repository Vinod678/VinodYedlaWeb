import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /* All custom colors reference CSS variables so dark/light mode
           switching works automatically, including opacity modifiers like bg-bg/90 */
        bg:      'rgb(var(--color-bg)      / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        card:    'rgb(var(--color-card)    / <alpha-value>)',
        line:    'rgb(var(--color-line)    / <alpha-value>)',
        muted:   'rgb(var(--color-muted)   / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      fontSize: {
        hero: ['clamp(2.4rem, 7vw, 5.5rem)', { lineHeight: '1.05' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'blink':   'blink 1s step-end infinite',
        'spin-slow': 'spin 2s linear infinite',
      },
      keyframes: {
        fadeUp: { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        blink:  { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
      },
      transitionDuration: { DEFAULT: '200ms' },
    },
  },
  plugins: [],
}
export default config
