const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    colors: {
      gray1: "#393939",
      gray2: "#2A2A2A",
      gray3: "#272727",
      green1: "#7BCA33",
    },
    extend: {
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideDown: {
          '0%': { transform: 'translateY(0)', opacity: 1 },
          '100%': { transform: 'translateY(-100%)', opacity: 0 },
        },
      },
      animation: {
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
    },
  },
  plugins: [flowbite.plugin()],
};
