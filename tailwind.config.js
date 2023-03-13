/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  // daisyui: {
  //   themes: [
  //     {
  //       BasicTheme: {
  //         primary: '#0FCFEC',
  //         secondary: '#19D3AE',
  //         accent: "#3A4256",
  //         neutral: "#3D4451",
  //         "base-100": "#FFFFFF",
  //       }
  //     }, "light", "dark"],
  //   darkMode: 'class',

  // },
  themes: [
    {
      mytheme: {
        primary: "#a991f7",
        secondary: "#f6d860",
        accent: "#37cdbe",
        neutral: "#3d4451",
        "base-100": "#ffffff",
      },
    }, "light", "dark"],
  darkMode: 'class',
  // daisyui: {
  //   themes: [
  //     {
  //       light: {
  //         ...require('daisyui/src/colors/themes')['[data-theme=light]'],
  //         '.btn-twitter': {
  //           'background-color': '#1EA1F1',
  //           'border-color': '#1EA1F1',
  //         },
  //         '.btn-twitter:hover': {
  //           'background-color': '#1C96E1',
  //           'border-color': '#1C96E1',
  //         },
  //       },
  //     },
  //     {
  //       dark: {
  //         ...require('daisyui/src/colors/themes')['[data-theme=dark]'],

  //         '.btn-twitter': {
  //           'background-color': '#EEAEA1',
  //           'border-color': '#1EA1F1',
  //         },
  //         '.btn-twitter:hover': {
  //           'background-color': '#1C96E1',
  //           'border-color': '#1C96E1',
  //         },
  //       },
  //     },
  //   ],
  // },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
