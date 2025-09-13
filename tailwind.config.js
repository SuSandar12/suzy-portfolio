module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          black: '#111111',
          pink: '#ff4f9a',
          gray: '#b0b0b0',
        },
        // For convenience, add direct color names
        black: '#111111',
        pink: '#ff4f9a',
        gray: '#b0b0b0',
      },
    },
  },
  plugins: [require('taos/plugin')],
}
