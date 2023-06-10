/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['SpaceGrotesk', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'gradient-bg': "url('./src/assets/bg-main-desktop.png')"
      },
      colors: {
        'input-error': '#ff5252',
        'input-active-gradient-from': '#6448fe',
        'input-active-gradient-to': '#600594',
        'light-graylish-violet': '#dedddf',
        'dark-graylish-violet': '#8e8593',
        'very-dark-violet': '#21092f'
      }
    }
  },
  plugins: []
}
