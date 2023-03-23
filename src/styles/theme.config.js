import GlobalStyle from "./GlobalStyle";

GlobalStyle;
const light = {
  bg: {
    primary: `var(--white)`,
    secondary: `var(--light-black)`,
    tertiary: "rgba(0,0,0,0.6)",
    border: "#EAEAEA",
    inset: "#e2e4e8",
    input: "rgba(65,67,78,0.12)",
    hover:
      "linear-gradient(90deg, rgba(255, 233, 244, 0.4) 0%, rgba(234, 243, 255, 0.7) 100%)",
    selection: "#00FFFF",
  },
  text: {
    primary: `var(--black-text)`,
    secondary: "rgba(0,0,0,0.5)",
    tertiary: "#646464",
    quarternary: "#9194a1",
    placeholder: "rgba(82,85,96,0.5)",
    onPrimary: "#ffffff",
  },
  img: {
    filter: "invert(0)",
  },
};

const dark = {
  bg: {
    primary: `var(--black)`,
    secondary: `var(--light-white)`,
    tertiary: "rgba(255,255,255,0.5)",
    border: "#EAEAEA",
    inset: "#343434",
    input: "rgba(191,193,201,0.12)",
    hover:
      "linear-gradient(90deg, rgba(30, 28, 50, 0.8) 0%, rgba(43, 22, 29, 0.7) 100%)",
    selection: "#f81ce5",
  },
  text: {
    primary: `var(--white)`,
    secondary: "rgba(255,255,255,0.3)",
    tertiary: "#a9abb6",
    quarternary: "#6c6f7e",
    placeholder: "rgba(145,148,161,0.5)",
    onPrimary: "#050505",
  },
  img: {
    filter: "invert(1)",
  },
  // ...
};

const defaultTheme = {
  fontSizes: [
    "14px", // 0
    "16px", // 1
    "18px", // 2
    "22px", // 3
    "26px", // 4
    "32px", // 5
    "40px", // 6
  ],
  fontWeights: {
    body: 400,
    subheading: 500,
    link: 600,
    bold: 700,
    heading: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.3,
    code: 1.6,
  },
  deviceSize: {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px",
  },
  // ...
};

export const lightTheme = { ...defaultTheme, ...light };
export const darkTheme = { ...defaultTheme, ...dark };
