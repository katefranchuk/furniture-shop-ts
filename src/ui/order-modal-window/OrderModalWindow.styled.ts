import { styled, Theme } from "@mui/material";

export const OrderWindowDivider = styled("div")<{ theme?: Theme }>(
  ({ theme }) => ({
    backgroundColor: theme.colors.darkPrimary,
    opacity: 0.9,
    width: "100%",
    height: "100vh",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  })
);

export const OrderWindow = styled("div")<{ theme?: Theme }>(({ theme }) => ({
  backgroundColor: theme.colors.white,
  width: "100%",
  maxWidth: "700px",
  margin: "0 16px 0 16px",
  padding: "25px",
  borderRadius: "15px",
}));
