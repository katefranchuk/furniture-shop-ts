import { styled, Theme, Typography, TypographyProps } from "@mui/material";
import { Container } from "@mui/system";

export const PreviewSection = styled("section")<{ theme?: Theme }>(
  ({ theme }) => ({
    minHeight: "calc(100vh - 120px)",
    padding: "60px 0",
    [theme.breakpoints.down("sm")]: {
      minHeight: "0",
      padding: "0",
      marginBottom: "40px",
    },
  })
);

export const PreviewContainer = styled(Container)<{ theme?: Theme }>(
  ({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  })
);

export const PreviewBanner = styled("div")<{ theme?: Theme }>(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "minmax(320px, 760px) minmax(320px, 520px)",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const PreviewLeft = styled("div")<{ theme?: Theme }>(({ theme }) => ({
  backgroundColor: theme.colors.darkPrimary,
  padding: "60px 98px 60px 60px",
  minHeight: "464px",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    padding: "40px 24px 24px 24px",
  },
}));

export const PreviewHeading = styled(Typography)<
  TypographyProps & { theme?: Theme; component: string }
>(({ theme }) => ({
  color: theme.colors.white,
  marginBottom: "41px",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "80px",
  },
}));

export const PreviewDescription = styled(Typography)<
  TypographyProps & { theme?: Theme; component: string }
>(({ theme, component }) => ({
  marginTop: "auto",
  color: theme.colors.white,
  [theme.breakpoints.down("sm")]: {
    marginBottom: "32px",
  },
}));

export const PreviewRight = styled("div")<{ theme?: Theme }>(
  ({ theme }) => ({})
);
