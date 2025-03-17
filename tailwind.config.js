/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "primary": "#A28BEE",
        "secondary": "#F1744C",
        "bg": "#121418"
      },
      fontFamily: {
        'dm': ['DMSans-Regular'],
        'dm-medium': ['DMSans-Medium'],
        'dm-bold': ['DMSans-Bold'],
        'dm-extrabold': ['DMSans-ExtraBold'],
        'dm-semibold': ['DMSans-SemiBold'],
        'dm-light': ['DMSans-Light'],
      },
    },
  },
  plugins: [],
}