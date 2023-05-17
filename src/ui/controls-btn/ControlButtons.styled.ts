import { styled, Theme, Typography, TypographyProps } from "@mui/material";

export const ControlButtonsWrapper = styled("div")<{ theme?: Theme }>(
  ({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
  })
);

export const ControlButtonStyled = styled("button")<{ theme?: Theme }>(
  ({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "backgroundColor 0.3s ease-in-out",
    width: "25px",
    height: "25px",

    svg: {
      display: "flex",
    },

    "&:hover": {
      color: theme.colors.white,
      backgroundColor: theme.colors.darkPrimary,
      borderRadius: "50%",
    },
  })
);

export const ControlButtonQuantity = styled(Typography)<
  TypographyProps & { theme?: Theme; component: string }
>(({ theme, component }) => ({
  color: theme.colors.darkPrimary,
}));
