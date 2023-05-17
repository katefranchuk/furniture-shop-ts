import { styled, Theme, Typography, TypographyProps } from "@mui/material";
import { NavLink } from "react-router-dom";

export const HeaderElement = styled("header")<{ theme?: Theme }>(
  ({ theme }) => ({
    width: "100%",
    minHeight: "132px",
    background: theme.colors.white,
    [theme.breakpoints.down("sm")]: {
      minHeight: "69px",
    },
  })
);

export const HeaderWrapper = styled("div")<{ theme?: Theme }>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

export const HeaderTop = styled("div")<{ theme?: Theme }>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px 28px",
  borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
}));

export const HeaderLogo = styled(Typography)<
  TypographyProps & { theme?: Theme; component: string }
>(({ theme }) => ({}));

export const HeaderIconWrapper = styled("div")<{ theme?: Theme }>(
  ({ theme }) => ({
    display: "flex",
    alignItems: "center",
    columnGap: "20px",
  })
);

export const Nav = styled("nav")<{ theme?: Theme }>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px 0",
}));

export const MenuList = styled("ul")<{ theme?: Theme }>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "0 44px",
}));

export const NavLinkStyled = styled(NavLink)<{ theme?: Theme }>(
  ({ theme }) => ({
    transition: "borderBottom 0.3s ease-in-out",

    "&.active": {
      borderBottom: `1px solid ${theme.colors.darkPrimary}`,
    },

    "&:hover": {
      color: theme.colors.borderDark,
    },
  })
);
