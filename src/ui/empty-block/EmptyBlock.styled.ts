import { styled, Typography, Theme, TypographyProps } from "@mui/material";

export const EmptyBlockStyled = styled("div")({
  minHeight: "calc(100vh - 500px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const EmptyBlockTitle = styled(Typography)<
  TypographyProps & { theme?: Theme; component: string }
>(({ theme }) => ({
  color: theme.colors.darkPrimary,
}));
