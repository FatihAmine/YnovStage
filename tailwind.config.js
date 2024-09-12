/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Lgreen: "#23B2A4",
        Lgray: "#969696",
      },
      screens: {
        xs: { max: "650px" }, // Apply to screens 650px and below
        sm: "651px",         // Apply to screens 651px and above
        md: "825px",         // Apply to screens 825px and above
        lg: "1025px",         // Apply to screens 992px and above
        xl: "1200px",        // Apply to screens 1200px and above
        pc: "1920px",        // Apply to screens 1920px and above
        k: "2560px",      // Apply to screens 2560px and above
      },
    },
  },
  plugins: [],
};
