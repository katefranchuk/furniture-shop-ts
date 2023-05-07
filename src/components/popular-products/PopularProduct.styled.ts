import { styled, Theme, Typography, TypographyProps } from "@mui/material";

export const PopularProductsSection = styled("section")({
  padding: "64px 0 48px 0",
});

export const PopularProductsWrapper = styled("ul")<{
  theme?: Theme;
}>(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "2fr 1fr 1fr",
  gap: "20px",
  marginBottom: "42px",

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const PopularProductCard = styled("li")<{
  theme?: Theme;
}>(({ theme }) => ({
  img: {
    marginBottom: "24px",
  },
}));

export const PopularProductTitleSection = styled(Typography)<
  TypographyProps & { theme?: Theme; component: string }
>(({ theme, component }) => ({
  marginBottom: "25px",
}));

export const PopularProductCardTitle = styled(Typography)<
  TypographyProps & { theme?: Theme; component: string }
>(({ theme, component }) => ({
  marginBottom: "8px",
}));
