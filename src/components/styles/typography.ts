import { Palette } from "@mui/material/styles/createPalette";
import { TypographyOptions } from "@mui/material/styles/createTypography";

export const typography:
  | TypographyOptions
  | ((palette: Palette) => TypographyOptions) = {
  fontFamily: "Satoshi",
  text1: {
    fontFamily: "Satoshi",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "1.5",
  },
  text2: {
    fontFamily: "Satoshi",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "1.5",
  },
  text3: {
    fontFamily: "Satoshi",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "1.37",
  },
  text4: {
    fontFamily: "Satoshi",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "1.35",
  },
  accent1: {
    fontFamily: "Clash Display",
    fontWeight: "400",
    fontSize: "32px",
    lineHeight: "1.40",
  },
  accent2: {
    fontFamily: "Clash Display",
    fontWeight: "400",
    fontSize: "32px",
    lineHeight: "1.21",
  },
  accent3: {
    fontFamily: "Clash Display",
    fontWeight: "400",
    fontSize: "24px",
    lineHeight: "1.41",
  },
  accent4: {
    fontFamily: "Clash Display",
    fontWeight: "400",
    fontSize: "36px",
    lineHeight: "1.38",
  },
  accent5: {
    fontFamily: "Clash Display",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "1.4",
  },
};
