/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        primary:'#fff',
        white:'#ffffff',
        whitesmoke:'#f2f2f2',
        appColor: "rgba(179, 42, 224)",
        red: '#ea4d10'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    backgroundImage: {
      'hero-image': "url('/src/assets/background.jpg')",
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
};