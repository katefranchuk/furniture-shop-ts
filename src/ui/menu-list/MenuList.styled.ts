import { styled, Theme, Typography, TypographyProps } from "@mui/material";

export const List = styled("ul")({
  display: "flex",
  flexDirection: "column",
  rowGap: "12px",
});

export const ListItem = styled("li")<{ theme?: Theme }>(({ theme }) => ({}));

export const FooterLink = styled(Typography)<
  TypographyProps & { theme?: Theme; component: string }
>(({ theme }) => ({
  color: theme.colors.white,
}));
