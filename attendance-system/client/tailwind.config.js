
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#7360F1',
        'light-purple':"#DDD8FD",
      },
      
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}