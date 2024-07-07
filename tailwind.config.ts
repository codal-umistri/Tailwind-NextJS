import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
          gray:{
            700:'#36485C'
          },
          indigo:{
            700:'#4328EB'
          }
      },
      transitionDuration:{
        2000: '2000ms'
      },
      transitionDelay:{
          400: '400ms',
          600:'600ms',

      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow:{around: "0 0 20px 0 rgba(0,0,0,0.4)"},
    },
  },
  plugins: [],
};
export default config;
