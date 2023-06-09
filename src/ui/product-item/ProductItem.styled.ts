import { styled, Theme, Typography, TypographyProps } from "@mui/material";

export const Card = styled("li")<{ theme?: Theme }>(({ theme }) => ({
  img: {
    maxHeight: "375px",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      maxHeight: "230px",
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

  img: {
    maxHeight: "340px",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      maxHeight: "230px",
      minHeight: "227px",
    },
  },
}));
