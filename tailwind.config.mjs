/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "selector", // Mantener el modo oscuro como selector
  theme: {
    extend: {
      colors: {
        background: "var(--background-light)", // Tema claro
        foreground: "var(--foreground-light)", // Tema claro
        // Definir colores para el tema oscuro
        'background-dark': "var(--background-dark)", 
        'foreground-dark': "var(--foreground-dark)", 
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Mantener el plugin de tipografía
  ],
};
