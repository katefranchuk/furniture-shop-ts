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
  transition: "background 0.3s ease-in-out",
  border: `1px solid ${theme.colors.lightGray}`,
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
  },
  "&:hover": {
    background: isBgDark ? theme.colors.white : theme.colors.darkPrimary,
    color: isWhite ? theme.colors.darkPrimary : theme.colors.white,
    border: isBgDark ? `1px solid ${theme.colors.darkPrimary}` : "",
  },
}));
