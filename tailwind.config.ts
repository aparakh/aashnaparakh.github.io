import type { Config } from 'tailwindcss';

const withMT = require('@material-tailwind/react/utils/withMT');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#61dafb',
        secondary: '#D6FFFF',
        'header-background': '#1E1E1E',
        'section-background': '#283238',
        text: '#EEEEEE',
      },
    },
  },
  plugins: [],
};
export default withMT(config);
