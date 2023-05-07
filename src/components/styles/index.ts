import { createTheme } from "@mui/material";
import { colors } from "./colors";
import { typography } from "./typography";

export const theme = createTheme({
  colors,
  defaultTransition: "0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)",
  typography,
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 900,
      lg: 1328,
      xl: 1440,
    },
  },
});
