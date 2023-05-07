import { styled, Theme, Typography, TypographyProps } from "@mui/material";

export const OrderSummaryBlock = styled("div")<{ theme?: Theme }>(
  ({ theme }) => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    border: `2px solid ${theme.colors.darkPrimary}`,
    padding: "10px",
    justifyContent: "space-between",
    borderRadius: "5px",
  })
);

export const OrderSummaryCard = styled("div")<{ theme?: Theme }>(
  ({ theme }) => ({})
);

export const OrderSummaryInner = styled("div")<{ theme?: Theme }>(
  ({ theme }) => ({
    display: "flex",
    gap: "15px",
  })
);

export const OrderSummaryContent = styled("div")<{ theme?: Theme }>(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "10px 0",
  })
);

export const OrderSummaryCardBottom = styled("div")<{ theme?: Theme }>(
  ({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  })
);
