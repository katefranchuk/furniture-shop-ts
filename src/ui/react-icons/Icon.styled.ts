import { Theme } from "@mui/material";
import { styled } from "@mui/system";

export const IconStyled = styled("div")<{
  theme?: Theme;
}>(({ theme }) => ({
  svg: {
    width: "18px",
    height: "18px",
  },
}));
