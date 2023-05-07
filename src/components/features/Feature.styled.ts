import { styled, Theme, Typography, TypographyProps } from "@mui/material";

export const FeatureSection = styled("section")({
  textAlign: "center",
  marginBottom: "80px",
});

export const FeatureTitle = styled(Typography)<
  TypographyProps & { theme?: Theme; component: string }
>(({ theme, component }) => ({
  marginBottom: "51px",
}));

export const FeatureWrapper = styled("ul")<{
  theme?: Theme;
}>(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  columnGap: "59px",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    rowGap: "36px",
  },
}));
