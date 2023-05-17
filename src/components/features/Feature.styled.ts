import { styled, Theme, Typography, TypographyProps } from "@mui/material";

export const FeatureSection = styled("section")({
  textAlign: "center",
  marginBottom: "80px",
});

export const FeatureTitle = styled(Typography)<
  TypographyProps & { theme?: Theme; component: string }
>(({ theme, component }) => ({
  marginBottom: "51px",
  color: theme.colors.darkPrimary,
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

export const FeatureItemStyled = styled("li")<{
  theme?: Theme;
}>(({ theme }) => ({
  textAlign: "left",

  svg: {
    width: "24px",
    height: "24px",
    display: "flex",
    marginBottom: "16px",
  },
}));

export const FeatureItemTitle = styled(Typography)<
  TypographyProps & { theme?: Theme; component: string }
>(({ theme, component }) => ({
  marginBottom: "8px",
  color: theme.colors.darkPrimary,
}));
