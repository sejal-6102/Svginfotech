/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite', // यह आपका पुराना वाला है
        'rotate-slow': 'rotate 15s linear infinite', // ✅ यह नया एनीमेशन है
      },
      // 2. एनीमेशन को परिभाषित करें (keyframes)
      keyframes: {
        // 'spin' आपके पास पहले से हो सकता है
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        // ✅ 'rotate' keyframes यहाँ जोड़ें
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}

