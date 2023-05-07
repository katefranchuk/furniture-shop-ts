import { styled, Theme } from "@mui/material";

export const AddToFavouriteBtnStyled = styled("button")<{ theme?: Theme }>(
  ({ theme }) => ({
    position: "absolute",
    right: "5px",
    top: "5px",

    svg: {
      width: "25px",
      height: "25px",

      "&:hover": {
        color: "black",
      },
    },
  })
);
