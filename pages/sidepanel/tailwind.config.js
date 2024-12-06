const baseConfig = require('@univer-clipsheet/tailwindcss-config');

/** @type {import('tailwindcss').Config} */
module.exports = {
    ...baseConfig,
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
};
