import { styled, Theme } from "@mui/material";

export const AllProductsMobileFilterWrapper = styled("div")<{ theme?: Theme }>(
  ({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    gap: "16px",
    marginBottom: "40px",
  })
);
