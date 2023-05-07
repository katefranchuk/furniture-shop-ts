// const theme = Object.freeze({
//   colors: {
//     accent: ["linear-gradient(261.69deg, #FF6432 12.12%, #FFA228 86.72%)"],
//     primary: "#ffffff",
//     secondary: "#A3A3A3",
//     dark: "#515151",
//     lightBackground: "#210A01",
//     mainBackground: [
//       "background-image: linear-gradient(to right top, #180a00, #1a0b00, #1b0b00, #1d0c00, #1e0c00);",
//     ],
//     darkBackground: [
//       "linear-gradient(245.71deg, #170A00 4.96%, #170600 33.7%, #0F0700 68.41%, #170A00 96.42%)",
//     ],
//   },
//   fontSizes: {
//     // small: "70px",
//     // medium: "18px",
//     // large: "22px",
//   },
//   spacing: (value: number) => `${4 * value}px`,
//   space: [0, 4, 8, 16, 32, 64],
//   shadows: {
//     // small: "0 5px 7px -1px rgba(51, 51, 51, 0.23)",
//     // regular: "0px 4px 10px 4px #9e9e9e",
//     // medium: "0 9px 47px 11px rgba(51, 51, 51, 0.18);",
//   },
//   radii: {
//     // normal: "4px",
//     round: "50%",
//   },
//   animation: {
//     cubicBezier: "0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)",
//   },
// });

// export default theme;
import { CSSProperties } from "react";

declare module "@mui/material/styles" {
  interface Theme {
    colors: {
      darkPrimary: CSSProperties["color"];
      primary: CSSProperties["color"];
      lightGray: CSSProperties["color"];
      borderGray: CSSProperties["color"];
      white: CSSProperties["color"];
      borderDark: CSSProperties["color"];
    };
    noise: CSSProperties & { [k: string]: unknown | CSSProperties };
    defaultTransition: CSSProperties["transition"];
  }

  interface ThemeOptions {
    colors: {
      darkPrimary: CSSProperties["color"];
      primary: CSSProperties["color"];
      lightGray: CSSProperties["color"];
      borderGray: CSSProperties["color"];
      white: CSSProperties["color"];
      borderDark: CSSProperties["color"];
    };
    noise?: CSSProperties & { [k: string]: unknown | CSSProperties };
    defaultTransition?: CSSProperties["transition"];
  }

  interface TypographyVariants {
    text1: CSSProperties;
    text2: CSSProperties;
    text3: CSSProperties;
    text4: CSSProperties;
    accent1: CSSProperties;
    accent2: CSSProperties;
    accent3: CSSProperties;
    accent4: CSSProperties;
    accent5: CSSProperties;
  }

  interface TypographyVariantsOptions {
    text1: CSSProperties;
    text2: CSSProperties;
    text3: CSSProperties;
    text4: CSSProperties;
    accent1: CSSProperties;
    accent2: CSSProperties;
    accent3: CSSProperties;
    accent4: CSSProperties;
    accent5: CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    text1: true;
    text2: true;
    text3: true;
    text4: true;
    accent1: true;
    accent2: true;
    accent3: true;
    accent4: true;
    accent5: true;
  }
}
