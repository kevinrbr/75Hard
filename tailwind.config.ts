import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'

export default {
  content: ['./index.html', './src/**/*.{vue,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#fff9fb',
          100: '#fff1f6',
          200: '#ffdce8',
          300: '#ffc8dd',
          400: '#ffabc9',
          500: '#ff8db6'
        },
        shell: '#fffdfd',
        ink: '#574b57'
      },
      boxShadow: {
        card: '0 12px 30px rgba(250, 182, 208, 0.16)',
        soft: '0 6px 20px rgba(248, 192, 211, 0.18)'
      },
      fontFamily: {
        sans: ['"Manrope"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Fraunces"', 'Georgia', 'serif']
      },
      borderRadius: {
        '4xl': '2rem'
      },
      keyframes: {
        pop: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.08)' },
          '100%': { transform: 'scale(1)' }
        },
        rise: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        pop: 'pop 0.25s ease-out',
        rise: 'rise 0.3s ease-out'
      }
    }
  },
  plugins: [forms]
} satisfies Config
