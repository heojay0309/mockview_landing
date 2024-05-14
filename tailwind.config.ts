import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }
        md: '768px',
        // => @media (min-width: 768px) { ... }
        lg: '1024px',
        // => @media (min-width: 1024px) { ... }
        xl: '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1920px',

        mobile: '390px',
        tablet: '740px',
        laptop: '1440px',
        desktop: '1920px',
      },
      fontSize: {
        h1: '48px',
        h2: '32px',
        h3: '24px',
        h4: '20px',
        h5: '16px',
        h6: '12px',
        p1: '16px',
        p2: '12px',
        button: '16px',
        dropdown1: '16px',
        dropdown2: '12px',
      },
      lineHeight: {
        h1: '56px',
        h2: '40px',
        h3: '32px',
        h4: '24px',
        h5: '24px',
        h6: '16px',
        p1: '24px',
        p2: '16px',
        button: '24px',
        dropdown1: '24px',
        dropdown2: '16px',
      },
      colors: {
        pageBackground: {
          light: '#F4F6FF',
          DEFAULT: '#F4F6FF',
          dark: '#020817',
        },
        pageText: {
          light: '#020817',
          DEFAULT: '#020817',
          dark: '#F4F6FF',
        },
        windowBackground: {
          light: '#EEEFF9',
          DEFAULT: '#EEEFF9',
          dark: '#0B142C',
        },
        windowBorder: {
          light: '#DDDDDD',
          DEFAULT: '#DDDDDD',
          dark: '#152357',
        },
        inputBackground: {
          light: '#FFFFFF',
          DEFAULT: '#FFFFFF',
          dark: '#FFFFFF',
        },
        inputBorder: {
          light: '#C1C1C1',
          DEFAULT: '#C1C1C1',
          dark: '#575757',
        },
        inputText: {
          light: '#636363',
          DEFAULT: '#636363',
          dark: '#636363',
        },
        buttonPrimary: {
          light: '#2F67E6',
          DEFAULT: '#2F67E6',
          dark: '#2F67E6',
        },
        buttonSecondary: {
          light: '#000000',
          DEFAULT: '#000000',
          dark: '#FFFFFF',
        },
        cardBackground: {
          light: {
            from: '#F5F5F5',
            to: '#E1EBF8',
          },
          DEFAULT: {
            from: '#F5F5F5',
            to: '#E1EBF8',
          },
          dark: {
            from: '#232C3A',
            to: '#011025',
          },
        },
        cardBorder: {
          light: '#D4DCE8',
          DEFAULT: '#D4DCE8',
          dark: '#283A55',
        },
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
