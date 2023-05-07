import { styled, Theme, Typography, TypographyProps } from "@mui/material";

export const OrderFormStyled = styled("div")<{ theme?: Theme }>(
  ({ theme }) => ({
    display: "flex",
    gap: "40px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  })
);

export const OrderFormInner = styled("form")<{ theme?: Theme }>(
  ({ theme }) => ({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "left",
    rowGap: "30px",
    flex: 1,
  })
);

export const OrderFormControll = styled("div")<{ theme?: Theme }>(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    rowGap: "20px",
    width: "100%",
  })
);

export const OrderFormInput = styled("input")<{ theme?: Theme }>(
  ({ theme }) => ({
    border: `1px solid ${theme.colors.darkPrimary}`,
    padding: "7px 0 7px 10px",
    width: "100%",
    borderRadius: "5px",
  })
);

export const OrderFormWrapper = styled("div")<{ theme?: Theme }>(
  ({ theme }) => ({})
);
