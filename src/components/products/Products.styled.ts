import { styled, Theme, Typography, TypographyProps } from "@mui/material";

export const ProductsSection = styled("section")({
  marginBottom: "56px",
});

export const ProductsTitle = styled(Typography)<
  TypographyProps & { theme?: Theme; component: string }
>(({ theme, component }) => ({
  marginBottom: "33px",
}));

export const ProductsWrapper = styled("ul")({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  columnGap: "20px",
  marginBottom: "35px",
});
