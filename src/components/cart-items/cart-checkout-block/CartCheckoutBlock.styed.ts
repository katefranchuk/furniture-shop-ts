import { styled, Theme, Typography, TypographyProps } from "@mui/material";

export const CartCheckoutBlock = styled("div")<{ theme?: Theme }>(
  ({ theme }) => ({
    marginBottom: "48px",
  })
);

export const CartCheckoutTotal = styled("div")<{ theme?: Theme }>(
  ({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    columnGap: "16px",
    marginBottom: "16px",
  })
);

export const CartCheckoutText = styled(Typography)<
  TypographyProps & { theme?: Theme; component: string }
>(({ theme, component }) => ({
  color: theme.colors.darkPrimary,
}));

export const CartCheckoutTotalNumber = styled(Typography)<
  TypographyProps & { theme?: Theme; component: string }
>(({ theme, component }) => ({
  color: theme.colors.darkPrimary,
}));

export const CartCheckoutTextSmall = styled(Typography)<
  TypographyProps & { theme?: Theme; component: string }
>(({ theme, component }) => ({
  color: theme.colors.darkPrimary,
  marginBottom: "16px",
}));
