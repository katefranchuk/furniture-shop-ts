import { styled, Theme, Typography, TypographyProps } from "@mui/material";

export const Card = styled("li")<{ theme?: Theme }>(({ theme }) => ({
  img: {
    [theme.breakpoints.down("md")]: {
      maxHeight: "360px",
      minHeight: "227px",
    },
  },
}));

export const CardHeading = styled(Typography)<
  TypographyProps & { theme?: Theme; component: string }
>(({ theme, component }) => ({
  margin: "24px 0 15px 0",
}));

export const CardBottom = styled("div")<{ theme?: Theme }>(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "start",
  },
}));

export const CardImageBlock = styled("div")<{ theme?: Theme }>(({ theme }) => ({
  position: "relative",
}));
