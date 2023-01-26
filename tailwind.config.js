
// module.exports = {
//   purge: [],
//   theme: {
//       fontFamily: {
//         sans: ['Nunito', 'sans-serif'],
//         display: ['Nunito', 'sans-serif'],
//         poppins: 'Poppins',
//         body: ['Nunito', 'sans-serif']
//       },
//       extend: {}
//   },
//   variants: {},
//   plugins: [
//       require('tailwindcss'),
//       require('autoprefixer')
//   ]
// }


module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: '#root',
  theme: {
    extend: {},
  },
  corePlugins: {
    // Remove Tailwind CSS's preflight style so it can use the MUI's preflight instead (CssBaseline).
    preflight: false,
  },
  plugins: [],
};
  
