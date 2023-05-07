import {
  Container,
  styled,
  Theme,
  Typography,
  TypographyProps,
} from "@mui/material";

export const AboutUsSection = styled("section")({});

export const AboutUsInner = styled(Container)({
  position: "relative",
  display: "grid",
});

export const AboutUsContent = styled("div")<{ theme?: Theme }>(({ theme }) => ({
  maxWidth: "514px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  minHeight: "603px",

  [theme.breakpoints.down("md")]: {
    minHeight: "888px",
    display: "block",
  },
}));

export const AboutUsImageBlock = styled("div")<{ theme?: Theme }>(
  ({ theme }) => ({
    img: {
      position: "absolute",
      bottom: 0,
      right: -60,
      height: "603px",

      [theme.breakpoints.down("md")]: {
        height: "358px!important",
        right: "0",
      },
    },
  })
);

export const AboutUsTitle = styled(Typography)<
  TypographyProps & { theme?: Theme; component: string }
>(({ theme, component }) => ({
  marginBottom: "25px",
  color: theme.colors.darkPrimary,
}));

export const AboutUsText = styled(Typography)<
  TypographyProps & { theme?: Theme; component: string }
>(({ theme, component }) => ({
  marginBottom: "25px",
  color: theme.colors.darkPrimary,
}));
