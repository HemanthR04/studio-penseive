import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor:{
        "primary":"#f2f2f2",
        "secondary":"#2F2F2F"
      },
      textColor:{
        "primary":"#f2f2f2",
        "secondary":"#2F2F2F"
      },
      fontFamily:{
        "Gambarin":"Gambarin",
        "Switzer":"Switzer",
        "Satoshi":"Satoshi"
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      fontSize:{
        "Heading-mobile":"24px",
        "MassiveHeading":"61.1px",
        "paragraph":"14px",
        "HeadingMultipleLines":"24px",
        "Heading-PC":"28px",
        "MassiveHeading-PC":"130px",
        "paragraph-PC":"16px",
        "HeadingMultipleLines-PC":"24px"
      },
      lineHeight:{
        "Heading-mobile":"32px",
        "MassiveHeading":"60px",
        "paragraph":"14px",
        "HeadingMultipleLines":"28px",
        "Heading-PC":"24px",
        "MassiveHeading-PC":"110px",
        "paragraph-PC":"1parapx",
        "HeadingMultipleLines-PC":"24px"
      }
      
    },
    plugins: [addVariablesForColors],
  },
  plugins: [],
};
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
export default config;
