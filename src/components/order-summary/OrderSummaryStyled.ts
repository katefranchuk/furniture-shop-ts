import { styled, Theme, Typography, TypographyProps } from "@mui/material";

export const OrderSummaryBlock = styled("div")<{ theme?: Theme }>(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    flex: 1,
    gap: "10px",
    border: `2px solid ${theme.colors.darkPrimary}`,
    padding: "10px",
    justifyContent: "space-between",
    borderRadius: "5px",
  })
);

export const OrderSummaryCard = styled("ul")<{ theme?: Theme }>(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "15px",

    height: "calc(100vh - 550px)",
    overflowY: "auto",

    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-track": {
      background: "none",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.colors.darkPrimary,
      width: "1px",
      borderRadius: "12px",
    },

    [theme.breakpoints.down("sm")]: {
      height: "calc(100vh - 600px)",
    },
    [theme.breakpoints.down(380)]: {
      height: "calc(100vh - 500px)",
    },
  })
);

export const OrderSummaryInner = styled("li")<{ theme?: Theme }>(
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
    alignItems: "flex-start",
  })
);

export const OrderSummaryCardBottom = styled("div")<{ theme?: Theme }>(
  ({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
  })
);
