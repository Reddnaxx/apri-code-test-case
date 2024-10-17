const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4788F6',
      },
      keyframes: {
        'expand-menu': {
          '0%': {
            maxHeight: 0,
          },
          '100%': {
            maxHeight: '100dvh',
            overflow: 'visible',
          },
        },
      },
      animation: {
        'expand-menu': 'expand-menu 1.5s ease forwards',
      },
    },
  },
  plugins: [],
};
