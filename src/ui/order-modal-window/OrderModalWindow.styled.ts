import { styled, Theme } from "@mui/material";

export const OrderWindowDivider = styled("div")<{ theme?: Theme }>(
  ({ theme }) => ({
    backgroundColor: "rgba(42, 37, 75, 0.9)",
    width: "100%",
    height: "100vh",
    position: "fixed",
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
  padding: "35px 25px 25px 25px",
  borderRadius: "15px",
  position: "relative",
}));
