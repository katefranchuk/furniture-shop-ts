import { Theme } from "@mui/material";
import { styled } from "@mui/system";

export const ProductsListWrapper = styled("ul")<{
  theme?: Theme;
}>(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "20px",
  marginBottom: "35px",

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
}));
