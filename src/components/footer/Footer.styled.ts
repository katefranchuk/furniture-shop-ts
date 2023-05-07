import { styled, Theme, Typography, TypographyProps } from "@mui/material";

export const FooterStyled = styled("footer")<{ theme?: Theme }>(
  ({ theme }) => ({
    background: theme.colors.darkPrimary,
    padding: "58px 0 25px 0 ",
  })
);

export const FooterInner = styled("div")<{ theme?: Theme }>(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const FooterList = styled("div")<{ theme?: Theme }>(({ theme }) => ({
  display: "flex",
  columnGap: "109px",
  [theme.breakpoints.down("sm")]: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    rowGap: "40px",
    marginBottom: "40px",
  },
}));

export const FooterForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const FormInner = styled("div")({
  display: "flex",
});

export const FormInput = styled("input")<{ theme?: Theme }>(({ theme }) => ({
  maxWidth: "100%",
  width: "485px",
  padding: "18px 0 18px 32px",
  background: "rgba(255, 255, 255, 0.15)",

  "&:: placeholder": {
    color: theme.colors.white,
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
    width: "100%",
  },
}));

export const FooterCopyright = styled("div")({
  borderTop: "1px solid #4E4D93",
  marginTop: "48px",
});

export const FooterWrapper = styled("div")({
  display: "flex",
  marginTop: "24px",
});

export const FooterSocial = styled("div")({
  display: "flex",
});

export const FooterListTitle = styled(Typography)<
  TypographyProps & { theme?: Theme; component: string }
>(({ theme }) => ({
  color: theme.colors.white,
}));
