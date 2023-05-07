import { styled, Theme, Typography, TypographyProps } from "@mui/material";
import bg from "../../assets/img/headersbg.png";

export const AllProductsSection = styled("section")({});

export const AllProductsHeader = styled("div")<{ theme?: Theme }>(
  ({ theme }) => ({
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    minHeight: "209px",
    marginBottom: "36px",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      minHeight: "146px",
      textAlign: "center",
    },
  })
);

export const AllProductsTitle = styled(Typography)<
  TypographyProps & { theme?: Theme; component: string }
>(({ theme }) => ({
  color: theme.colors.white,
  marginBottom: "20px",
}));

export const AllProductInner = styled("div")<{
  theme?: Theme;
}>(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 2fr",

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const AllProductsSx = {
  gridTemplateColumns: "repeat(3, 1fr)",
};

export const ProductsFilterTitle = styled(Typography)<
  TypographyProps & { theme?: Theme; component: string }
>(({ theme, component }) => ({
  marginBottom: "20px",
  color: theme.colors.darkPrimary,
}));
