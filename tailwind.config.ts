import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2F67E6',
        page: {
          bg: '#FAFAFA',
          text: '#2B2B2B',
        },
        window: {
          bg: '#F1F1F8',
          outline: '#DDDDDD',
        },
        form: {
          bg: '#FAFAFA',
          outline: '#C1C1C1',
          text: '#636363',
        },
        button: {
          primary: '#2F67E6',
          secondary: '#6A6A6A',
        },
      },

      lineHeight: {
        DEFAULT: '1.5', // Sets the default line-height for the project
        tighter: '1.2',
      },
      animation: {
        'ping-slow': 'ping 2s infinite',
        'bounce-slow': 'bounce 4s infinite ',
        'spin-slow': 'spin 5s infinite',
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-10%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        dissolve: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        circle: {},
      },
      letterSpacing: {
        DEFAULT: '-0.01em',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
