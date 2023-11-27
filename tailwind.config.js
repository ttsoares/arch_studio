/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      base: ["1.125rem", "1.5rem"],
      lg: ["2rem", "2.5rem"],
      xl: [
        "4.5rm",
        {
          lineHeight: "4rem",
          letterSpacing: "-0.125rem",
          fontWeight: "700",
        },
      ],
      "2xl": [
        "6rem",
        {
          lineHeight: "5rem",
          letterSpacing: "-0.125rem",
          fontWeight: "700",
        },
      ],
      "3xl": [
        "15.625rem",
        {
          lineHeight: "12.5rem",
          letterSpacing: "-0.313rem",
          fontWeight: "700",
        },
      ],
    },
    extend: {
      colors: {
        cus_d_blue: "#1B1D23",
        cus_d_gray: "#60636D",
        cus_m_gray: "#7D828F",
        cus_l_gray: "#C8CCD8",
        cus_vl_gray: "#EEEFF4",
        cus_red: "#DF5656",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1440px",
      },
    },
  },
  plugins: [],
};
