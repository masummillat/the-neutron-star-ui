/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          0: '#000000',
          10: '#21005D',
          20: '#381E72',
          30: '#4F378B',
          40: '#6750A4',
          50: '#7F67BE',
          60: '#9A82DB',
          70: '#B69DF8',
          80: '#D0BCFF',
          90: '#EADDFF',
          95: '#F6EDFF',
          99: '#FFFBFE',
          100: '#FFFFFF'
        },
        none: 'none'
      }
    }
  },
  plugins: []
};
