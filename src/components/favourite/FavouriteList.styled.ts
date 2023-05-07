import { styled, Theme, Typography, TypographyProps } from "@mui/material";

export const FavoriteListTitle = styled(Typography)<
  TypographyProps & { theme?: Theme; component: string }
>(({ theme }) => ({
  color: theme.colors.darkPrimary,
  margin: "64px 0 48px 0 ",
  [theme.breakpoints.down("sm")]: {
    margin: "36px 0 40px 0",
  },
}));
