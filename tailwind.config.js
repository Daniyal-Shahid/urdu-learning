module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Apply Tailwind to all files in src
  ],
  theme: {
    extend: {
      colors: {
        'green-light': '#d1e7d7',
        'green-medium': '#76c593',
        'green-primary': '#4caf50',
        'green-dark': '#3b7a42',
        'green-darker': '#2b5733',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["valentine"],
  },
};