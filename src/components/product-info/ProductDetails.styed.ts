import { styled, Theme, Typography, TypographyProps } from "@mui/material";

export const DetailsSection = styled("section")<{ theme?: Theme }>(
  ({ theme }) => ({
    padding: "50px 0 47px 0",
    backgroundColor: theme.colors.lightGray,
    marginBottom: "64px",
  })
);

export const DetailsInner = styled("div")<{ theme?: Theme }>(({ theme }) => ({
  display: "flex",
  columnGap: "65px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const DetailsLeftColumn = styled("div")<{ theme?: Theme }>(
  ({ theme }) => ({
    img: {
      maxWidth: "600px",
      maxHeight: "681px",
      [theme.breakpoints.down("md")]: {
        maxWidth: "100%",
        minHeight: "250px",
      },
    },
  })
);

export const DetailsProductTitle = styled(Typography)<
  TypographyProps & { theme?: Theme; component: string }
>(({ theme, component }) => ({
  marginBottom: "16px",
  color: theme.colors.darkPrimary,
}));

export const DetailsProductText = styled(Typography)<
  TypographyProps & { theme?: Theme; component: string }
>(({ theme, component }) => ({
  marginBottom: "14px",
  color: theme.colors.darkPrimary,
}));

export const DetailsRightColumn = styled("div")({
  display: "flex",
  flexDirection: "column",
  padding: "40px 0",
});

export const DetailsFooter = styled("div")<{ theme?: Theme }>(({ theme }) => ({
  marginTop: "auto",
}));

export const DetailsFotterButtonsBlock = styled("div")<{ theme?: Theme }>(
  ({ theme }) => ({
    marginTop: "48px",
    display: "flex",
    alignItems: "center",
    gap: "16px",
  })
);
