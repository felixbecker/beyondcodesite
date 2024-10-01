// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }

const themeDir = __dirname;

module.exports = {
  plugins: [
    require('tailwindcss')(themeDir + '/tailwind.config.js'),
    require('autoprefixer')({
      path:[themeDir],
    })
  ],
}