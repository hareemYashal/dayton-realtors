export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blueprint-blue': '#0D47A1',
        'light-gray': '#F7F7F7',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'heading': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

