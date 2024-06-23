/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navbar: '#676767',
        'vetgreen-200': '#4361ee',
        'logo-container': '#DBDBDB',
        'nav-text': '#7A7A7A',
        'page-color': '#E3F4FF',
        'search-button': '#009CFF'
      }
    }
  },
  plugins: []
}
