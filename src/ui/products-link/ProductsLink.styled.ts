import { styled, Theme, Typography, TypographyProps } from "@mui/material";
import { Link } from "react-router-dom";

export const ProductsLinkStyled = styled(Link)<{
  theme?: Theme;
  isTransparent?: boolean;
  isWhite?: boolean;
}>(({ theme, isTransparent, isWhite }) => ({
  display: "inline-block",
  backgroundColor: isTransparent
    ? "rgba(249, 249, 249, 0.15)"
    : theme.colors.lightGray,
  padding: "15px 0",
  color: isWhite ? theme.colors.white : theme.colors.darkPrimary,
  width: "100%",
  maxWidth: "170px",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
  },
}));

export const ProductsLinkTitle = styled(Typography)<
  TypographyProps & { theme?: Theme; component: string }
>(({ theme }) => ({}));
