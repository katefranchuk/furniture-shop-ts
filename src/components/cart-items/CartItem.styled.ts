import { styled, Theme, Typography, TypographyProps } from "@mui/material";

export const ProductsListItem = styled("ul")<{ theme?: Theme }>(
  ({ theme }) => ({
    height: "calc(100vh - 300px)",
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
  })
);

export const ProductsTable = styled("div")<{ theme?: Theme }>(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "2fr 1fr 1fr",
  borderBottom: `1px solid ${theme.colors.borderGray}`,
  paddingBottom: "12px",
  marginBottom: "20px",
}));

export const ProductTableItem = styled("li")<{ theme?: Theme }>(
  ({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr",
    alignItems: "center",
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
    },
  })
);

export const ProductTableCard = styled("div")<{ theme?: Theme }>(
  ({ theme }) => ({
    display: "flex",
    alignItems: "center",
    columnGap: "21px",
  })
);

export const ProductTableCardBottom = styled("div")<{ theme?: Theme }>(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
    },
  })
);

export const ProductCartPageTitle = styled(Typography)<
  TypographyProps & { theme?: Theme; component: string }
>(({ theme, component }) => ({
  margin: "64px 0 48px 0 ",
  color: theme.colors.darkPrimary,
  [theme.breakpoints.down("sm")]: {
    margin: "36px 0 40px 0",
  },
}));

export const ProductCardTitle = styled(Typography)<
  TypographyProps & { theme?: Theme; component: string }
>(({ theme, component }) => ({
  marginBottom: "8px",
  color: theme.colors.darkPrimary,
}));

export const ProductCardText = styled(Typography)<
  TypographyProps & { theme?: Theme; component: string }
>(({ theme, component }) => ({
  marginBottom: "8px",
  color: theme.colors.darkPrimary,

  "&:last-child": {
    marginBottom: "16px",
  },
}));

export const ProductCardBottomChekout = styled("div")<{ theme?: Theme }>(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      alignItems: "normal",
    },
  })
);
