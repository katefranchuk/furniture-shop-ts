import {
  Container,
  styled,
  Theme,
  Typography,
  TypographyProps,
} from "@mui/material";

export const SubscriptionSection = styled("section")<{ theme?: Theme }>(
  ({ theme }) => ({
    backgroundColor: theme.colors.lightGray,
    padding: "52px 0 62px 0",
  })
);

export const SubscriptionContainer = styled(Container)<{ theme?: Theme }>(
  ({ theme }) => ({
    backgroundColor: theme.colors.white,
  })
);

export const SubscriptionWrapper = styled("div")<{ theme?: Theme }>(
  ({ theme }) => ({
    padding: "68px 0 54px 0",
    textAlign: "center",
  })
);

export const SubscriptionTitle = styled(Typography)<
  TypographyProps & { theme?: Theme; component: string }
>(({ theme }) => ({
  color: theme.colors.darkPrimary,
  marginBottom: "16px",
}));

export const SubscriptionText = styled(Typography)<
  TypographyProps & { theme?: Theme; component: string }
>(({ theme }) => ({
  color: theme.colors.darkPrimary,
  maxWidth: "470px",
  margin: "0 auto 72px auto",
}));

export const SubscriptionForm = styled("form")<{ theme?: Theme }>(
  ({ theme }) => ({
    display: "flex",
    justifyContent: "center",
  })
);

export const SubscriptionInput = styled("input")<{ theme?: Theme }>(
  ({ theme }) => ({
    background: theme.colors.lightGray,
    border: "none",
    width: "100%",
    maxWidth: "354px",
    padding: "17px 0 17px 32px",
    fontSize: "16px",
  })
);
