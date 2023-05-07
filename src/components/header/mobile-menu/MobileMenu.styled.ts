import { styled, Theme, Typography, TypographyProps } from "@mui/material";

export const Menu = styled("div")<{
  theme?: Theme;
  isActive: boolean;
}>(({ theme, isActive }) => ({
  width: "100%",
  minHeight: "100vh",
  position: "absolute",
  top: "0",
  left: "0",
  right: "0",
  background: theme.colors.darkPrimary,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "10",
  transform: "translateX(-130%)",
  transition: "transform 0.5s ease-in-out",
  ...(isActive && {
    transform: "translateX(0)",
  }),
}));

export const MobileLinks = styled(Typography)<
  TypographyProps & { theme?: Theme; component: string }
>(({ theme }) => ({
  color: theme.colors.white,
}));

export const MobileMenuBtnClose = styled("button")<{ theme?: Theme }>(
  ({ theme }) => ({
    color: theme.colors.white,
    fontSize: "24px",
  })
);

export const MobileMeniList = styled("ul")<{ theme?: Theme }>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  rowGap: "20px",
}));
