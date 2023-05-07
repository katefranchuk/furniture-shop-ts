import { CircularProgress } from "@mui/material";
import { FC } from "react";
import { SpinnerStyled } from "./Spinner.styled";

const Spinner: FC = () => {
  return (
    <SpinnerStyled>
      <CircularProgress />
    </SpinnerStyled>
  );
};

export default Spinner;
