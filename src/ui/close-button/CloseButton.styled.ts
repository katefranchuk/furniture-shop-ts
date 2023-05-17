import { styled, Theme } from "@mui/material";

export const CloseButtonStyled = styled("button")<{ theme?: Theme }>({
  position: "absolute",
  top: 7,
  right: 7,
  fontSize: "22px",
});
