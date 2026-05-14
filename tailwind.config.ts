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
        bg:      '#0b0b14',
        surface: '#11111e',
        card:    '#16162a',
        line:    '#1e1e36',
        muted:   '#2a2a48',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      fontSize: {
        hero: 'clamp(2.8rem, 8vw, 5.5rem)',
      },
      animation: {
        'fade-up':   'fadeUp 0.6s ease forwards',
        'fade-in':   'fadeIn 0.5s ease forwards',
        'blink':     'blink 1s step-end infinite',
      },
      keyframes: {
        fadeUp:  { from: { opacity:'0', transform:'translateY(24px)' }, to: { opacity:'1', transform:'translateY(0)' } },
        fadeIn:  { from: { opacity:'0' }, to: { opacity:'1' } },
        blink:   { '0%,100%': { opacity:'1' }, '50%': { opacity:'0' } },
      },
    },
  },
  plugins: [],
}
export default config
