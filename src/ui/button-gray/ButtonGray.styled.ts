import { styled, Theme } from "@mui/material";

export const BtnElement = styled("button")<{
  theme?: Theme;
  isWhite?: boolean;
  isBgDark?: boolean;
}>(({ theme, isWhite, isBgDark }) => ({
  maxWidth: "170px",
  width: "100%",
  display: "inline-block",
  backgroundColor: isBgDark ? theme.colors.darkPrimary : theme.colors.lightGray,
  padding: "15px 0",
  color: isWhite ? theme.colors.white : theme.colors.darkPrimary,
  transition: "background-color 0.3 ease-in-out",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
  },
  "&:hover": {
    backgroundColor: isBgDark ? theme.colors.white : theme.colors.darkPrimary,
    color: isWhite ? theme.colors.darkPrimary : theme.colors.white,
  },
}));
