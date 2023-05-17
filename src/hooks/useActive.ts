import { useState } from "react";

export const useActive = (initialState = false) => {
  const [isActive, setIsActive] = useState(initialState);

  const toggle = () => {
    setIsActive((current) => !current);
    document.body.style.overflow = "visible";
  };

  const changeState = (value: boolean) => {
    setIsActive(value);
  };

  return {
    isActive,
    toggle,
    changeState,
  };
};
